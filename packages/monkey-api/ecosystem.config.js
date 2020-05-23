module.exports = {
  apps: [
    {
      name: 'api',
      script: 'src/server.js',

      // Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/
      instances: 1,
      autorestart: true,
      watch: ['src/*.js'],
      watch_delay: 1000,
      ignore_watch: ['node_modules', 'data'],
      max_memory_restart: '1G',
      env: {
        API_PORT: '5000',
        BASE_PATH: 'http://localhost',
        SECRET: 'shhhh',
        NODE_ENV: 'development',
      },
      env_ci: {
        API_PORT: '5000',
        IS_TEST: true,
        BASE_PATH: 'http://127.0.0.1',
        SECRET: 'shhhh',
        NODE_ENV: 'ci',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
}
