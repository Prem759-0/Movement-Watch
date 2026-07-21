import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const framesDirs = [
  path.join(process.cwd(), 'public', '1-frames'),
  path.join(process.cwd(), 'public', '2-frames'),
  path.join(process.cwd(), 'public', '4-frames')
];

async function compressDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) return;
  
  const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.png'));
  console.log(`Found ${files.length} PNGs in ${dirPath}. Compressing...`);
  
  for (const file of files) {
    const pngPath = path.join(dirPath, file);
    const webpPath = path.join(dirPath, file.replace('.png', '.webp'));
    
    try {
      await sharp(pngPath)
        .webp({ quality: 50 })
        .toFile(webpPath);
        
      // Delete the original png
      fs.unlinkSync(pngPath);
    } catch (e) {
      console.error(`Error compressing ${file}:`, e);
    }
  }
  
  console.log(`Finished ${dirPath}`);
}

async function run() {
  for (const dir of framesDirs) {
    await compressDirectory(dir);
  }
}

run();
