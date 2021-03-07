import { OctoTransformer } from "./OctoTransformer";

export interface OctoOptions {
    /**
     * Base URL of the request.
     */
    baseUrl?: string;

    /**
     * URL of the request.
     */
    url?: string;

    /**
     * Method of the request.
     */
    method?: "GET" | "POST" | "PATCH" | "PUT" | "DELETE" | "HEAD" | "OPTIONS";

    /**
     * Headers of the request.
     * @key Name of the header
     * @value Value for that header
     */
    headers?: { [key: string]: unknown };

    /**
     * Query parameters of the request.
     * @key Name of the query parameter
     * @value Value for that query parameter
     */
    queries?: { [key: string]: unknown };

    /**
     * Body of the request.
     */
    body?: { [key: string]: any } | any;

    /**
     * Default `fetch` RequestInit options.
     */
    init?: RequestInit;

    /**
     * Transformers to transform the data.
     */
    transformers?: OctoTransformer[];

    /**
     * Path parameter values.
     */
    paths?: { [key: string]: unknown };
}
