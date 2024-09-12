module.exports = {
  images: {
    domains: ['courses-top.ru'],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            icon: true,
            svgoConfig: {
              plugins: [
                {
                  name: 'preset-default',
                  params: {
                    currentColor: true,
                  },
                },
              ],
            },
          },
        },
      ],
    });

    return config;
  },
};
