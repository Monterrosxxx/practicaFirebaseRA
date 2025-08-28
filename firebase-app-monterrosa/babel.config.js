/*
  env: 
  API_KEY=""
  AUTH_DOMAIN=""
  PROJECT_ID=""
  STORAGE_BUCKET=""
  MESSAGING_SENDER_ID=""
  APP_ID=""
*/

module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        Plugins: [
            [
                'module: react-native-dotenv',
                {
                    envName: 'APP_ENV',
                    moduleName: '@env',
                    path: '.env',
                },
            ],
        ],
    };
};   