module.exports = ({ env }) => ({
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: env('CLOUDINARY_NAME'),
          api_key: env('CLOUDINARY_KEY'),
          api_secret: env('CLOUDINARY_SECRET'),
          // Optional: put all images in a folder
          folder: 'strapi',
        },
        actionOptions: {
          upload: {
            // This ensures Strapi requests a Cloudinary thumbnail for preview
            use_filename: true,
            unique_filename: false,
          },
          delete: {},
        },
      },
    },
  });