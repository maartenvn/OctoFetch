import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import ViteComponents from "vite-plugin-components";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [Vue(), ViteComponents()],
});
