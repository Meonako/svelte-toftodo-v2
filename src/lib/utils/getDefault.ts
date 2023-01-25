import { browser } from "$app/environment";

export function getDefault<T>(key: string, def: T): T {
	if (browser) {
		const ObjectString = window.localStorage.getItem(key);
		if (!ObjectString) return def;

		return JSON.parse(ObjectString);
	}
	return def;
}