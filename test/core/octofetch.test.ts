import "isomorphic-fetch";
import * as nock from "nock";
import octofetch from "../../src/";

/**
 * Mocked types
 */
interface TestModel {
    name: string;
}

/**
 * Mocked variables
 */
const MOCK_SERVER_URL = "http://test.dev";
const MOCK_RESULT_TEST: TestModel = {
    name: "Test",
};
const MOCK_RESULT_STRING = "Hello There";

describe("(core) octofetch tests", () => {
    test("'baseUrl' should use the provided base url", async () => {
        nock(MOCK_SERVER_URL).get("/").reply(200, MOCK_RESULT_TEST);

        const response = await octofetch().baseUrl(MOCK_SERVER_URL).method("GET").fetch();

        expect(response).toEqual(MOCK_RESULT_TEST);
    });

    test("'baseUrl' should work with 'url'", async () => {
        const path = `/path/url/test`;

        nock(MOCK_SERVER_URL).get(path).reply(200, MOCK_RESULT_TEST);

        const response = await octofetch().baseUrl(MOCK_SERVER_URL).url(path).method("GET").fetch();

        expect(response).toEqual(MOCK_RESULT_TEST);
    });

    test("'url' should use the provided url", async () => {
        const path = `/path/url/test`;

        nock(MOCK_SERVER_URL).get(path).reply(200, MOCK_RESULT_TEST);

        const response = await octofetch().url(`${MOCK_SERVER_URL}${path}`).method("GET").fetch();

        expect(response).toEqual(MOCK_RESULT_TEST);
    });

    test("'get' should use the correct GET method & provided url", async () => {
        const path = `/path`;

        nock(MOCK_SERVER_URL).get(path).reply(200, MOCK_RESULT_TEST);

        const response = await octofetch().get(`${MOCK_SERVER_URL}${path}`).fetch();

        expect(response).toEqual(MOCK_RESULT_TEST);
    });

    test("'post' should use the correct POST method & provided url", async () => {
        const path = `/path`;

        nock(MOCK_SERVER_URL).post(path).reply(200, MOCK_RESULT_TEST);

        const response = await octofetch().post(`${MOCK_SERVER_URL}${path}`).fetch();

        expect(response).toEqual(MOCK_RESULT_TEST);
    });

    test("'patch' should use the correct PATCH method & provided url", async () => {
        const path = `/path`;

        nock(MOCK_SERVER_URL).patch(path).reply(200, MOCK_RESULT_TEST);

        const response = await octofetch().patch(`${MOCK_SERVER_URL}${path}`).fetch();

        expect(response).toEqual(MOCK_RESULT_TEST);
    });

    test("'put' should use the correct PUT method & provided url", async () => {
        const path = `/path`;

        nock(MOCK_SERVER_URL).put(path).reply(200, MOCK_RESULT_TEST);

        const response = await octofetch().put(`${MOCK_SERVER_URL}${path}`).fetch();

        expect(response).toEqual(MOCK_RESULT_TEST);
    });

    test("'delete' should use the correct DELETE method & provided url", async () => {
        const path = `/path`;

        nock(MOCK_SERVER_URL).delete(path).reply(200, MOCK_RESULT_TEST);

        const response = await octofetch().delete(`${MOCK_SERVER_URL}${path}`).fetch();

        expect(response).toEqual(MOCK_RESULT_TEST);
    });

    test("'head' should use the correct HEAD method & provided url", async () => {
        const path = `/path`;

        nock(MOCK_SERVER_URL).head(path).reply(200, MOCK_RESULT_TEST);

        const response = await octofetch().head(`${MOCK_SERVER_URL}${path}`).fetch();

        expect(response).toEqual(MOCK_RESULT_TEST);
    });

    test("'options' should use the correct OPTIONS method & provided url", async () => {
        const path = `/path`;

        nock(MOCK_SERVER_URL).options(path).reply(200, MOCK_RESULT_TEST);

        const response = await octofetch().options(`${MOCK_SERVER_URL}${path}`).fetch();

        expect(response).toEqual(MOCK_RESULT_TEST);
    });

    test("'method' should use the correct method", async () => {
        const method = "OPTIONS";
        const path = `/path`;

        nock(MOCK_SERVER_URL).options(path).reply(200, MOCK_RESULT_TEST);

        const response = await octofetch().url(`${MOCK_SERVER_URL}${path}`).method(method).fetch();

        expect(response).toEqual(MOCK_RESULT_TEST);
    });

    test("'header' should add the correct header", async () => {
        const path = `/path`;
        const headerName = "Content-Type";
        const headerValue = "object/json";

        nock(MOCK_SERVER_URL)
            .get(path)
            .matchHeader(headerName, headerValue)
            .reply(200, MOCK_RESULT_TEST);

        const response = await octofetch()
            .get(`${MOCK_SERVER_URL}${path}`)
            .header(headerName, headerValue)
            .fetch();

        expect(response).toEqual(MOCK_RESULT_TEST);
    });

    test("'headers' should add the correct headers", async () => {
        const path = `/path`;
        const headerName1 = "Cookie";
        const headerValue1 = "Hello";

        const headerName2 = "Reply-Data";
        const headerValue2 = "This is a test";

        nock(MOCK_SERVER_URL)
            .get(path)
            .matchHeader(headerName1, headerValue1)
            .matchHeader(headerName2, headerValue2)
            .reply(200, MOCK_RESULT_TEST);

        const response = await octofetch()
            .get(`${MOCK_SERVER_URL}${path}`)
            .headers({
                [headerName1]: headerValue1,
                [headerName2]: headerValue2,
            })
            .fetch();

        expect(response).toEqual(MOCK_RESULT_TEST);
    });

    test("'query' should add the correct query", async () => {
        const path = `/path`;
        const queryName = "q";
        const queryValue = "hello world";

        const queryPath = path + `?${queryName}=${encodeURIComponent(queryValue)}`;

        nock(MOCK_SERVER_URL).get(queryPath).reply(200, MOCK_RESULT_TEST);

        const response = await octofetch()
            .get(`${MOCK_SERVER_URL}${path}`)
            .query(queryName, queryValue)
            .fetch();

        expect(response).toEqual(MOCK_RESULT_TEST);
    });

    test("'queries' should add the correct queries", async () => {
        const path = `/path`;
        const queryName1 = "q";
        const queryValue1 = "banana";
        const queryName2 = "limit";
        const queryValue2 = 14;

        const queryPath =
            path +
            `?${queryName1}=${encodeURIComponent(queryValue1)}` +
            `&${queryName2}=${encodeURIComponent(queryValue2)}`;

        nock(MOCK_SERVER_URL).get(queryPath).reply(200, MOCK_RESULT_TEST);

        const response = await octofetch()
            .get(`${MOCK_SERVER_URL}${path}`)
            .queries({
                [queryName1]: queryValue1,
                [queryName2]: queryValue2,
            })
            .fetch();

        expect(response).toEqual(MOCK_RESULT_TEST);
    });

    test("'path' should replace the correct path variable (colon)", async () => {
        const path = `/path/:id`;
        const replacedPath = `/path/14`;

        nock(MOCK_SERVER_URL).get(replacedPath).reply(200, MOCK_RESULT_TEST);

        const response = await octofetch().get(`${MOCK_SERVER_URL}${path}`).path("id", 14).fetch();

        expect(response).toEqual(MOCK_RESULT_TEST);
    });

    test("'path' should replace the correct path variable (curly-braces)", async () => {
        const path = `/path/{name}`;
        const replacedPath = `/path/hello`;

        nock(MOCK_SERVER_URL).get(replacedPath).reply(200, MOCK_RESULT_TEST);

        const response = await octofetch()
            .get(`${MOCK_SERVER_URL}${path}`)
            .path("name", "hello")
            .fetch();

        expect(response).toEqual(MOCK_RESULT_TEST);
    });

    test("'path' should not throw exception when no url.", async () => {
        const path = `/path/{name}`;
        const replacedPath = `/path/hello`;

        nock(MOCK_SERVER_URL).get(replacedPath).reply(200, MOCK_RESULT_TEST);

        const response = await octofetch()
            .get(`${MOCK_SERVER_URL}${path}`)
            .path("name", "hello")
            .fetch();

        expect(response).toEqual(MOCK_RESULT_TEST);
    });

    test("'param' should call 'path' with the correct parameters", async () => {
        const path = `/path/:id`;
        const replacedPath = `/path/14`;

        nock(MOCK_SERVER_URL).get(replacedPath).reply(200, MOCK_RESULT_TEST);

        const response = await octofetch().get(`${MOCK_SERVER_URL}${path}`).param("id", 14).fetch();

        expect(response).toEqual(MOCK_RESULT_TEST);
    });

    test("'init' should add the default init values", async () => {
        const path = `/path/:id`;

        nock(MOCK_SERVER_URL).get(path).reply(200, MOCK_RESULT_TEST);

        const response = await octofetch()
            .url(`${MOCK_SERVER_URL}${path}`)
            .init({
                method: "GET",
            })
            .fetch();

        expect(response).toEqual(MOCK_RESULT_TEST);
    });

    test("'init' values have lower precedence than chain-functions", async () => {
        const path = `/path/:id`;

        nock(MOCK_SERVER_URL).post(path).reply(200, MOCK_RESULT_TEST);

        const response = await octofetch()
            .init({
                method: "GET",
            })
            .post(`${MOCK_SERVER_URL}${path}`)
            .fetch();

        expect(response).toEqual(MOCK_RESULT_TEST);
    });

    test("'body' should add the correct body (type: object)", async () => {
        const path = `/path`;

        nock(MOCK_SERVER_URL)
            .post(path, JSON.stringify(MOCK_RESULT_TEST))
            .reply(200, MOCK_RESULT_TEST);

        const response = await octofetch()
            .post(`${MOCK_SERVER_URL}${path}`)
            .body(MOCK_RESULT_TEST)
            .fetch();

        expect(response).toEqual(MOCK_RESULT_TEST);
    });

    test("'body' should add the correct body (type: string)", async () => {
        const path = `/path`;

        nock(MOCK_SERVER_URL).post(path, MOCK_RESULT_STRING).reply(200, MOCK_RESULT_TEST);

        const response = await octofetch()
            .post(`${MOCK_SERVER_URL}${path}`)
            .body(MOCK_RESULT_STRING)
            .fetch();

        expect(response).toEqual(MOCK_RESULT_TEST);
    });

    test("'fetch' should reject the promise when a 4XX status code was provided", async (done) => {
        const path = `/path/on/server`;

        nock(MOCK_SERVER_URL).get(path).reply(404, MOCK_RESULT_TEST);

        try {
            await octofetch().get(`${MOCK_SERVER_URL}${path}`).fetch();

            new Error("Promise should not resolve!");
        } catch (e) {
            done();
        }
    });

    test("'fetch' should reject the promise when a 5XX status code was provided", async (done) => {
        const path = `/path/on/server`;

        nock(MOCK_SERVER_URL).get(path).reply(500, MOCK_RESULT_TEST);

        try {
            await octofetch().get(`${MOCK_SERVER_URL}${path}`).fetch();

            new Error("Promise should not resolve!");
        } catch (e) {
            done();
        }
    });

    test("'fetch' should reject with the correct status code (4xx-5xx)", async () => {
        const path = `/path/on/server`;

        nock(MOCK_SERVER_URL).get(path).reply(400, MOCK_RESULT_TEST);

        try {
            await octofetch().get(`${MOCK_SERVER_URL}${path}`).fetch();

            new Error("Promise should not resolve!");
        } catch (e) {
            expect(e.code).toEqual(400);
        }
    });

    test("'fetch' should reject with the correct status message (4xx-5xx)", async () => {
        const path = `/path/on/server`;

        nock(MOCK_SERVER_URL).get(path).reply(400, MOCK_RESULT_TEST);

        try {
            await octofetch().get(`${MOCK_SERVER_URL}${path}`).fetch();

            new Error("Promise should not resolve!");
        } catch (e) {
            expect(e.message).toEqual("Bad Request");
        }
    });

    test("'fetch' should reject with the correct response (object) (4xx-5xx)", async () => {
        const path = `/path/on/server`;
        const error = {
            field: "username",
            message: "Please enter a username",
        };

        nock(MOCK_SERVER_URL).get(path).reply(401, error);

        try {
            await octofetch().get(`${MOCK_SERVER_URL}${path}`).fetch();

            new Error("Promise should not resolve!");
        } catch (e) {
            expect(e.response).toEqual(error);
        }
    });

    test("'fetch' should reject with the correct message (catch)", async () => {
        try {
            await octofetch().get("http://nourl").fetch();

            new Error("Promise should not resolve!");
        } catch (e) {
            expect(e.message).toEqual(
                "FetchError: request to http://nourl/ failed, reason: getaddrinfo ENOTFOUND nourl"
            );
        }
    });

    test("'fetch' should reject with the correct exception (catch)", async () => {
        try {
            await octofetch().get("http://nourl").fetch();

            new Error("Promise should not resolve!");
        } catch (e) {
            expect(String(e.exception)).toEqual(
                "FetchError: request to http://nourl/ failed, reason: getaddrinfo ENOTFOUND nourl"
            );
        }
    });

    test("'fetch' should resolve with the correct response (string)", async () => {
        const path = `/path/on/server`;

        nock(MOCK_SERVER_URL).get(path).reply(200, MOCK_RESULT_STRING);

        const response = await octofetch().get(`${MOCK_SERVER_URL}${path}`).fetch();

        expect(response).toEqual(MOCK_RESULT_STRING);
    });

    test("'fetch' should work with only a provided baseUrl (no url)", async () => {
        nock(MOCK_SERVER_URL).get("/").reply(200, MOCK_RESULT_TEST);

        const response = await octofetch().method("GET").baseUrl(MOCK_SERVER_URL).fetch();

        expect(response).toEqual(MOCK_RESULT_TEST);
    });

    test("'fetch' should work with only a provided url (no baseUrl)", async () => {
        nock(MOCK_SERVER_URL).get("/").reply(200, MOCK_RESULT_TEST);

        const response = await octofetch().method("GET").url(MOCK_SERVER_URL).fetch();

        expect(response).toEqual(MOCK_RESULT_TEST);
    });

    test("'fetch' should not crash when no url & baseUrl", async () => {
        nock(MOCK_SERVER_URL).get(/.*/).reply(200, MOCK_RESULT_TEST);

        try {
            await octofetch().method("GET").fetch();
        } catch (e) {
            expect(e.message).toEqual("TypeError: Only absolute URLs are supported");
        }
    });

    test("'fetch' should use the correct return type based on the given `response` option (response: true)", async () => {
        const path = `/path`;

        nock(MOCK_SERVER_URL).get(path).reply(200, MOCK_RESULT_TEST);

        const response = await octofetch()
            .baseUrl(MOCK_SERVER_URL)
            .get(path)
            .fetch({ response: true });
        const fetchResponse = await fetch(`${MOCK_SERVER_URL}${path}`);

        expect(response[0]).toEqual(MOCK_RESULT_TEST);
        expect(response[1].status).toEqual(fetchResponse.status);
    });

    test("'fetch' should use the correct return type based on the given `response` option (response: false)", async () => {
        const path = `/path/:id`;

        nock(MOCK_SERVER_URL).get(path).reply(200, MOCK_RESULT_TEST);

        const response = await octofetch()
            .get(`${MOCK_SERVER_URL}${path}`)
            .fetch({ response: false });

        expect(response).toEqual(MOCK_RESULT_TEST);
    });

    test("'fetch' should resolve native based on the `native` option (native: true)", async () => {
        const path = `/path/:id`;

        nock(MOCK_SERVER_URL).get(path).reply(200, MOCK_RESULT_TEST);

        const response = await octofetch().get(`${MOCK_SERVER_URL}${path}`).fetch({ native: true });

        expect(response).toEqual(MOCK_RESULT_TEST);
    });
});
