module.exports = {
  apps: [
    {
      name: 'personal-cv',
      script: 'npm',
      args: 'start',
      cwd: '/root/personalCV',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      }
    }
  ]
};

