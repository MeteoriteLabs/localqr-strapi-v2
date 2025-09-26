export default ({ env }) => ({
  host: env('PUBLIC_URL', 'api.localqr.earth'),
  // port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
