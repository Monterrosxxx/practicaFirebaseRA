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
        plugins: [  // ✅ Cambiado de "Plugins" a "plugins" (minúscula)
            [
                'module:react-native-dotenv',  // ✅ Corregido: removido el espacio
                {
                    envName: 'APP_ENV',
                    moduleName: '@env',
                    path: '.env',
                    blocklist: null,
                    allowlist: null,
                    safe: false,
                    allowUndefined: true,
                    verbose: false,
                },
            ],
        ],
    };
};   