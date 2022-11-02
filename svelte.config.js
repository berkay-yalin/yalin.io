import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
    scss: {
      prependData: `@import './src/styles.scss';`
    }
  }),

	kit: {
		adapter: adapter(),
    paths: {
      base: process.env.NODE_ENV === "production" ? "/berkay-yalin.io" : "",
    },
	}
};

export default config;
