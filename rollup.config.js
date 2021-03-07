import typescript from "rollup-plugin-typescript2";
import sourceMaps from "rollup-plugin-sourcemaps";
import filesize from "rollup-plugin-filesize";
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
            // Report file size
            filesize(),

            // Compile TypeScript files
            typescript({ useTsconfigDeclarationDir: true }),

            // Resolve source maps to the original source
            sourceMaps(),

            // Minify the bundle
            terser({ format: { comments: false } }),
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
            // Report file size
            filesize(),

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
