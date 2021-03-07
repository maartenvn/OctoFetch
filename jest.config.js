module.exports = {
    transform: {
        "^.+\\.tsx?$": "ts-jest",
    },
    testEnvironment: "node",
    globals: {
        "ts-jest": {
            diagnostics: {
                // Disable ESModuleInterop warning
                ignoreCodes: [151001],
            },
        },
    },
};
