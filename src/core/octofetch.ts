import { OctoFetchOptions } from "./types/OctoFetchOptions";
import { OctoOptions } from "./types/OctoOptions";
import { mergeUrl, objectToQuery } from "../util";
import jsonTransformer from "../transformers/json-transformer";

export class OctoFetch {
    /**
     * Options.
     */
    private opts: OctoOptions = {};

    /**
     * (Optional) Constructor
     * @param options Request options
     */
    constructor(options?: OctoOptions) {
        this.opts = { ...(options ?? {}) };
    }

    /**
     * Set the base URL of the request.
     * @param baseUrl Base URL to send a request to
     */
    baseUrl(baseUrl: string): OctoFetch {
        this.opts.baseUrl = baseUrl;

        return new OctoFetch(this.opts);
    }

    /**
     * Set the URL of the request.
     * @param url URL to send a request to
     */
    url(url: string): OctoFetch {
        this.opts.url = url;

        return new OctoFetch(this.opts);
    }

    /**
     * Make the request a GET request.
     * @param url URL to send a request to
     */
    get(url: string): OctoFetch {
        this.opts.url = url;
        this.opts.method = "GET";

        return new OctoFetch(this.opts);
    }

    /**
     * Make the request a POST request.
     * @param url URL to send a request to
     */
    post(url: string): OctoFetch {
        this.opts.url = url;
        this.opts.method = "POST";

        return new OctoFetch(this.opts);
    }

    /**
     * Make the request a POST request.
     * @param url URL to send a request to
     */
    patch(url: string): OctoFetch {
        this.opts.url = url;
        this.opts.method = "PATCH";

        return new OctoFetch(this.opts);
    }

    /**
     * Make the request a PUT request.
     * @param url URL to send a request to
     */
    put(url: string): OctoFetch {
        this.opts.url = url;
        this.opts.method = "PUT";

        return new OctoFetch(this.opts);
    }

    /**
     * Make the request a DELETE request.
     * @param url URL to send a request to
     */
    delete(url: string): OctoFetch {
        this.opts.url = url;
        this.opts.method = "DELETE";

        return new OctoFetch(this.opts);
    }

    /**
     * Make the request a HEAD request.
     * @param url URL to send a request to
     */
    head(url: string): OctoFetch {
        this.opts.url = url;
        this.opts.method = "HEAD";

        return new OctoFetch(this.opts);
    }

    /**
     * Make the request a OPTIONS request.
     * @param url URL to send a request to
     */
    options(url: string): OctoFetch {
        this.opts.url = url;
        this.opts.method = "OPTIONS";

        return new OctoFetch(this.opts);
    }

    /**
     * Set the method of the request.
     * @param method Method of the request
     */
    method(method: "GET" | "POST" | "PATCH" | "PUT" | "DELETE" | "HEAD" | "OPTIONS"): OctoFetch {
        this.opts.method = method;

        return new OctoFetch(this.opts);
    }

    /**
     * Add a single header to the request.
     * @param name Name of the header
     * @param value Value of the header
     */
    header(name: string, value: string): OctoFetch {
        this.opts.headers = { ...this.opts.headers, ...{ [name]: value } };

        return new OctoFetch(this.opts);
    }

    /**
     * Add headers to the request.
     * @param headers Headers of the request.
     */
    headers(headers: HeadersInit): OctoFetch {
        this.opts.headers = { ...this.opts.headers, ...headers };

        return new OctoFetch(this.opts);
    }

    /**
     * Add a single query parameter to the request.
     * @param name Name of the query parameter
     * @param value Value of the query parameter
     */
    query(name: string, value: string): OctoFetch {
        this.opts.queries = {
            ...this.opts.queries,
            ...{ [name]: value },
        };

        return new OctoFetch(this.opts);
    }

    /**
     * Set the query parameters of the request.
     * @param queries Query parameters of the request
     */
    queries(queries: { [key: string]: unknown }): OctoFetch {
        this.opts.queries = { ...this.opts.queries, ...queries };

        return new OctoFetch(this.opts);
    }

    /**
     * Replace a path parameter placeholder in the url with a value.
     * A path placeholder can either be {name} or :name
     * @param name Name of the path parameter placeholder
     * @param value Value to replace the placeholder with
     */
    path(name: string, value: unknown): OctoFetch {
        this.opts.paths = {
            ...this.opts.paths,
            ...{ [name]: value },
        };

        return new OctoFetch(this.opts);
    }

    /**
     * Replace a path parameter placeholder in the url with a value.
     * A path placeholder can either be {name} or :name
     * (alias for "path")
     * @param name Name of the path parameter placeholder
     * @param value Value to replace the placeholder with
     */
    param(name: string, value: unknown): OctoFetch {
        return this.path(name, value);
    }

    /**
     * Set the body of the request.
     * @param body Body of the request. When an object is provided, it will be stringified to JSON.
     */
    body(body: any): OctoFetch {
        this.opts.body = body;

        return new OctoFetch(this.opts);
    }

    /**
     * Set the default parameters for the internal `fetch`.
     * Only use this when the option is not provided by the API, or
     * for more finegrained control over the request options.
     *
     * WARNING: values set here will be overwritten by the counterpart chain function.
     *          This acts as a default value.
     *  @param init Initialization value for the `fetch` init parameter.
     */
    init(init: RequestInit): OctoFetch {
        this.opts.init = init;

        return new OctoFetch(this.opts);
    }

    /**
     * Fetch the data with the constructed request options.
     * @param options Fetch behaviour options.
     */
    fetch<T>(options?: { response?: false | undefined } & OctoFetchOptions): Promise<T>;
    fetch<T>(options?: { response?: true } & OctoFetchOptions): Promise<[T, Response]>;
    fetch<T>(options: OctoFetchOptions = {}): Promise<T | [T, Response]> {
        // Shorten options for ease of access
        const opts = this.opts;

        // Construct the URL
        let url = opts.baseUrl ? mergeUrl(opts.baseUrl, opts.url || "") : opts.url || "";

        // Replace the path substitutions.
        if (opts.paths) {
            for (const path of Object.keys(opts.paths)) {
                const value = opts.paths[path];

                url = url.replace(new RegExp(`:${path}`, "g"), String(value));
                url = url.replace(new RegExp(`{${path}}`, "g"), String(value));
            }
        }

        // Add query string to url
        if (opts.queries) {
            url += objectToQuery(opts.queries);
        }

        // Construct body
        let body = opts.body;

        // If an object is passed, stringify it to JSON.
        if (opts.body && typeof opts.body === "object" && typeof opts.body !== "function") {
            body = JSON.stringify(opts.body);
        }

        // Construct full init
        const init: RequestInit = {
            // Default init
            ...opts.init,

            body: body,
            method: opts.method,
            headers: opts.headers as HeadersInit,
        };

        // Construct the fetch request
        return new Promise((resolve, reject) => {
            fetch(url, init)
                .then(async (res) => {
                    const transformers = opts.transformers || [jsonTransformer];

                    // Find first transformer that matches the data
                    let transformer;
                    for (const t of transformers) {
                        if (await t.canTransform(res.clone())) {
                            transformer = t;
                            break;
                        }
                    }

                    // If a transformer was found, transform the data.
                    // Otherwise, return text.
                    const data = await (transformer ? transformer.transform(res) : res.text());

                    // Value to resolve
                    let value: T | [T, Response];
                    if (options.response === true) {
                        value = [data, res];
                    } else {
                        value = data;
                    }

                    // Native promise behaviour
                    if (options.native === true) {
                        resolve(value);
                    }

                    // Otherwise: custom (Axios like) behaviour.
                    else {
                        // If the request has status code 2XX, resolve the promise, with the extracted data.
                        if (res.ok) {
                            resolve(value);
                        }

                        // Otherwise (4xx or 5xx), reject the promise.
                        else {
                            reject({
                                message: res.statusText,
                                code: res.status,
                                response: data,
                            });
                        }
                    }
                })
                .catch((e) => {
                    reject({
                        message: String(e),
                        exception: e,
                    });
                });
        });
    }
}
