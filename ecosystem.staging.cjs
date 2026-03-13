module.exports = {
  apps: [{
    name: 'theagentcrew-staging',
    script: 'dist/server/entry.mjs',
    cwd: '/home/kiran/.openclaw/workspace/theagentcrew-staging-site',
    env: {
      HOST: '0.0.0.0',
      PORT: 4323,
      NODE_ENV: 'production'
    }
  }]
}
