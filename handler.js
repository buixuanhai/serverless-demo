const { GraphQLServerLambda } = require("graphql-yoga");
var fs = require("fs")

const typeDefs = fs.readFileSync("./schema.gql").toString('utf-8');

const resolvers = {
    Query: {
        mysql_getUser: require("./resolver/Query/mysql_getUser").func,
    },
    Mutation: {
        mysql_createUser: require("./resolver/Mutation/mysql_createUser").func,
    }
};

// const lambda = new GraphQLServerLambda({
//     typeDefs,
//     resolvers
// });

const hello = async event => {
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: 'Go Serverless v1.0! Your function executed successfully!',
          input: event,
        },
        null,
        2
      ),
    };
};

// exports.server = lambda.graphqlHandler;
// exports.playground = lambda.playgroundHandler;
exports.hello = hello;
