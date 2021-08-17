import { makeExecutableSchema } from 'apollo-server-express';
import merge from 'lodash.merge';
import base from './base';
import topic from './topic';

// console.log('topic----', topic);

export default makeExecutableSchema({
  typeDefs: [
    base.typeDefs,
    topic.typeDefs,

  ],
  resolvers: merge({},
    base.resolvers,
    topic.resolver
  )
});
