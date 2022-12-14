import express from "express";
import apiRouter from "./routes.js";
import "dotenv/config";
import errorMiddleware from "./middlewares/error.js"
const app = express();
const port = process.env.PORT;

app.use(express.json())
            
app.get("/", (req, res) => {
  res.json("HI");
});

app.use(apiRouter);

app.use(errorMiddleware)
app.listen(port, () => {
  console.log(`App is running at http://localhost:${port}`);
});
