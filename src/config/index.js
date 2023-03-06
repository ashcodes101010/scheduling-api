module.exports = {
  appName: 'Tier2a',
  port: process.env.PORT,
  tokenSecret: process.env.TOKEN_SECRET,
  db: {
    max_connections: 15,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  },
}
