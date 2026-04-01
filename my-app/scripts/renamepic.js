// scripts/normalize-product-images.js
import fs from "fs";
import path from "path";

const ROOT = "./public/images/products";

const slugify = (str) =>
  str
    .toLowerCase()
    .replace(/\.[^/.]+$/, "") // убрать расширение
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const walk = (dir) => {
  fs.readdirSync(dir, { withFileTypes: true }).forEach((entry) => {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      walk(fullPath);
    } else {
      const ext = path.extname(entry.name);
      const slug = slugify(entry.name);

      const newPath = path.join(dir, `${slug}${ext}`);

      if (fullPath !== newPath) {
        fs.renameSync(fullPath, newPath);
      }
    }
  });
};

walk(ROOT);
