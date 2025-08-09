import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;

// Statische Dateien (React-Spiel im public-Ordner)
app.use(express.static(path.join(__dirname, "public")));

// Fallback auf index.html (SPA)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});
