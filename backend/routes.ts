import express, { Request, response, Response } from "express";
const router = express.Router();

router.get("/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    if (!id || id === "id") throw new Error("ID is required");

    const response = await fetch(
      `https://api.websitecarbon.com/site?url=${id}`
    );
    const data = await response.json();
    console.log(data);
    res.status(200).json({ data: data.statistics.co2.grid.grams * 365 });
  } catch (e: any) {
    console.error(e);
    res.status(500).send({ message: e.message });
  }
});

export default router;
