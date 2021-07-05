module.exports = {
  apps: [
    {
      name: "nobull-dashboad",
      script: "npm start",
      cwd: ' /home/nobull-dashboard',
      env: {
        PORT: process.env.PORT || 3000,
      }
      // node_args: "-r dotenv/config",
      // instances  : 4,
      // exec_mode  : "cluster"
    },
  ],
};
