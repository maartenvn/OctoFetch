# About

## How does it work

OctoFetch is a thin layer on top of the browser native Fetch API, which is supported in all modern browsers and polyfilled by most tools such as Nuxt.js, Next.js, create-react-app, vue-cli, etc. It allows for much less boilerplate and more reusable code.

OctoFetch is made for browser, but can be used in Node.JS using the package [`isomorphic-fetch`](https://www.npmjs.com/package/isomorphic-fetch) for polyfilling the native Fetch API.

## Why does it exist

There are other fetch libraries, such as Axios, for fetching data from APIs. Howerver, OctoFetch offers a **much more readable and maintainable approach** that can **shave down on unnecessary boilerplate** and offers a much **more flexible API**.

Don't take my word for it, just look at the example below:

### OctoFetch approach

```javascript
import octofetch from "octofetch";

const api = octofetch()
    .baseUrl("https://api.dev/api/v1")
    .header("Token", "Bearer eze48zeka!78ez!@");

// First request.
api.get("/users")
    .query("q", "Elon Musk")
    .header("Content-Type", "application/json")
    .fetch()
    .then((users) => console.log(users))
    .catch((error) => console.log(error));

// Second request.
api.get("/projects/:id/info")
    .path("id", id)
    .header("Content-Type", "application/json+ld")
    .fetch()
    .then((project) => console.log(project.name))
    .catch((error) => console.log(error));
```

As you can see, OctoFetch's API allows to shave down on boilerplate by re-using specific code and compacting the space taken by the code.

### Axios approach

Now let's do the same thing in the popular fetch library Axios:

```javascript
// First request.
axios
    .get("https://api.dev/api/v1/users", {
        params: {
            q: "Elon Musk",
        },

        headers: {
            Token: "Bearer eze48zeka!78ez!@",
            "Content-Type": "application/json",
        },
    })
    .then((response) => {
        users = response.data;
    })
    .catch((error) => {
        console.log(error);
    });

// Second request.
axios
    .get("https://api.dev/api/v1/projects/" + id + "/info", {
        headers: {
            Token: "Bearer eze48zeka!78ez!@",
            "Content-Type": "application/json+ld",
        },
    })
    .then((response) => {
        info = response.data;
    })
    .catch((error) => {
        console.log(error);
    });
```

As you can see, we are using some duplicate code here. Axios does allow for code re-usability using interceptors, but that API also includes a lot of boilerplate by itself.
