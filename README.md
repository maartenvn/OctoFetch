<p align="center">
  <a href="https://octofetch.maartenvn.be" target="_blank">
    <img alt="OctoFetch Logo" width="200" src="./docs/assets/img/logo.svg">
  </a>
</p>

<h2 align="center">OctoFetch</h2>

<p align="center">
Javascript/Typescript library for fetching data from APIs with zero dependencies.
</p>

## [Documentation](https://octofetch.maartenvn.be/)

You can find the full documentation here: [Documentation](https://octofetch.maartenvn.be/)

## How does it work

OctoFetch is a thin layer on top of the browser native Fetch API, which is supported in all modern browsers and polyfilled by most tools such as Nuxt.js, Next.js, create-react-app, vue-cli, etc. It allows for much less boilerplate and more reusable code.

OctoFetch is made for browser, but can be used in Node.JS using the package [`isomorphic-fetch`](https://www.npmjs.com/package/isomorphic-fetch) for polyfilling the native Fetch API.

## Install the package

### Using NPM:

```
npm install octofetch --save
```

### Using YARN

```
yarn add octofetch
```

## Simple usage

### Javascript

```javascript
import octofetch from "octofetch";

octofetch()
    .get("https://localhost:5000/api/users/:id")
    .path("id", userId)
    .header("Token", "Bearer my-token-here")
    .then((data) => console.log(data))
    .catch((error) => console.log(error.code));
```

### Typescript

```typescript
import octofetch from "octofetch";

const users: Users[] = await octofetch().get(
    "https://localhost:5000/api/users"
);
```
