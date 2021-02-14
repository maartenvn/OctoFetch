# API Reference: OctoFetch

The following functions are supported on an `OctoFetch` instance.

## `baseUrl(baseUrl: string): OctoFetch<T>`

Set the base URL of the request. This is an URL that will be appended before every request. This can be your domain name or a specific domain name + path.

-   `baseUrl`: the base URL

## `url(url: string): OctoFetch<T>`

Set the URL of the request. This is the URL of the request. If a base URL is provided, it will be appended to that. Will check for double slashes and make sure those are stripped away.

-   `url`: the URL/path

## `get(url: string): OctoFetch<T>`

Make the request a GET request. URL has same behaviour as `url`-function.

-   `url`: the URL/path to send a request to

## `post(url: string): OctoFetch<T>`

Make the request a POST request. URL has same behaviour as `url`-function.

-   `url`: the URL/path to send a request to

## `patch(url: string): OctoFetch<T>`

Make the request a PATCH request. URL has same behaviour as `url`-function.

-   `url`: the URL/path to send a request to

## `put(url: string): OctoFetch<T>`

Make the request a PUT request. URL has same behaviour as `url`-function.

-   `url`: the URL/path to send a request to

## `delete(url: string): OctoFetch<T>`

Make the request a DELETE request. URL has same behaviour as `url`-function.

-   `url`: the URL/path to send a request to

## `head(url: string): OctoFetch<T>`

Make the request a HEAD request. URL has same behaviour as `url`-function.

-   `url`: the URL/path to send a request to

## `options(url: string): OctoFetch<T>`

Make the request a OPTIONS request. URL has same behaviour as `url`-function.

-   `url`: the URL/path to send a request to

## `method(method: "GET" | "POST" | "PATCH" | "PUT" | "DELETE" | "HEAD" | "OPTIONS"): OctoFetch<T>`

Set the method of the request.

-   `method`: method of the request

## `header(name: string, value: string): OctoFetch<T>`

Add a header to the request.

-   `name`: Name of the header
-   `value`: Value for the header with given name

## `headers(headers: HeadersInit): OctoFetch<T>`

Add an object of headers to the request. Supports both objects (key: name of header, value: value of header with given name) and Record.

-   `headers`: Object with headers. Uses native-fetch `HeadersInit` type

## `query(name: string, value: string): OctoFetch<T>`

Add a query parameter to the request.

-   `name`: Name of the query parameter
-   `value`: Value of the query parameter with given name

## `queries(queries: { [key: string]: unknown }): OctoFetch<T>`

Add an object of query parameters to the request.

-   `queries`: Object with queries (key: name of the query parameter, value: value of the query parameter with given name)

## `path(name: string, value: unknown): OctoFetch<T>`

Replace path parameter placeholders in the url with a value.

A path placeholder can either be {name} or :name

-   `name`: Name of the path parameter placeholder
-   `value`: Value to replace the placeholder with

## `param(name: string, value: unknown): OctoFetch<T>`

Replace a path parameter placeholder in the url with a value.

Alias for `path`

## `init(init: RequestInit): OctoFetch<T>`

Set the default parameters for the internal `fetch`.

Only use this when the option is not provided by the API, or for more finegrained control over the request options.

::: warning
Values set here will be overwritten by the counterpart chain function. This acts as a default value.
:::

## `fetch(): Promise<T>`

Fetch the data with the constructed request options.

Will return a promise that:

-   will resolve with the serialized object (passed through the matched transformer)
-   will resolve when a 2XX status code is provided
-   will reject when a 4XX-5XX or network error will occur

This is the same behaviour as Axios.

## `fetchNative(): Promise<Response>`

Fetch the data with the constructed request options.

Will return a promise with the native result from native-fetch:

-   will resolve when a response is received from the server (2XX, 4XX, 5XX, ...)
-   will reject when an network error occurs
