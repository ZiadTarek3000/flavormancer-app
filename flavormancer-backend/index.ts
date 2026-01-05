import { PrismaClient } from '@prisma/client';
import express from 'express';
import cors from 'cors';

const prisma = new PrismaClient();
const app = express();

app.use(cors());
app.use(express.json());

/* ===================== Categories ===================== */

app.get('/categories', async (req, res) => {
  try {
    const categories = await prisma.category.findMany();
    res.json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch categories' });
  }
});

app.post('/categories', async (req, res) => {
  try {
    const { img, title, desc, price } = req.body;
    const newCategory = await prisma.category.create({
      data: { img, title, desc, price },
    });
    res.json(newCategory);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: 'Invalid category data' });
  }
});

/* ===================== Special Menu ===================== */

app.get('/menuData', async (req, res) => {
  try {
    const menuData = await prisma.specialMenuCard.findMany();
    res.json(menuData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch menuData' });
  }
});

app.post('/menuData', async (req, res) => {
  try {
    const { img, title, price, rating, reviews } = req.body;
    const newItem = await prisma.specialMenuCard.create({
      data: { img, title, price, rating, reviews },
    });
    res.json(newItem);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: 'Invalid menu item data' });
  }
});

/* ===================== Regular Food ===================== */

app.get('/regularFood', async (req, res) => {
  try {
    const regularFood = await prisma.regularFoodCard.findMany();
    res.json(regularFood);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch regular food' });
  }
});

app.post('/regularFood', async (req, res) => {
  try {
    const { img, title, desc, price, rating, reviews } = req.body;
    const newItem = await prisma.regularFoodCard.create({
      data: { img, title, desc, price, rating, reviews },
    });
    res.json(newItem);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: 'Invalid regular food data' });
  }
});

/* ===================== Chefs ===================== */

app.get('/chefs', async (req, res) => {
  try {
    const chefs = await prisma.chef.findMany();
    res.json(chefs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch chefs' });
  }
});

app.post('/chefs', async (req, res) => {
  try {
    const { img, offset } = req.body;
    const newChef = await prisma.chef.create({
      data: {
        img,
        offset: offset ?? false,
      },
    });
    res.json(newChef);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: 'Invalid chef data' });
  }
});

/* ===================== Server ===================== */

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

/* ===================== Graceful Shutdown ===================== */

process.on('SIGTERM', async () => {
  await prisma.$disconnect();
  process.exit(0);
});

