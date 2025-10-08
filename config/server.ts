export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('PUBLIC_URL', 'http://13.126.235.177:1337'),
  proxy: {koa: true},
  app: 
    keys: env.array('APP_KEYS'),
  },
});
