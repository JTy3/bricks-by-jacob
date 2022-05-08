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
        SELECT parent.*, child.id as childId, child.name as childName
        FROM themes AS parent
        LEFT JOIN themes AS child 
        ON child.parent_id = parent.id
        WHERE parent.id = ${id}
        ORDER BY parent.id, child.id;
      `);
    let response = JSON.parse(JSON.stringify(result));
    // Check if it is a child
    if (response[0].parent_id == 0) {
      return response;
    } else {
      // Seems overkill but I am doing this for breadcrumb feature - I will try and improve my sql
      let parentName = await sql_query(`
        SELECT name FROM themes WHERE id = ${response[0].parent_id}
      `);
      parentName = JSON.parse(JSON.stringify(parentName));
      response[0].parent_name = parentName[0].name;
      return response;
    }
  } catch (e) {
    throw err;
  }
}
