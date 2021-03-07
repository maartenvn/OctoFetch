/**
 * Merge a base url with a url.
 * @param baseUrl Base URL
 * @param url URL
 */
export function mergeUrl(baseUrl: string, url: string) {
    // Make sure baseURL had a ending slash.
    if (!baseUrl.endsWith("/")) {
        baseUrl += "/";
    }

    // Make sure URL does not start with a slash (prevent double slash)
    if (url.startsWith("/")) {
        url = url.substr(1);
    }

    return baseUrl + url;
}
