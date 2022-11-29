export const getSnowflakeData = async (options) => {
  const snowflake = require('snowflake-sdk')
  const { promisify } = require('util')
  const connection = await snowflake.createConnection({
    account: process.env.SNOWFLAKE_ACCOUNT,
    username: process.env.SNOWFLAKE_USERNAME,
    password: process.env.SNOWFLAKE_PASSWORD,
    database: process.env.SNOWFLAKE_DATABASE,
    warehouse: process.env.SNOWFLAKE_WAREHOUSE,
    schema: process.env.SNOWFLAKE_SCHEMA
  })

  const connectAsync = promisify(connection.connect)
  await connectAsync()

  async function connExecuteAsync(options) {
    return new Promise((resolve, reject) => {
      connection.execute({
        ...options,
        complete: function (err, stmt, rows) {
          if (err) {
            reject(err)
          } else {
            resolve({ stmt, rows })
          }
        }
      })
    })
  }

  return connExecuteAsync(options)
}
