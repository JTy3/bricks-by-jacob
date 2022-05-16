import { getSetPartsList } from "../../../lib/parts";

export default async function handler(req, res) {
  const data = await getSetPartsList(req.query.slug[0]);
  res.status(200).json(data);
}
