const { gql } = require("apollo-server");

const typeDefs = gql`
  type Student {
    id: ID!
    email: String!
    fullName: String!
    dept: String
    enrolled: Boolean
  }

  type Teacher {
    id: ID!
    fullName: String!
    email: String!
  }

  type Subject {
    id: ID!
    name: String!
    code: String!
  }

  type Query {
    enrollment: [Student!]
    students: [Student!]!
    student(id: ID!): Student
    getAllTeachers: [Teacher!]!
    getTeacher(id: ID!): Teacher
    getAllSubjects: [Subject!]!
    getSubject(id: ID!): Subject
  }

  type Mutation {
    registerStudent(email: String!, fullName: String!, dept: String): Student!
    enroll(id: ID!): Student
    addTeacher(fullName: String!, email: String!): Teacher
    addSubject(name: String!, code: String!): Subject
  }
`;
module.exports = {
  typeDefs,
};
