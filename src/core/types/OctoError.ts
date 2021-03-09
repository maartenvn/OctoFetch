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
    response?: Response;

    /**
     * Data, received from the server, as transformed by the matching transformer.
     * Will be `undefined` when a network error occured or no response from the server was received.
     */
    data?: any;

    /**
     * Error object, as received from native `fetch`.
     * Will be `undefined` when no network error occured (4xx or 5xx)
     */
    exception?: Error;
}
