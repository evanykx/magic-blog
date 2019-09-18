const baseConfig = {
  jwt: {
    secret: 'E2662010D9C111E98DC579C4F7581224',
    expires: 60 * 60 *24 * 7,
    privateKey: 'ILOVEDANFOREVER#@!',
    algorithm: 'HS256'
  },
  mongo: {
    host: 'localhost',
    port: '27017',
    database: 'magic_blog',
    username: 'root',
    password: 'root'
  }
};

export default baseConfig;
