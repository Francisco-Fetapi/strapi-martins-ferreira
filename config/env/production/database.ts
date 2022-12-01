export default ({ env }) => ({
  connection: {
    // client: 'sqlite',
    // connection: {
    //   filename: path.join(__dirname, '..', '..', env('DATABASE_FILENAME', '.tmp/data.db')),
    // },
    // useNullAsDefault: true,
    client: "mysql",
    connection: {
      host: env("DATABASE_HOST", "localhost"),
      port: env("DATABASE_PORT", 3306),
      database: env("DATABASE_NAME", "default"),
      user: env("DATABASE_USERNAME", "root"),
      password: env("DATABASE_PASSWORD", ""),
    },
    useNullAsDefault: true,
  },
});
