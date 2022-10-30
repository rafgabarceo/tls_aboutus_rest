import { router as staffer_router } from "./routes/staffer.js";

import express from "express";



// Initialize express
const app = express();
const port = 3000;

// app.use("/", indexRouter)
app.use("/staffers", staffer_router);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Listening on ${port}`);
})