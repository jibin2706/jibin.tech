---
title: 'Dispatching redux actions from getInitialProps'
date: 2019-10-27
info: 'Executing redux actions, and the getting access to redux state in nextjs'
image: 'featured-image.png'
tags: ['web', 'javascript']
---

![Nextjs + Redux](featured-image.png)

Next.js provides a particular function called **getInitialProps**, which allows you to pass objects to the pages before rendering it. These objects are mostly from API requests. Since the getInitialProps method runs both on server and client, it offers a great way of making your website isomorphic. It means that you get the benefits of both SSR and SPA.

Configuring redux in next.js is a bit different than in single-page applications. So if you haven't connected your nextjs app with redux, I have written a post about [connecting redux to nextjs](https://blog.jibin.tech/nextjs+redux/).

### Dispatching redux action in getInitialProps

getInitialProps method provides an object parameter from where we can destructure **reduxStore** property.

**reduxStore** contains dispatch method from where we can dispatch redux actions

```js
function index() {
    return <div>Nextjs + Redux</div>
}

index.getInitialProps({reduxStore}) {
    reduxStore.dispatch(reduxAction())
    return {}
}
```

### Get Redux state in getInitialProps

reduxStore property also contains the **getState** method, which returns the redux state.

```js

index.getInitialProps({reduxStore}) {
    const state = reduxStore.getState()
    return {}
}
```

### Example Source code

Here's the [source code](https://github.com/jibin2706/nextjs-redux) if you want to try it out in your machine.

<div class="codeline not-prose">
    git clone https://github.com/jibin2706/nextjs-redux.git<br />
    cd nextjs-redux <br />
    npm install <br />
    npm run dev<br />
</div>
