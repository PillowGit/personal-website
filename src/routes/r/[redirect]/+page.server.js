import { redirect } from '@sveltejs/kit';
import redirects from './../redirects.json';

export function load({ params }) {
	const given = params.redirect;
	const target = redirects[given];
	if (target === undefined) {
		redirect(302, 'pillo.dev/r');
	} else {
		redirect(302, target);
	}
}

