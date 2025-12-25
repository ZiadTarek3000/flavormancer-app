import { PrismaClient } from '@prisma/client';
import express from 'express';
import cors from 'cors';

const prisma = new PrismaClient();
const app = express();

app.use(cors()); 
app.use(express.json()); 

app.get('/categories', async (req, res) => {
  try {
    const categories = await prisma.category.findMany();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch categories" });
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
    res.status(400).json({ error: "Check your data types" });
  }
});


app.get('/menuData', async (req, res) => {
  try {
    const menuData = await prisma.SpecialMenuCard.findMany();
    res.json(menuData);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch menuData" });
  }
});

app.post('/menuData', async (req, res) => {
  try {
    const { img, title, price, rating, reviews } = req.body;
    const newItem = await prisma.SpecialMenuCard.create({
      data: { img, title, price, rating, reviews },
    });
    res.json(newItem);
  } catch (error) {
    res.status(400).json({ error: "Invalid data" });
  }
});


app.get('/regularFood', async (req, res) => {
  try {
    const regularFood = await prisma.RegularFoodCard.findMany();
    res.json(regularFood);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch regularFood" });
  }
});

app.post('/regularFood', async (req, res) => {
  try {
    const { img, title, desc, price, rating, reviews } = req.body;
    const newItem = await prisma.RegularFoodCard.create({
      data: { img, title, desc, price, rating, reviews },
    });
    res.json(newItem);
  } catch (error) {
    res.status(400).json({ error: "Invalid data" });
  }
});


app.get('/chefs', async (req, res) => {
  try {
    const chefs = await prisma.chef.findMany();
    res.json(chefs);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch chefs" });
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
    res.status(400).json({ error: "Invalid chef data" });
  }
});



const PORT = 3001;
app.listen(PORT, () => {
  console.log(`✅ Server is running on: http://localhost:${PORT}`);
});