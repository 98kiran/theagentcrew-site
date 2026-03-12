module.exports = {
  apps: [{
    name: 'theagentcrew-staging',
    script: './dist/server/entry.mjs',
    env: {
      HOST: '0.0.0.0',
      PORT: 4323,
      NODE_ENV: 'production'
    }
  }]
}
