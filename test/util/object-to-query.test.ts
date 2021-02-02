import { objectToQuery } from "../../src/util";

describe("(util) object-to-query tests", () => {
    test("should work with only 1 variable", () => {
        const queries = {
            q: "value",
        };

        expect(objectToQuery(queries)).toEqual("?q=value");
    });

    test("should work with multiple values, in the provided order", () => {
        const queries = {
            q: "value",
            limit: 15,
        };

        expect(objectToQuery(queries)).toEqual("?q=value&limit=15");
    });

    test("should encode the query name", () => {
        const queries = {
            "Content Type": "json",
        };

        expect(objectToQuery(queries)).toEqual("?Content%20Type=json");
    });

    test("should encode the query value", () => {
        const queries = {
            q: "this is a test query",
        };

        expect(objectToQuery(queries)).toEqual(
            "?q=this%20is%20a%20test%20query"
        );
    });
});
