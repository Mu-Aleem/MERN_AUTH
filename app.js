import express from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

//routes import
// import userRouter from "./routes/users/user.routes.js";
//routes declaration
// app.use("/api/v1/healthcheck", healthcheckRouter);

export { app };
