import express from "express";
import authRoutes from "./routes/auth";
import championRoutes from "./routes/champions";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/auth", authRoutes);
app.use("/champions", championRoutes);

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
