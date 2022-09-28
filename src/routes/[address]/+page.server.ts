import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

import { APESPACE_API_KEY, APESPACE_API_URL } from "$env/static/private";

const now = Date.now();
const sevenDaysAgo = now - 7 * 24 * 60 * 60 * 1000;

const fetchOptopns = {
    headers: {
        'Authorization': `Bearer ${APESPACE_API_KEY}`
    }
};

interface Volumes {
    time: string;
    volume: number;
}

export const load: PageServerLoad = async ({ params }) => {
    const contractAddress = params.address;

    const data = await fetch(`${APESPACE_API_URL}/pairs/${contractAddress}/volume/daily?from=${sevenDaysAgo}&to=${now}`, fetchOptopns);

    if (!data.ok) {
        throw error(data.status, await data.text());
    }

    const volumes: Volumes[] = await data.json();

    const refinedVolumes = volumes.map((volume) => {
        const date = new Date(volume.time);
        const time = date.toLocaleTimeString();
        const volumeNumber = volume.volume;

        return {
            date,
            time,
            volume: volumeNumber
        };
    });

    return {
        contractAddress,
        refinedVolumes
    };
};
