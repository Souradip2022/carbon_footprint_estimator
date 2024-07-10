import express, { Request, Response } from "express";
import cors from "cors";
import compress from "compression";
import dotenv from "dotenv";
import morgan from "morgan";

import apiRoutes from "./routes";

dotenv.config();
const app = express();
const port = process.env.PORT || 3300;
const corsOptions = {
  origin: ["https://hack4bioheritage.vercel.app", "http://localhost:3000"],
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(compress());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api", apiRoutes);
app.use((req: Request, res: Response) => res.send({ message: "Hello World!" }));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
