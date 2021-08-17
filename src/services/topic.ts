import mongoose from 'mongoose';
import { ITopicModel } from '../common/interface';

export default class TopicService {
  private TopicModel: mongoose.Model<ITopicModel>

  constructor(TopicModel: any) {
    this.TopicModel = TopicModel;
  }

  getListTopics = () => {
    return this.TopicModel.find({});
  }
}
