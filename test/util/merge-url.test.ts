import { mergeUrl } from "../../src/util";

describe("(util) merge-url tests", () => {
    test("ending slash should be appended between baseURL & URL", () => {
        const baseUrl = "https://test.com";
        const url = "hello.json";

        expect(mergeUrl(baseUrl, url)).toEqual("https://test.com/hello.json");
    });

    test("double slash should be removed", () => {
        const baseUrl = "https://test.com/";
        const url = "/hello.json";

        expect(mergeUrl(baseUrl, url)).toEqual("https://test.com/hello.json");
    });
});
