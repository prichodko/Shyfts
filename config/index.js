module.exports = {
  db: {
    URI: process.env.DB_HOST
  },
  auth: {
    secret: process.env.TOKEN_SECRET
  }
}
