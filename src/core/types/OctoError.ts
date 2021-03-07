export interface OctoError {
    /**
     * Status message.
     */
    message: string;

    /**
     * Status code, as provided by the server.
     * Will be `undefined` when a network error occured or no response from the server was received.
     */
    code?: number;

    /**
     * Response, as provided by the server.
     * Will be `undefined` when a network error occured or no response from the server was received.
     */
    response?: string;

    /**
     * Error object, as received from native `fetch`.
     * Will be `undefined` when no network error occured (4xx or 5xx)
     */
    exception?: Error;
}
