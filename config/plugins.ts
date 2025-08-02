module.exports = ({ env }) => ({
 email: {
    config: {
      provider: 'amazon-ses',
      providerOptions: {
        key: env('AWS_SES_KEY'),
        secret: env('AWS_SES_SECRET'),
        amazon: 'https://email.ap-south-1.amazonaws.com',
      },
      settings: {
        defaultFrom: 'no-reply@localqr.earth',
        defaultReplyTo: 'support@localqr.earth',
      }
   }
 },
 // ...
 documentation: {
    enabled: true,
    config: {
      servers: [{ url: 'https://api.localqr.earth/api', description: 'Development server' }],
    }
  },
  // ...
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        baseUrl: env('CDN_URL'),
        rootPath: env('CDN_ROOT_PATH'),
        s3Options: {
          credentials: {
            accessKeyId: env('AWS_ACCESS_KEY_ID'),
            secretAccessKey: env('AWS_ACCESS_SECRET'),
          },
          region: env('AWS_REGION'),
          params: {
            ACL: env('AWS_ACL', 'public-read'),
            signedUrlExpires: env('AWS_SIGNED_URL_EXPIRES', 15 * 60),
            Bucket: env('AWS_BUCKET'),
          },
        },
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  // ...
});
