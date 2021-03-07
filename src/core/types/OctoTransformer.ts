export interface OctoTransformer {
    /**
     * Get if the transformer can transform a given response.
     * @param response Response, as received from fetch.
     */
    canTransform(response: Response): Promise<boolean>;

    /**
     * Transform a fetch response to a different type.
     * @param response Response, as received from fetch.
     */
    transform(response: Response): Promise<any>;
}
