export default [
  'strapi::logger',
  'strapi::errors',
        {
        name: 'strapi::security',
        config: {
          contentSecurityPolicy: {
            useDefaults: true,
            directives: {
              'connect-src': ["'self'", 'https:'],
              'img-src': [
                "'self'",
                'data:',
                'blob:',
                'dl.airtable.com',
                'localqr-qa.s3.ap-south-1.amazonaws.com',
              ],
              'media-src': [
                "'self'",
                'data:',
                'blob:',
                'dl.airtable.com',
                'localqr-qa.s3.ap-south-1.amazonaws.com',
              ],
              upgradeInsecureRequests: null,
            },
          },
        },
      },
  {
    name: 'strapi::cors',
    config: {
      origin: ['localhost:5173', 'qa.localqr.earth', 'localqr.earth'],
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
      keepHeaderOnError: true,
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
