-- CreateTable
CREATE TABLE "RegularFoodCard" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "img" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "rating" INTEGER NOT NULL DEFAULT 5,
    "reviews" INTEGER NOT NULL DEFAULT 169
);
