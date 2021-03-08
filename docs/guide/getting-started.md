# Getting started

## Installation

Before getting started you must install OctoFetch using NPM/Yarn or a CDN:

<a class="button" href="/guide/installation">Installation</a>

## Constructing

To fetch data from an API you have to build an instance of the `OctoFetch`-object. This can easily be done by using the factory function that is the default export:

```javascript
import octofetch from "octofetch";

octofetch();
```

Calling this function will create a new `OctoFetch` object, allowing you to construct and execute a fetch request.

## Building

After creating an instance, you can simply call any of the class-members to **construct the request**. You can find a full list of available functions [here](/guide/reference/octofetch).

You can use **multiple options** just by calling them on the result of the previous option.

```javascript
import octofetch from "octofetch";

octofetch()
    .baseUrl("https://api.dev/api/v2")
    .get("/users/:id")
    .path("id", userId)
    .query("q", searchQuery)
    .header("Token", "Bearer my-secret-authentication-token");
```

::: tip
You can find a full list of available functions [here](/guide/reference/octofetch).
:::

## Fetching

Once the request is configured, you can fetch the data.

### `fetch()`

When calling the `fetch()` function at the end of the chain, a fetch request will execute and **return a promise** with the following properties:

-   **Will resolve**: when a 2XX, 1XX, 3XX status code occurs.
    -   **Result**: the data, as Javascript Object, as transformed by the correct [transformer](/guide/transformers)
-   **Will reject**: when a 4XX-5XX or network error occurs.
    -   **Error**: instance of [OctoError](/guide/reference/octoerror)

::: tip
This is the **same behaviour** as [Axios](https://github.com/axios/axios), but will use the browser's native fetch API under the hood.
:::

```javascript
import octofetch from "octofetch";

octofetch()
    .baseUrl("https://api.dev/api/v2")
    .delete("/projects/:id/:version")
    .path("id", project.id)
    .path("version", project.version)

    // Call `fetch` to execute a request
    .fetch()

    // Data is transformed into an object
    .then((project) => project.name)

    // Error is of type `EchoError`
    .catch((error) => console.error(error.message));
```

### `fetch(options: OctoFetchOptions)`

You can provide some options to the `fetch` function to alter its behaviour.

#### `native: boolean`

You can provide the option `native: true` to alter the promise resolve/reject behaviour to act like the browser's native fetch behaviour:

-   **Will resolve**: when a response is received from the server (2XX, 4XX, 5XX, ...)
-   **Will reject**: when an network error has occurred.

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

#### `response: true`

You can provide the option `response: true` to both return the data and the native fetch `Response`. The fetch result will return a list with:

-   0: data, as provided without this option
-   1: `Result` from native fetch

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

## TypeScript support

OctoFetch has great support for TypeScript.

When using **TypeScript** the return type of the data can be provided as follows:

```typescript
import octofetch from "octofetch";

interface Location {
    x: number;
    y: number;
}

octofetch()
    .baseUrl("https://api.dev/api/v2")
    .get("/location/:id")
    .path("id", 10)

    // You can specify the type here using the `<type>` notation
    .fetch<Location>()

    // Data is transformed into an object.
    .then([location] =>
        console.log(`Location found: (${location.x},${location.y})`)
    )

    // Error is of type `EchoError`
    .catch(error => console.error(error.message));
```

Or you can utilize TypeScript's **type interference**:

```typescript
import octofetch from "octofetch";

interface Location {
    x: number;
    y: number;
}

const location: Location = await octofetch()
    .baseUrl("https://api.dev/api/v2")
    .get("/location/:id")
    .path("id", 10)
    .fetch();
```
