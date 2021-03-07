import { OctoTransformer } from "../core/types/OctoTransformer";

export default {
    /**
     * Get if the converter should convert a given response.
     * @param response
     */
    async canTransform(response: Response): Promise<boolean> {
        const text = await response.text();

        try {
            JSON.parse(text);
            return true;
        } catch (e) {
            return false;
        }
    },

    /**
     * Convert a fetch response to a different type.
     * @param response
     */
    transform(response: Response): Promise<any> {
        return response.json();
    },
} as OctoTransformer;
