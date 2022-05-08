import { sql_query } from "../lib/db";
import Error from "next/Error";

export async function getAllSetIds() {
  try {
    const result = await sql_query(`
        SELECT set_num FROM sets
    `);
    let response = JSON.parse(JSON.stringify(result));
    return response.map((sets) => {
      return {
        params: {
          id: sets.set_num,
        },
      };
    });
  } catch (e) {
    console.log(e);
    throw Error;
  }
}

export async function getThemesSets(themeId) {
  try {
    const result = await sql_query(`
            SELECT * FROM sets WHERE theme_id = ${themeId}
        `);
    let response = JSON.parse(JSON.stringify(result));
    return response;
  } catch (e) {
    console.log(e);
    throw Error;
  }
}

export async function getSetsData(id) {
  try {
    const result = await sql_query(`
      SELECT sets.*, themes.name as theme_name
      FROM sets 
      INNER JOIN themes
      ON sets.theme_id = themes.id
      AND set_num = ${id}
    `);
    let response = JSON.parse(JSON.stringify(result));
    return response[0];
  } catch (e) {
    console.log(e);
    throw Error;
  }
}
