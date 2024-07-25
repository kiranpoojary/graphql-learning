// Import Prisma client or any other database connection
const { prisma } = require("./database");

const Student = {
  id: (parent, args, context, info) => parent.id,
  email: (parent) => parent.email,
  fullName: (parent) => parent.fullName,
  dept: (parent) => parent.dept,
  enrolled: (parent) => parent.enrolled,
};

const Teacher = {
  id: (parent, args, context, info) => parent.id,
  fullName: (parent) => parent.fullName,
};

const Subject = {
  id: (parent, args, context, info) => parent.id,
  name: (parent) => parent.name,
};

const Query = {
  enrollment: (parent, args) => {
    return prisma.student.findMany({
      where: { enrolled: true },
    });
  },
  students: (parent, args) => {
    return prisma.student.findMany({});
  },
  student: (parent, args) => {
    return prisma.student.findFirst({
      where: { id: Number(args.id) },
    });
  },
  getAllSubjects: (parent, args) => {
    return prisma.subject.findMany({});
  },

  getSubject: (parent, args) => {
    return prisma.subject.findFirst({
      where: { id: Number(args.id) },
    });
  },

  getAllTeachers: (parent, args) => {
    return prisma.teacher.findMany({});
  },

  getTeacher: (parent, args) => {
    return prisma.teacher.findFirst({ where: { id: args.id } });
  },
};

const Mutation = {
  registerStudent: (parent, args) => {
    return prisma.student.create({
      data: {
        email: args.email,
        fullName: args.fullName,
        dept: args.dept,
      },
    });
  },

  enroll: (parent, args) => {
    return prisma.student.update({
      where: { id: Number(args.id) },
      data: {
        enrolled: true,
      },
    });
  },

  addTeacher: (parent, args) => {
    return prisma.teacher.create({
      data: {
        fullName: args.fullName,
        email: args.email,
      },
    });
  },

  addSubject: (parent, args) => {
    return prisma.subject.create({
      data: {
        name: args.name,
        code: args.code,
      },
    });
  },
};

const resolvers = { Student, Teacher, Subject, Query, Mutation };

module.exports = {
  resolvers,
};
