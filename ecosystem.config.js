module.exports = {
  apps: [
    {
      name: 'trocen-api',
      script: './build/server.js',
      instances: 'max',
      exec_mode: 'cluster',
      autorestart: true,
    },
  ],
}
