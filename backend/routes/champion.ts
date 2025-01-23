import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

router.get("/search", async (req, res) => {
    const { query } = req.query;
    const champions = await prisma.champion.findMany({
        where: { name: { contains: query as string, mode: "insensitive" } },
    });
    res.json(champions);
});

export default router;
