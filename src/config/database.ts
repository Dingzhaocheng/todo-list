export const databaseProviders:any = {
  type: 'mysql',
  host: '121.36.41.47',
  port: 3306,
  username: 'uncleding',
  password: 'mima01.23',
  database: 'mysql',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true,
  logging: false

}
