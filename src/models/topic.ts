import mongoose from 'mongoose';
import { ITopicModel } from '../common/interface';
import config from '../config';

export default mongoose.model<ITopicModel>('Topics', new mongoose.Schema(
  {
    name: String,
    path: Number,
    createdAt: Date,
    updatedAt: Date,
    createdBy: String,
    updatedBy: String
  },
  {
    collection: 'topics',
    versionKey: false,
    strict: false,
    autoCreate: config.nodeEnv === 'development'
  }
));
