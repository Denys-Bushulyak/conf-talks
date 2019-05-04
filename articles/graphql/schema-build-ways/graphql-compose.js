// @flow

import { ApolloServer } from 'apollo-server';
import { schemaComposer } from 'graphql-compose';
import { authors, articles } from './data';

const AuthorType = schemaComposer.createObjectTC(`
  "Author data"
  type Author {
    id: Int
    name: String
  }
`);

const ArticleType = schemaComposer.createObjectTC({
  name: 'Article',
  description: 'Article data with related Author data',
  fields: {
    title: 'String!',
    text: 'String',
    authorId: 'Int!',
    author: {
      type: () => AuthorType,
      resolve: source => {
        const { authorId } = source;
        return authors.find(o => o.id === authorId);
      },
    },
  },
});

schemaComposer.Query.addFields({
  articles: {
    args: {
      limit: { type: 'Int', defaultValue: 3 },
    },
    type: [ArticleType],
    resolve: (_, args) => {
      const { limit } = args;
      return articles.slice(0, limit);
    },
  },
  authors: {
    type: [AuthorType],
    resolve: () => authors,
  },
});

const schema = schemaComposer.buildSchema();

const server = new ApolloServer({ schema });
server.listen(5000).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
