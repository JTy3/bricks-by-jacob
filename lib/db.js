import mysql from "mysql2";

export const db = mysql.createConnection({
  host: "127.0.0.1",
  database: "db",
  user: "root",
  password: "password",
});

export async function sql_query(query_string, values = []) {
  try {
    return db.promise().query(query_string);
  } catch (e) {
    throw Error(e.message);
  }
}
