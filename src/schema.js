const { gql } = require("apollo-server");

const typeDefs = gql`
  type Author {
    id: ID!
    name: String!
    nickName: String
    email: String!
    posts: [Post!]!
    createdAt: String!
    updatedAt: String!
  }

  type Post {
    id: ID!
    slNum: Int!
    edition: Int
    title: String!
    author: Author!
    createdAt: String!
    updatedAt: String!
  }

  type TestResponse {
    message: String
  }

  type Query {
    getAllAuthors: [Author!]!
    getAuthor(id: ID!): Author
    getAllPosts: [Post!]!
    getPost(id: ID!): Post
    howToCall: TestResponse
  }

  type Mutation {
    addAuthor(name: String!, nickName: String, email: String!): Author
    addPost(title: String!, edition: Int, authorId: ID!): Post
  }
`;

module.exports = {
  typeDefs,
};
