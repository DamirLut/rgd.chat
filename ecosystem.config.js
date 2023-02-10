module.exports = {
  apps: [
    {
      name: 'rgd.chat',
      script: 'node_modules/next/dist/bin/next',
      args: 'start',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
    },
  ],

  deploy: {
    production: {
      user: 'root',
      host: '194.61.0.195',
      ref: 'origin/main',
      repo: 'git@github.com:DamirLut/rgd.chat.git',
      path: '/root/rgd.chat/',
      'post-deploy': 'pnpm i && pnpm build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
    },
  },
};
