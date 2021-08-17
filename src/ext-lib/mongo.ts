import mongoose from 'mongoose';
import config from '../config';

const { nodeEnv, mongoUsername, mongoDatabase, mongoPassword, mongoPort, mongoHost } = config;

export default function connect() {
  if (config.mongoUsername && config.mongoPassword) {
    mongoose.connect(`mongodb://${mongoUsername}:${mongoPassword}@${mongoHost}:${mongoPort}/${mongoDatabase}?authSource=admin?`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      autoCreate: nodeEnv === 'development'
    });
  } else {
    mongoose.connect(`mongodb://${mongoHost}:${mongoPort}/${mongoDatabase}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      autoCreate: nodeEnv === 'development'
    });
  }
}

