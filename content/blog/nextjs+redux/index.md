---
title: 'Next.js + Redux'
date: 2019-08-11
info: 'Integrating redux to your server side rendered application in nextjs'
image: 'featured-image.png'
tags: ['web', 'javascript']
---

![Next.js + Redux](featured-image.png)

Integrating redux and nextjs requires some extra steps because you have to create a redux instance on every page, which is not the case in single-page applications. So, we need to create a wrapper that initializes redux store on all the pages.

There is a package called [next-redux-wrapper](https://github.com/kirill-konshin/next-redux-wrapper), but for some reason, it wasn't working for me. So, I created a wrapper instead of relying on other packages.

In case, if you don't know about nextjs and redux,

**Nextjs** is a react framework used to make your websites server-rendered which increases the performance of your site and also has SEO benefits.

**Redux** is a popular state management library in the react world. If you have a large web application, it makes sense to separate and the application state and view.

First, let's install the required packages, you can use npm or yarn for installation

```bash
 npm init -y
 npm install react react-dom next redux react-redux react-thunk
```

_Optional package_

```bash
npm install redux-devtools-extension
```

### Configuring Redux in Nextjs

Next.js initializes page using the App component, and we will be overriding it to initialize redux store in \_app.js.
with-redux-store.js is a higher-order component that will be used in \_app.js page.

_This wrapper file is from next.js Github repository_

```js
//    /lib/with-redux-store.js
import React from 'react'
import { initializeStore } from '../store'

const isServer = typeof window === 'undefined'
const __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__'

function getOrCreateStore(initialState) {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return initializeStore(initialState)
  }

  // Create store if unavailable on the client and set it on the window object
  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = initializeStore(initialState)
  }
  return window[__NEXT_REDUX_STORE__]
}

export default App => {
  return class AppWithRedux extends React.Component {
    static async getInitialProps(appContext) {
      // Get or Create the store with `undefined` as initialState
      // This allows you to set a custom default initialState
      const reduxStore = getOrCreateStore()

      // Provide the store to getInitialProps of pages
      appContext.ctx.reduxStore = reduxStore

      let appProps = {}
      if (typeof App.getInitialProps === 'function') {
        appProps = await App.getInitialProps(appContext)
      }

      return {
        ...appProps,
        initialReduxState: reduxStore.getState(),
      }
    }

    constructor(props) {
      super(props)
      this.reduxStore = getOrCreateStore(props.initialReduxState)
    }

    render() {
      return <App {...this.props} reduxStore={this.reduxStore} />
    }
  }
}
```

It allows keeping the state when navigating between pages as it wraps MyApp component, which will be available on all the pages with withReduxStore higher-order function.

```js
//   \_app.js
import App, { Container } from 'next/app'
import React from 'react'
import withReduxStore from '../lib/with-redux-store'
import { Provider } from 'react-redux'

class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props
    return (
      <Container>
        <Provider store={reduxStore}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    )
  }
}

export default withReduxStore(MyApp)
```

Unlike in a single-page application, we will return the initialize store function instead of the store itself.

```js
//  /src/store.js
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "../src/reducers";

export function initializeStore(initialState = {}) {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  );

```

Now all the components can have access to the redux store using connect function from react-redux.

### Dispatching actions in getInitialProps

You can dispatch redux actions in getInitialProps via reduxStore object. You can destructure the reduxStore object from the getInitialProps parameters.

```js
//   /pages/index.js
import React from 'react'

function index() {
  return <h1>Dispatching actions from getInitialProps</h1>
}

index.getInitialProps = ({ reduxStore }) => {
  reduxStore.dispatch({ type: 'INCREMENT' })
  return {}
}
```

### Source code

Here's the source code if you want to try it out in your machine.

<div class="code-line">
 git clone https://github.com/jibin2706/nextjs-redux.git<br />
 cd next-redux-example <br />
 npm install <br />
 npm run dev<br />
</div>
