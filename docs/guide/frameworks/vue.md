# Framework Example: Vue

OctoFetch works great with Vue. All versions (v2, v3) are supported.

## Example

This example works in both Vue 2 & 3:

```vue
<template>
    <!-- Loading -->
    <template v-if="loading">
        <p>
            Loading...
        </p>
    </template>

    <!-- Error -->
    <template v-else-if="error">
        <h2>Something went wrong!</h1>

        <p>Error Code: {{ error.code }}</p>
    </template>

    <!-- Data -->
    <template v-else>
        Your name is: {{ user.name }}
    </template>
</template>

<script>
import octofetch from "octofetch";

export default {
    data() {
        return {
            loading: true,
            error: null,
            user: null
        }
    },

    mounted() {
        octofetch().get("https://myapi/me")
            .then(data => (this.user = data))
            .catch(error => (this.error = error))
            .finally(() => (this.loading = false))
    }
}
</script>
```

## Example (using Composition API)

This example uses the Vue 3 Composition API:

```vue
<template>
    <!-- Loading -->
    <template v-if="loading">
        <p>
            Loading...
        </p>
    </template>

    <!-- Error -->
    <template v-else-if="error">
        <h2>Something went wrong!</h1>

        <p>Error Code: {{ error.code }}</p>
    </template>

    <!-- Data -->
    <template v-else>
        Your name is: {{ user.name }}
    </template>
</template>

<script>
import { ref, onMounted } from "vue";
import octofetch from "octofetch";

export default {
    setup() {
        const loading = ref(true);
        const error = ref(null);
        const user = ref(null);

        onMounted(() => {
            octofetch().get("https://myapi/me")
                .then(data => (this.user = data))
                .catch(error => (this.error = error))
                .finally(() => (this.loading = false))
        });

        return {
            loading,
            error,
            user
        }
    }
}
</script>
```

## Example (using `vue-fetch-composition`)

[vue-fetch-composition](https://www.npmjs.com/package/vue-fetch-composition) is a composition function for easy data fetching in Vue using the composition API. It prevents unnecesarry boilerplate code and offers a much more intuative workflow.

It works great together with OctoFetch:

```vue
<template>
    <div>
        <!-- Loading -->
        <template v-if="$fetch.isLoading()">
            <p>Loading...</p>
        </template>

        <!-- Success -->
        <template v-else-if="$fetch.isSuccess()">
            Your name is: {{ user.name }}
        </template>

        <!-- Error -->
        <template v-else-if="$fetch.isError()">
            <h2>Something went wrong!</h1>

            <p>Error Code: {{ $fetch.error.code }}</p>
        </template>
    </div>
</template>

<script>
import { ref } from "vue";
import { onFetch } from "vue-fetch-composition";
import octofetch from "octofetch";

export default {
    setup() {
        const user = ref(null);

        const $fetch = onFetch(async () => {
            user.value = await octofetch().get("https://myapi/me")
        });

        return {
            user,
            $fetch,
        };
    },
};
</script>
```
