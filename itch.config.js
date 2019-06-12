const BASE_URL = process.env.NODE_ENV === 'local' ? 'http://localhost' : 'https://ucodemy.com';
const BASE_URL_EXTENSION = process.env.NODE_ENV === 'local' ?
    '/itch' : (process.env.NODE_ENV === 'production' ? '/itch/public/public' : '/itch/dev/public');

export default {
    BASE_URL,
    BASE_URL_EXTENSION,
    PROJECT_SERVER: `${BASE_URL}${BASE_URL_EXTENSION}/api/v1/`,
    ASSET_SERVER: 'https://d3dch2j0kvht3t.cloudfront.net/public/',
    BACKPACK_HOST: `${BASE_URL}${BASE_URL_EXTENSION}/api/v1/backpack`
};
