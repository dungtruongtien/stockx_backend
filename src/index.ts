import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import schema from './graphql';
import TopicModel from './models/topic';
import config from './config';
import MongoConnection from './ext-lib/mongo';

async function init() {
  await MongoConnection();

  // Initialize the app
  const app = express();

  app.use(express.static('public'));

  const models = {
    TopicModel
  };

  const context = () => ({
    models
  });

  const server = new ApolloServer({ schema, context });

  server.applyMiddleware({ app, path: `/${config.graphlPath}` });

  // Start the server
  app.listen({ port: config.port }, async () => {
    console.log(`Go to http://localhost:${config.port}/${config.graphlPath} to run queries!`);
  });
}

init();
