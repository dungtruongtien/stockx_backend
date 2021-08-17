import { RootFieldFilter } from 'graphql-tools';
import { IContext } from '../../common/interface';
import TopicService from '../../services/topic';

export default {
  Query: {
    topics: async (_: RootFieldFilter, agrs: null, { models: { TopicModel } }: IContext) => {
      const topicService = new TopicService(TopicModel);
      const topics = await topicService.getListTopics();
      return {
        status: 200,
        message: 'Success',
        data: topics
      };
    }
  }
};
