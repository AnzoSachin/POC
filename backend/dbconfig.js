const config = {
  user: "sa",
  password: "Sac@123",
  server: "192.168.131.207:1433",
  database: "POC",
  options: {
    trustedconnection: true,
    enableArithAbort: true,
    trustServerCertificate: true,
  },
  port: 1433,
};

module.exports = config;
