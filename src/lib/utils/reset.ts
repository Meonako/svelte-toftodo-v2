import type { Base } from "$lib/store/interface";

export function reset<Type extends Base>(data: Type): Type {
	for (const [key, value] of Object.entries(data)) {
		if (key == 'Time') continue;

		if (typeof value == 'number') {
			// @ts-ignore
			data[key as keyof Monthly] = 0;
		} else if (typeof value == 'boolean') {
			// @ts-ignore
			data[key as keyof Monthly] = false;
		} else if (typeof value == 'object') {
			for (const key2 of Object.keys(value)) {
				// @ts-ignore
				data[key as keyof Monthly][key2 as keyof Object] = false;
			}
		} else {
			console.log('Not found type: ', value, typeof value);
		}
	}
    return data;
}
