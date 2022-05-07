import { sql_query } from "../lib/db";

export async function getAllThemeIds() {
  try {
    const result = await sql_query(`
        SELECT id FROM themes
    `);
    let response = JSON.parse(JSON.stringify(result));
    return response.map((theme) => {
      return {
        params: {
          id: JSON.stringify(theme.id),
        },
      };
    });
  } catch (e) {
    throw err;
  }
}

export async function getThemeData(id) {
  try {
    const result = await sql_query(`
          SELECT * FROM themes WHERE id = ${id}
      `);
    let response = JSON.parse(JSON.stringify(result));
    return response[0];
  } catch (e) {
    throw err;
  }
}
