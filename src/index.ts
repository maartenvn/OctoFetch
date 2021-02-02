import { OctoFetch } from "./core/OctoFetch";

/**
 * Default
 */
export default function createInstance() {
    return new OctoFetch();
}

/**
 * Core
 */
export * from "./core/OctoFetch";
export * from "./core/OctoOptions";
export * from "./core/OctoError";
