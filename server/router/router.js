import express from "express";
import data from "../data/data.json";

const router = express.Router();

router.get("/api/", (req, res) => {
  res.json(data);
});

router.get("/data/", (req, res) => {
  res.json(data);
});

router.get("/title", (req, res) => {
  res.json({ title1: brian, title2: evan, title3: jayce });
});
export default router;
