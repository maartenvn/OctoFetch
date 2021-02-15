# Installation

## CDN

You can use OctoFetch from a popular CDN. This is ideal for trying out OctoFetch or including it inside a project that does not have a bundler:

```html
<script src="https://cdn.jsdelivr.net/npm/octofetch/dist/octofetch.min.js"></script>
```

If you are using native ES Modules, there is an ESM compatible build:

```html
<script type="module">
    import octofetch from "https://cdn.jsdelivr.net/npm/octofetch/dist/octofetch.module.js";
</script>
```

### Legacy browsers

There is a special bundle available for legacy browsers (such as IE11). This bundle includes a polyfill for all includes ES6 features (such as `fetch`). This bundle is **much larger than the modern bundle**, so think carefully before using this bundle.

```html
<script src="https://cdn.jsdelivr.net/npm/octofetch/dist/octofetch.legacy.js"></script>
```

::: warning
It is recommended to use a tool such as Babel to automatically include polyfills and use the modern bundle instead of this legacy bundle. If other dependencies are used for your project, they may also include the same dependencies, which can cause extra unnecessary loading time.

This bundle is meant for projects that require legacy browser support with no bundler setup.
:::

## NPM

You can easily pull octofetch from NPM:

```bash
npm install octofetch --save
```

## Yarn

You can also use Yarn instead of NPM:

```bash
yarn add octofetch
```
