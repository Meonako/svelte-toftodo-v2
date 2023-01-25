import { writable } from "svelte/store";
import { browser } from "$app/environment";
import { getDefault } from "../utils/getDefault";
import type { Base } from '../utils/interface';

const KEY = 'daily'

export interface Daily extends Base {
    Bounty: number,
    Training: number,
    MirroriaFZ: number,
    SupportPoint: number,
    AIResouce: boolean,
    GiftBlackMarket: boolean,
    GiftCetusIsland: boolean,
}

const dailyDefault: Daily = {
    Bounty: 0,
    Training: 0,
    MirroriaFZ: 0,
    SupportPoint: 0,
    AIResouce: false,
    GiftBlackMarket: false,
    GiftCetusIsland: false,
    Time: new Date(),
}

export const dailyMax = {
    Bounty: 4,
    Training: 2,
    MirroriaFZ: 8,
    SupportPoint: 1500,
}

export const daily = writable(
    getDefault(KEY, dailyDefault)
);

if (browser) {
    daily.subscribe((value) => window.localStorage.setItem(KEY, JSON.stringify(value)));
}