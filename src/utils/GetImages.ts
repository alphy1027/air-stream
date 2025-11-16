import path from "path";
import fs from "fs";

export function GetImages(folder: string) {
  // path to your images folder
  const folderPath = path.join(process.cwd(), `public/images/${folder}`);

  // read all files in folder
  const files = fs.readdirSync(folderPath);
  fs;

  // filter only image extensions
  const images = files.filter((file) => /\.(png|jpe?g|jpg|webp|gif|svg)$/i.test(file));

  return images;
}
