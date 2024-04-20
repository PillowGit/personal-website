// Get redirect data from json file
interface Redirects {
    [key: string]: string;
}
import data from '$lib/resources/redirects.json';
const redirects: Redirects = data;

// Import redirect function from sveltekit
import { redirect } from '@sveltejs/kit';

export function load({ params }) {
    const url = redirects[params.redirect];
    if (!url) {
        throw redirect(302, '/');
    }
    return { url };
}