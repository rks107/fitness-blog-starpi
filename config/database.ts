export default ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'fitness-blog-strapi.cfwvp7luqztz.ap-south-1.rds.amazonaws.com'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'strapi_mysql'),
      user: env('DATABASE_USERNAME', 'admin'),
      password: env('DATABASE_PASSWORD', 'rohitadmin'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
