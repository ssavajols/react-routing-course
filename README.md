# react-routing-course

React training course with routing

- React courses : [https://github.com/ssavajols/react-course](https://github.com/ssavajols/react-course)
- Démonstration : [https://ssavajols.github.io/react-routing-course/](https://ssavajols.github.io/react-routing-course/)

## Install

```shell
npm install
```

## Run

```shell
# default: http://localhost:8080
npm start
```

### Stateless functional components declaration

Exported stateless functional components can lose their name.

Arrow functions are transpiled by typescript and lose `Component.name`.

Named functions keep their `Component.name` and can be displayed correctly with chrome react devtools.

In react devtools we can see thoses examples :

```jsx
// Arrow function
export const MyStatelessComponent1 = (props) => <div>Component</div>;

// Named function
export function MyStatelessComponent2(props) { return <div>Component</div>};
```

Results in :

```html
<App>
    <Unknown>...</Unknown>
    <MyStatelessComponent2>...</MyStatelessComponent2>
</App>
```

### Different routers to different use cases

React routers provide several routers. `BrowserRouter`, `HashRouter`, `MemoryRouter`, `StaticRouter`, `NativeRouter`.

```jsx
// Browser router
function MyAppBrowserRouter() {
  return (
    <BrowserRouter>
      ...
    </BrowserRouter>
  );
}

// Hash router
function MyAppHashRouter() {
  return (
    <HashRouter>
      ...
    </HashRouter>
  );
}

// Memory router
function MyAppMemoryRouter() {
  return (
    <MemoryRouter>
      ...
    </MemoryRouter>
  );
}

// Static router
function MyAppStaticRouter() {
  return (
    <StaticRouter>
      ...
    </StaticRouter>
  );
}

// React-native router
function MyAppNativeRouter() {
  return (
    <NativeRouter>
      ...
    </NativeRouter>
  );
}
```

#### BrowserRouter

Provide a router component for web browser. It uses HTML5 API to update address bar location and can handle popState events.

#### HashRouter

Provide the same as `BrowserRouter` but use hash location instead of HTML5 API.

#### MemoryRouter

Provide a router that does not interact with address bar. It's useful for unit-testing.

#### StaticRouter

Provide a router that never update the route. It needs to get the url as a `prop`. Useful for server side rendering

```jsx
const html = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <App/>
    </StaticRouter>
  );
```

#### NativeRouter

Provide a router that can handle Android and iOS native navigation.
