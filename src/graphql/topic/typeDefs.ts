import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    topics(
      """
      Attributes filter
      """
      where: TopicWhereInput
      """
      Sort data by attributes
      """
      orderBy: TopicOrderByInput
      """
      Amount of data per page, default 20 items
      """
      limit: Int
      """
      Current Page, start from 0.
      """
      skip: Int
    ): PagingListTopicPayload
  }

  input TopicOrderByInput {
    """
    Sort by Topic Name
    """
    name: SortType
  }

  type Topic {
    """
    Id Topic
    """
    _id: ID!
    """
    Topic name
    """
    name: String
    """
    Topic references
    """
    path: String
    """
    Create by User ID
    """
    createdBy: String
    """
    Create Date
    """
    createdAt: DateTime
    """
    Update by User ID
    """
    updatedBy: String
    """
    Update Date
    """
    updatedAt: DateTime
  }

  input TopicWhereInput {
    """
    Filter attributes by id
    """
    _id: QueryStringInput
    """
    Filter attributes by id
    """
    name: QueryStringInput
    """
    Multiple User filter input
    """
    and: [TopicWhereInput]
    not: [TopicWhereInput]
    nor: [TopicWhereInput]
    or: [TopicWhereInput]
  }

  type PagingListTopicPayload {
    """
    Status request
    """
    status: Int
    """
    Message log request
    """
    message: String
    """
    List data result
    """
    data: [Topic]
    """
    Page Information
    """
    pageInfo: PageInfo
  }
`;
