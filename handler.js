import { db } from './common/Db'
import { success, failure } from './common/response-lib'

export const hello = async (event, context, callback) => {
  const users = await db.query(`
  select id, uuid, name from users `)

  return success({
    message: 'Go Serverless v1.0! Your function executed successfully!',
    input: event,
    users
  })

};

// exports.server = lambda.graphqlHandler;
// exports.playground = lambda.playgroundHandler;
