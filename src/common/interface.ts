import mongoose from 'mongoose';

export interface ITopicModel extends mongoose.Document {
    name: number
    path: string
    createdAt: Date,
    updatedAt: Date,
    createdBy: string,
    updatedBy: string
}

export interface IContext {
    models: IContextModel
}

export interface IContextModel {
    TopicModel: mongoose.Model<ITopicModel>
}
