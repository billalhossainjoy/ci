import express, { Request, Response } from "express";

const app = express();
const port = Number(process.env.PORT) || 3000;

app.get("/", (_req: Request, res: Response) => {
  res.json({ message: "server is running" });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
