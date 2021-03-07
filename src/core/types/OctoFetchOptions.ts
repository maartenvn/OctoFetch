export interface OctoFetchOptions {
    /**
     * Whether or not to include the "Response" from native-fetch.
     * This will change the return type from <T> to <[T, Response]>.
     *
     * Default: false
     */
    response?: boolean;

    /**
     * Whether or not to use the default native-fetch behaviour for resolving & rejecting the promise.
     *
     * True:
     *  will resolve when a response is received
     *  will reject when network error
     *
     * False:
     *  will resolve when status code 2XX
     *  will reject when status code 4XX-5XX or network error
     *
     * Default: false
     */
    native?: boolean;
}
