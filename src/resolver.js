// Import Prisma client or any other database connection
const { prisma } = require("./database");

const Query = {
  getAllAuthors: (parent, args) => {
    return prisma.author.findMany({});
  },

  getAuthor: (parent, args) => {
    return prisma.author.findFirst({
      where: { id: args.id },
    });
  },

  getAllPosts: (parent, args) => {
    return prisma.post.findMany({});
  },

  getPost: (parent, args) => {
    return prisma.post.findFirst({
      where: { id: args.id },
    });
  },
};

const Mutation = {
  addAuthor: async (parent, args) => {
    return prisma.author.create({
      data: args,
    });
  },

  addPost: async (parent, args) => {
    return prisma.post.create({
      data: args,
    });
  },
};

const resolvers = { Query, Mutation };

module.exports = {
  resolvers,
};
