import { OctoFetch } from "./core/octofetch";

/**
 * Default
 */
export default function createInstance() {
    return new OctoFetch();
}

/**
 * Core
 */
export * from "./core/octofetch";
export * from "./core/types/OctoOptions";
export * from "./core/types/OctoError";
