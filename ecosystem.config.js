module.exports = {
  apps : [{
    name: 'BYDMES',
    script: 'D:\\PCS\\publish\\BYDMES.exe',
    args: '--urls=http://*:5000',
    instances: 1,
    autorestart: true,
    cwd: 'D:\\PCS\\publish\\',
    watch: false,
    max_memory_restart: '1G',
    env: {
    },
  },{
    name: 'red',
    script: 'C:\\Users\\user\\AppData\\Roaming\\npm\\node_modules\\node-red\\red.js',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
  },{
  script: "serve",
  env: {
    PM2_SERVE_PATH: 'D:\\PCS\\dist',
    PM2_SERVE_PORT: 80,
    PM2_SERVE_SPA: 'true',
    PM2_SERVE_HOMEPAGE: '/index.html'
  }
}]
};
