/**
 * Convert a query object into a query search string.
 * @param object Object to convert
 */
export function objectToQuery(object: { [key: string]: unknown }) {
    const str = [];

    for (const q in object) {
        str.push(
            encodeURIComponent(q) + "=" + encodeURIComponent(String(object[q]))
        );
    }

    return `?${str.join("&")}`;
}
