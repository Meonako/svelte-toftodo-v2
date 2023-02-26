import { browser } from "$app/environment";
import type { Base } from "./interface";

export function getDefault<T extends Base>(key: string, def: T): T {
    if (browser) {
        const ObjectString = window.localStorage.getItem(key);
        if (!ObjectString) return def;

        let Object = JSON.parse(ObjectString);
        if (!Object.Time) return def;

        if (typeof Object.Time == 'string') {
            Object.Time = new Date(Object.Time);
        }

        return Object
    }
    return def;
}