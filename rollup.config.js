import typescript from "rollup-plugin-typescript2";
import sourceMaps from "rollup-plugin-sourcemaps";
import { terser } from "rollup-plugin-terser";

const pkg = require("./package.json");

/**
 * Bundle with a specific configuration.
 * @param config Configuration
 */
const bundle = (config) => ({
    ...config,

    // Default configuration
    input: "src/index.ts",
    watch: {
        include: "src/**",
    },
});

export default [
    /**
     * Minified
     */
    bundle({
        plugins: [
            // Compile TypeScript files
            typescript(),

            // Resolve source maps to the original source
            sourceMaps(),

            // Minify the bundle
            terser(),
        ],
        output: [
            /**
             * UMD (ES6)
             */
            {
                file: pkg.browser,
                name: "OctoFetch",
                format: "umd",
                sourcemap: true,
            },

            /**
             * MIN (ES6 ; ESM)
             */
            {
                file: pkg.minified,
                format: "esm",
                sourcemap: true,
            },

            /**
             * ESM (ES6 ; ESM)
             */
            {
                file: pkg.module,
                format: "esm",
                sourcemap: true,
            },
        ],
    }),

    /**
     * Source Code
     */
    bundle({
        plugins: [
            // Compile TypeScript files
            typescript(),

            // Resolve source maps to the original source
            sourceMaps(),
        ],
        output: {
            file: pkg.main,
            format: "esm",
            sourcemap: true,
        },
    }),
];
