import {db} from './common/Db'
export const hello = async event => {
  const  users = await db.query(`
  select id, uuid, name from users `)
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: 'Go Serverless v1.0! Your function executed successfully!',
          input: event,
          users
        },
        null,
        2
      ),
    };
};

// exports.server = lambda.graphqlHandler;
// exports.playground = lambda.playgroundHandler;
