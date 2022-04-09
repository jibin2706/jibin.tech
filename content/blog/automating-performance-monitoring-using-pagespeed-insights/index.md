---
title: 'Automating website performance monitoring using PageSpeed insights'
date: 2021-06-21
info: 'Leveraging Lighthouse CI and PageSpeed insights api to schedule production website performance data collection.'
image: 'featured-image.png'
tags: ['web', 'performance']
---

![Lighthouse Performance Audit](featured-image.png)


Improving website performance can be directly linked towards improving business goals like lower bonus rate, higher conversions & improving SEO among others. So improving and monitoring web performance metrics is crucial.

There are many tools to monitor you website performance metrics like
  - Chrome Dev Tools
  - [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/)
  - [web.dev](https://web.dev/measure/)
  - [Lighthouse metrics](https://lighthouse-metrics.com/)
  - And many more

But one issues is that the process is manual and there is no good way to manage and compare the results in the future.

We will be leveraging Lighthouse CI and page speed insights api to schedule performance data collection on directly on the production url.

Running lighthouse on the CI process is important so that you can catch regression when pushing on to the production environment. It is also important to monitor the production environment because there might be difference in the Ci and production environment like 
	* server (on ci process the code and performance testing server are close which might provide higher score )
	* 3rd party script being loaded on the production environment




## Configuring
	* Getting  PageSpeed Insights API key
	https://developers.google.com/speed/docs/insights/v5/get-started 
	This limit on this api key is 25,000 request per day and 1 request per second.
	* Installing dependencies
	Create a new directory and install the following packages
 `@lhci/cli` , `@lhci/server`,  `sqlite3` 

```
yarn init -y
yarn add @lhci/cli sqlite3
```

We will be using sqlite for storing the data but you can easily swap it will sql  database.
	
	* Adding npm scripts
	For starting the server & adding new projects to the lighthouse we need the following script `lhci server` & `lhci wizard`
The package.json file should look something like this
```
{
  "name": "lhci-server-template",
  "version": "1.0.0",
  "description": "Lighthouse CI server template",
  "main": " ",
  "author": "Jibin Thomas",
  "license": "MIT",
  "scripts": {
    "start": "lhci server",
    "wizard": "lhci wizard"
  },
  "dependencies": {
    "@lhci/cli": "^0.8.0",
    "@lhci/server": "^0.8.0",
    "sqlite3": "^5.0.2"
  }
}
```
		
 
	* Creating configuration file
	While start the lhci server it picks up configuration from `lighthouserc.js` file. We will create this file on the root of the project.

```
	module.exports = {
  ci: {
    server: {
		port: 9001,
      psiCollectCron: {
        psiApiKey: 'AIzaSyAPjGOVHDG0ByrpN2q7lArg1TOnKgz4Usc',
      },
      storage: {
        sqlDialect: 'sqlite',
        sqlDatabasePath: './db.sql',
      },
    },
  },
}
```

port: specify the port in which the you want the server to run
psiApiKey: paste in the PageSpeedInsights key you got from the 1st step
sqlDatabasePath: create a new file `db.sql` on the root of the project

	* Create project
	Now that you have create the configuration file you can start the server 
```
yarn start
```
	By default the server will run on the 9001 port
	
	You can now create a new project

```
yarn wizard
```
	

Note: 
		1. Make sure to add `http://localhost:9001` as the LHCI server URL
		2. Question about project repo and project branch can be left blank since we will be using production website url.
		3. After the setup is completed you will project with build and admin token keep this a secret.



### Adding cron job to audit the site


```
sites: [
          {
            label: 'jibin.tech',
            projectSlug: 'jibin.tech',
            schedule: '0 */12 * * *', // twice every` day ref https://crontab.guru/#0_*/12_*_*_*
            numberOfRuns: 3,
            urls: ['https://jibin.tech', 'https://jibin.tech/blog'],
          },
        ],

```


label & projectSlug can be obtained by visiting `http://localhost:9001/v1/projects`
schedule: crontab (your can visit [Crontab.guru - The cron schedule expression editor](https://crontab.guru/) if need help setting up cron schedule)
numberOfRuns: no of times the audit is ran on a particular url. It is recommended to run 3-5 times since some variance will be present.
Urls: array of url for the audit
