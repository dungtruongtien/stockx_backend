require('dotenv').config();

export default {
  // App Config
  port: process.env.PORT || 8081,
  graphlPath: process.env.GRAPHQL_PATH || 'stockxql',
  nodeEnv: process.env.NODE_ENV || 'development',
  // Mongo Config
  mongoUsername: process.env.MONGO_USERNAME || 'admin',
  mongoPassword: process.env.MONGO_PASSWORD || 'admin',
  mongoHost: process.env.MONGO_HOST || 'locahost',
  mongoPort: process.env.MONGO_PORT || 27017,
  mongoDatabase: process.env.MONGO_DATABASE || 'stockx'
};
