// Get redirect data from json file
interface Redirects {
    [key: string]: string;
}
import data from '$lib/resources/redirects.json';
const redirects: Redirects = data;

// Import redirect function from sveltekit
import { redirect } from '@sveltejs/kit';

// On page load function
export function load({ params }) {
    // Search for url shortlink in json file
    const url = redirects[params.redirect];
    // If found, redirect to that url
    if (url !== undefined) {
        throw redirect(302, url);
    } 
    // Else go back to redirect page
    else {
        throw redirect(302, '/r');
    }
}