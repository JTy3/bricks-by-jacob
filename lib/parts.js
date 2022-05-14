import { sql_query } from "../lib/db";

export async function getAllPartIds() {
  try {
    const result = await sql_query(`
        SELECT part_num FROM parts
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

export async function getSetPartsList(setId) {
  try {
    const result = await sql_query(`
      SELECT * FROM lego.inventory_parts 
      WHERE inventory_id 
      IN (SELECT id FROM lego.inventories WHERE set_num = ${setId})
    `);
    let response = JSON.parse(JSON.stringify(result));
    return response;
  } catch (e) {
    console.log(e);
    throw Error;
  }
}
