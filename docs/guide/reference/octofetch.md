# API Reference: OctoFetch

The following functions are supported on an `OctoFetch` instance.

## `baseUrl(baseUrl: string)`

Set the base URL of the request. This is an URL that will be appended before every request. This can be your domain name or a specific domain name + path.

-   `baseUrl`: the base URL

## `url(url: string)`

Set the URL of the request. This is the URL of the request. If a base URL is provided, it will be appended to that. Will check for double slashes and make sure those are stripped away.

-   `url`: the URL/path

## `get(url: string)`

Make the request a GET request. URL has same behaviour as `url`-function.

-   `url`: the URL/path to send a request to

## `post(url: string)`

Make the request a POST request. URL has same behaviour as `url`-function.

-   `url`: the URL/path to send a request to

## `patch(url: string)`

Make the request a PATCH request. URL has same behaviour as `url`-function.

-   `url`: the URL/path to send a request to

## `put(url: string)`

Make the request a PUT request. URL has same behaviour as `url`-function.

-   `url`: the URL/path to send a request to

## `delete(url: string)`

Make the request a DELETE request. URL has same behaviour as `url`-function.

-   `url`: the URL/path to send a request to

## `head(url: string)`

Make the request a HEAD request. URL has same behaviour as `url`-function.

-   `url`: the URL/path to send a request to

## `options(url: string)`

Make the request a OPTIONS request. URL has same behaviour as `url`-function.

-   `url`: the URL/path to send a request to

## `method(method: "GET" | "POST" | "PATCH" | "PUT" | "DELETE" | "HEAD" | "OPTIONS")`

Set the method of the request.

-   `method`: method of the request

## `header(name: string, value: string)`

Add a header to the request.

-   `name`: Name of the header
-   `value`: Value for the header with given name

## `headers(headers: HeadersInit)`

Add an object of headers to the request. Supports both objects (key: name of header, value: value of header with given name) and Record.

-   `headers`: Object with headers. Uses native-fetch `HeadersInit` type

## `query(name: string, value: string)`

Add a query parameter to the request.

-   `name`: Name of the query parameter
-   `value`: Value of the query parameter with given name

## `queries(queries: { [key: string]: unknown })`

Add an object of query parameters to the request.

-   `queries`: Object with queries (key: name of the query parameter, value: value of the query parameter with given name)

## `path(name: string, value: unknown)`

Replace path parameter placeholders in the url with a value.

A path placeholder can either be {name} or :name

-   `name`: Name of the path parameter placeholder
-   `value`: Value to replace the placeholder with

## `param(name: string, value: unknown)`

Replace a path parameter placeholder in the url with a value.

Alias for `path`

## `init(init: RequestInit)`

Set the default parameters for the internal `fetch`.

Only use this when the option is not provided by the API, or for more finegrained control over the request options.

::: warning
Values set here will be overwritten by the counterpart chain function. This acts as a default value.
:::

## `fetch(options?: OctoFetchOptions): Promise<T>`

Fetch the data with the constructed request options.

When calling the `fetch()` function at the end of the chain, a fetch request will execute and **return a promise** with the following properties:

-   **Will resolve**: when a 2XX, 1XX, 3XX status code occurs.
    -   **Result**: the data, as JavaScript Object, as transformed by the correct [transformer](/guide/transformers)
-   **Will reject**: when a 4XX-5XX or network error occurs.
    -   **Error**: instance of [OctoError](/guide/reference/octoerror)

::: tip
This is the **same behaviour** as [Axios](https://github.com/axios/axios), but will use the browser's native fetch API under the hood.
:::

### Options

You can provide some options to the `fetch` function to alter its behaviour.

#### `native: boolean`

You can provide the option `native: true` to alter the promise resolve/reject behaviour to act like the browser's native fetch behaviour:

-   **Will resolve**: when a response is received from the server (2XX, 4XX, 5XX, ...)
-   **Will reject**: when an network error occurs.

The received data from the promise will be the same with this option on.

```javascript
import octofetch from "octofetch";

octofetch()
    .baseUrl("https://api.dev/api/v2")
    .delete("/projects/:id/:version")
    .path("id", project.id)
    .path("version", project.version)

    // Call `fetch` to execute a request
    // `native: true` will use the same promise behaviour as browser native fetch.
    .fetch({ native: true })

    // Data is transformed into an object
    .then((data) => console.log(data))

    // Error is of type `Error`
    .catch((error) => console.error(error.message));
```

#### `response: boolean`

You can provide the option `response: true` to both return the data and the native fetch `Response`. The fetch result will return a list with:

-   0: data, as provided without this option
-   1: `Result` from native fetch

The return type will be `Promise<[T, Response]>`

You can use it as following:

```javascript
import octofetch from "octofetch";

octofetch()
    .baseUrl("https://api.dev/api/v2")
    .get("/projects/:id")
    .path("id", project.id)

    // Call `fetch` to execute a request
    .fetch({ response: true })

    // Data is transformed into an object
    .then(([project, response]) =>
        console.log(`Received project ${project} with status code ${response.status}`)
    )

    // Error is of type `Error`
    .catch((error) => console.error(error.message));
```

Or using **async/await syntax**:

```javascript
import octofetch from "octofetch";

const [project, response] = octofetch()
    .baseUrl("https://api.dev/api/v2")
    .get("/projects/:id")
    .path("id", project.id)

    // Call `fetch` to execute a request
    .fetch({ response: true });

console.log(`Received project ${project} with status code ${response.status}`);
```

::: tip
This destructuring notation works the same way as the `useState` hook in React.
:::
