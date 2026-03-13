module.exports = {
  apps: [{
    name: 'theagentcrew-site',
    script: 'dist/server/entry.mjs',
    interpreter: 'node',
    cwd: '/home/kiran/.openclaw/workspace/theagentcrew-prod',
    env: {
      CLAWMART_API_KEY: 'cm_live_9TQt7OgidiY3HzknamSqN0m_vN76pYcP',
      HOST: '0.0.0.0',
      PORT: 4321
    }
  }]
}
