# Getting started

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

OctoFetch offers **2 fetch functions** that offer some different functionality

### `fetch()`

When calling the `fetch()` function at the end of the chain, a fetch request will execute and **return a promise** with the following properties:

-   **Will resolve**: when a 2XX, 1XX, 3XX status code has occured.
    -   **Result**: the data, as Javascript Object, as transformed by the correct [transformer](/guide/transformers)
-   **Will reject**: when a 4XX-5XX or network error has occurred.
    -   **Error**: instance of [OctoError](/guide/reference/octoerror)

::: tip
This is the **same behaviour** as [Axios](https://github.com/axios/axios), but will use native-fetch under the hood.
:::

```javascript
import octofetch from "octofetch";

octofetch()
    .baseUrl("https://api.dev/api/v2")
    .delete("/projects/:id/:version")
    .path("id", project.id)
    .path("version", project.version)

    .fetch()

    // Data is transformed into an object.
    .then(data => data.name)

    // Error is of type `EchoError`
    .catch(error => console.error(error.message));
```

### `fetchNative()`

When calling the `fetchNative()` function at the end of the chain, a fetch request will execute and **return a promise** with the following properties:

-   **Result**: native-fetch [Result](https://developer.mozilla.org/en-US/docs/Web/API/Response/Response) without any transformations
-   **Will resolve**: when a response is received from the server (2XX, 4XX, 5XX, ...)
-   **Will reject**: when an network error has occurred.

::: tip
This is the **same behaviour** as [Native Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch).
:::

```javascript
import octofetch from "octofetch";

octofetch()
    .baseUrl("https://api.dev/api/v2")
    .delete("/projects/:id/:version")
    .path("id", project.id)
    .path("version", project.version)

    .nativeFetch()

    // Response, as received from Native Fetch
    .then(response => response.json())
    .then(data => console.log(data))

    // Error is of type `Error`
    .catch(error => console.error(error.message));
```

## TypeScript support

OctoFetch has great support for TypeScript.

When using **TypeScript** the return type of the data can be provided as follows:

```typescript
import octofetch from "octofetch";

interface Location {
    x: number;
    y: number;
}

octofetch<Location>()
    .baseUrl("https://api.dev/api/v2")
    .get("/location/:id")
    .path("id", 10)

    .fetch()

    // Data is transformed into an object.
    .then(location =>
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
