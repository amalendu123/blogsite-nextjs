import * as fs from 'fs';

export default async function handler(req, res) {
  const { id } = req.query;
  console.log(id);

  try {
    // Read the JSON data from the file
    const fileData = await fs.promises.readFile('blogpost/blogs.json', 'utf-8');
    const jsonData = JSON.parse(fileData);

    // Find the matching item in the JSON data based on the provided ID (title)
    const matchingItem = jsonData.find(item => item.s === id);

    if (matchingItem) {
      res.status(200).json(matchingItem); // No need to parse again
    } else {
      res.status(404).json({ error: "Item not found" });
    }
  } catch (error) {
    console.error("Error reading or parsing JSON file:", error);
    res.status(500).json({ error: "Server error" });
  }
}
