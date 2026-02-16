module.exports = ({ env }) => ({
    upload: {
        config: {
            provider: 'cloudinary',
            providerOptions: {
                cloud_name: env('CLOUDINARY_NAME'),
                api_key: env('CLOUDINARY_KEY'),
                api_secret: env('CLOUDINARY_SECRET'),
                folder: 'strapi',
            },
            actionOptions: {
                upload: {
                    use_filename: true,
                    unique_filename: false,
                },
                delete: {},
            },
            defaultTransformations: [
                { width: 200, height: 200, crop: 'limit' },
            ],
        },
    },
});
