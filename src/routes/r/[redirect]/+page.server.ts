import redirects from '$lib/resources/redirects.json';
import { redirect } from '@sveltejs/kit';

export function load({ params }) {
    const url = redirects[params.redirect];
    if (!url) {
        throw redirect(302, '/');
    }
    return { url };
}