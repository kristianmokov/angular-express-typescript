interface IEnvironmentConfig {
  rootPath: string;
  httpPort: number;
  domain: string;
  httpProtocol: string;
}

interface IConfig {
  [key: string]: IEnvironmentConfig;
  development: IEnvironmentConfig;
  production: IEnvironmentConfig;
}

const rootPath = process.cwd();

const Config: IConfig = {
  development: {
    rootPath,
    httpPort: 1337,
    domain: 'localhost',
    httpProtocol: 'http',
  },
  production: {
    rootPath,
    httpPort: +process.env.HTTP_SERVER_PORT,
    domain: process.env.DOMAIN,
    httpProtocol: process.env.HTTP_PROTOCOL,
  }
};

export {
  IEnvironmentConfig,
  IConfig,
  Config
};
