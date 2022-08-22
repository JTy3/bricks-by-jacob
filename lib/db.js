import mysql from 'mysql2'

export const db = mysql.createConnection({
    host: '127.0.0.1',
    database: 'db',
    user: 'root',
    password: 'password'
})

export async function sql_query(query_string, values = []) {
  try {
    db.query(query_string, values, function(results) {
      console.log(results);
      return results
    })
  } catch (e) {
    throw Error(e.message)
  }
}