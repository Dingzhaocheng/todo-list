export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT, 10) || 3306,
    pwd: process.env.DATABASE_PWD,
    user: process.env.DATABASE_USER,
    schema: process.env.DATABASE_SCHEMA,
  },
});
