import {
  Soup,
  ShieldCheck,
  Truck,
  Leaf,
  Clock,
  Award,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Category {
  id: number;
  img: string;
  title: string;
  desc: string;
  price: number;
  tag: string;
}

export interface MenuItem {
  id: number;
  img: string;
  title: string;
  desc: string;
  price: number;
  rating: number;
  reviews: number;
}

export interface Feature {
  id: number;
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface Stat {
  id: number;
  value: number;
  suffix: string;
  label: string;
}

export interface Chef {
  id: number;
  img: string;
  name: string;
  role: string;
  specialty: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  quote: string;
}

export const categories: Category[] = [
  {
    id: 1,
    img: "/images/pad-thai.jpeg",
    title: "Asian Fusion",
    desc: "Bold, aromatic noodles and street-food classics reinvented.",
    price: 14.5,
    tag: "Trending",
  },
  {
    id: 2,
    img: "/images/beef-stroganoff.jpg",
    title: "Premium Grills",
    desc: "Slow-seared cuts finished over open flame.",
    price: 21.0,
    tag: "Chef's Pick",
  },
  {
    id: 3,
    img: "/images/thai-beef-salad.webp",
    title: "Fresh & Light",
    desc: "Crisp, vibrant bowls packed with garden greens.",
    price: 11.75,
    tag: "Healthy",
  },
  {
    id: 4,
    img: "/images/moussaka.jpeg",
    title: "Comfort Classics",
    desc: "Hearty, soul-warming plates made the old-fashioned way.",
    price: 16.25,
    tag: "Popular",
  },
];

export const features: Feature[] = [
  {
    id: 1,
    icon: Leaf,
    title: "Farm-Fresh Ingredients",
    desc: "Every dish starts with produce sourced from local growers the same morning.",
  },
  {
    id: 2,
    icon: Award,
    title: "Award-Winning Kitchen",
    desc: "Our chefs blend craft and creativity to plate restaurant-grade meals.",
  },
  {
    id: 3,
    icon: ShieldCheck,
    title: "Quality Guaranteed",
    desc: "Not delighted? We'll remake it or refund it — no questions asked.",
  },
  {
    id: 4,
    icon: Soup,
    title: "Wholesome Recipes",
    desc: "Balanced, nutritious cooking that never sacrifices on flavor.",
  },
  {
    id: 5,
    icon: Truck,
    title: "Lightning Delivery",
    desc: "Hot, fresh, and at your door in an average of just fifteen minutes.",
  },
  {
    id: 6,
    icon: Clock,
    title: "Open Around the Clock",
    desc: "Late-night cravings welcome — the kitchen never really sleeps.",
  },
];

export const stats: Stat[] = [
  { id: 1, value: 320, suffix: "+", label: "Signature Dishes" },
  { id: 2, value: 48, suffix: "k", label: "Happy Foodies" },
  { id: 3, value: 24, suffix: "", label: "Master Chefs" },
  { id: 4, value: 15, suffix: "min", label: "Avg. Delivery" },
];

export const specialMenu: MenuItem[] = [
  {
    id: 1,
    img: "/images/butter-chicken.jpeg",
    title: "Butter Chicken",
    desc: "Tender chicken in a silky, spiced tomato cream.",
    price: 17.9,
    rating: 5,
    reviews: 214,
  },
  {
    id: 2,
    img: "/images/beef-nachos.webp",
    title: "Loaded Beef Nachos",
    desc: "Crisp tortillas, slow-cooked beef, molten cheese.",
    price: 13.5,
    rating: 5,
    reviews: 188,
  },
  {
    id: 3,
    img: "/images/pad-thai.jpeg",
    title: "Classic Pad Thai",
    desc: "Wok-tossed noodles with peanuts and lime.",
    price: 15.25,
    rating: 4,
    reviews: 167,
  },
  {
    id: 4,
    img: "/images/chicken-curry.jpeg",
    title: "Golden Chicken Curry",
    desc: "Fragrant coconut curry simmered low and slow.",
    price: 16.4,
    rating: 5,
    reviews: 231,
  },
  {
    id: 5,
    img: "/images/tuna-pasta.webp",
    title: "Creamy Tuna Pasta",
    desc: "Al dente ribbons in a herbed white sauce.",
    price: 14.0,
    rating: 4,
    reviews: 142,
  },
  {
    id: 6,
    img: "/images/beef-casserole.webp",
    title: "Rustic Beef Casserole",
    desc: "Braised beef and root vegetables in rich gravy.",
    price: 18.75,
    rating: 5,
    reviews: 199,
  },
];

export const regularFood: MenuItem[] = [
  {
    id: 1,
    img: "/images/air-fryer-chicken-rissoles.jpg",
    title: "Chicken Rissoles",
    desc: "Golden, juicy patties with a crisp herbed crust.",
    price: 9.9,
    rating: 4,
    reviews: 121,
  },
  {
    id: 2,
    img: "/images/savoury-mince.jpeg",
    title: "Savoury Mince",
    desc: "Comforting seasoned mince over fluffy rice.",
    price: 8.5,
    rating: 4,
    reviews: 98,
  },
  {
    id: 3,
    img: "/images/zucchini-fritters.jpeg",
    title: "Zucchini Fritters",
    desc: "Light, crispy fritters with a zesty yogurt dip.",
    price: 7.75,
    rating: 5,
    reviews: 134,
  },
  {
    id: 4,
    img: "/images/beef.jpg",
    title: "Grilled Beef Plate",
    desc: "Flame-grilled beef with seasonal sides.",
    price: 19.0,
    rating: 5,
    reviews: 176,
  },
  {
    id: 5,
    img: "/images/beef-stroganoff.jpg",
    title: "Beef Stroganoff",
    desc: "Creamy mushroom sauce over tender strips.",
    price: 16.6,
    rating: 4,
    reviews: 145,
  },
  {
    id: 6,
    img: "/images/moussaka.jpeg",
    title: "Layered Moussaka",
    desc: "Eggplant, spiced meat, and velvety béchamel.",
    price: 15.4,
    rating: 5,
    reviews: 158,
  },
];

export const chefs: Chef[] = [
  {
    id: 1,
    img: "/images/chef.jpg",
    name: "Marco Devlin",
    role: "Executive Chef",
    specialty: "Modern European",
  },
  {
    id: 2,
    img: "/images/chef2.jpg",
    name: "Aria Bennett",
    role: "Head Pastry Chef",
    specialty: "Desserts & Baking",
  },
  {
    id: 3,
    img: "/images/chef3.jpg",
    name: "Kenji Sato",
    role: "Grill Master",
    specialty: "Fire & Smoke",
  },
  {
    id: 4,
    img: "/images/chef4.jpg",
    name: "Lucia Romano",
    role: "Sous Chef",
    specialty: "Italian Cuisine",
  },
  {
    id: 5,
    img: "/images/chef5.jpg",
    name: "Omar Haddad",
    role: "Spice Specialist",
    specialty: "Middle Eastern",
  },
  {
    id: 6,
    img: "/images/chef6.jpg",
    name: "Nina Park",
    role: "Wok Chef",
    specialty: "Asian Fusion",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sophie Laurent",
    role: "Food Blogger",
    avatar: "/images/chef2.jpg",
    rating: 5,
    quote:
      "Flavormancer turned an ordinary Tuesday into a five-star experience. The butter chicken is pure magic.",
  },
  {
    id: 2,
    name: "James Okafor",
    role: "Regular Customer",
    avatar: "/images/chef3.jpg",
    rating: 5,
    quote:
      "Fastest delivery I've ever had, and the food arrived hot and beautifully plated. Genuinely impressed.",
  },
  {
    id: 3,
    name: "Mei Lin",
    role: "Office Manager",
    avatar: "/images/chef6.jpg",
    rating: 5,
    quote:
      "We cater our whole team's lunches here now. Consistent quality, every single order. Highly recommend.",
  },
  {
    id: 4,
    name: "Daniel Cruz",
    role: "Home Cook",
    avatar: "/images/chef.jpg",
    rating: 4,
    quote:
      "The grills taste like they came straight from a fine-dining kitchen. This has become my weekend ritual.",
  },
];

export const orbitImages: string[] = [
  "/images/lettuce.png",
  "/images/beef-slices.png",
  "/images/union-rings.png",
  "/images/paper-slices.png",
  "/images/potato-slices.png",
];

export const marqueeWords: string[] = [
  "Farm Fresh",
  "Handcrafted",
  "Bold Flavors",
  "Fast Delivery",
  "Master Chefs",
  "Locally Sourced",
  "Made With Love",
];
