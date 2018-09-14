// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgresql://localhost/class-directory-sept-14'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};