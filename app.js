import express from "express";
import cors from "cors";
//routes import
import userRouter from "./routes/user.routes.js";

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

//routes declaration

app.use("/api/v1/auth", userRouter);

app.get("/api/v1/healthcheck", (req, res) => {
  res.status(200).json({ status: "UP", timestamp: new Date().toISOString() });
});

export { app };
