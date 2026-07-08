const fs = require('fs');
const path = require('path');

const generatedImages = [
  "C:\\Users\\NineSol\\.gemini\\antigravity-ide\\brain\\80a352e0-3742-4bd0-b6b1-9dd82b90207d\\hero_featured_1783278488130.png",
  "C:\\Users\\NineSol\\.gemini\\antigravity-ide\\brain\\80a352e0-3742-4bd0-b6b1-9dd82b90207d\\founder_portrait_1783278497937.png",
  "C:\\Users\\NineSol\\.gemini\\antigravity-ide\\brain\\80a352e0-3742-4bd0-b6b1-9dd82b90207d\\editorial_studio_1783278507445.png",
  "C:\\Users\\NineSol\\.gemini\\antigravity-ide\\brain\\80a352e0-3742-4bd0-b6b1-9dd82b90207d\\about_hero_1783278517266.png",
  "C:\\Users\\NineSol\\.gemini\\antigravity-ide\\brain\\80a352e0-3742-4bd0-b6b1-9dd82b90207d\\ring_gold_band_1783278536072.png",
  "C:\\Users\\NineSol\\.gemini\\antigravity-ide\\brain\\80a352e0-3742-4bd0-b6b1-9dd82b90207d\\pearl_necklace_1783278545649.png",
  "C:\\Users\\NineSol\\.gemini\\antigravity-ide\\brain\\80a352e0-3742-4bd0-b6b1-9dd82b90207d\\diamond_solitaire_1783278553568.png",
  "C:\\Users\\NineSol\\.gemini\\antigravity-ide\\brain\\80a352e0-3742-4bd0-b6b1-9dd82b90207d\\gold_hoops_1783278562457.png",
  "C:\\Users\\NineSol\\.gemini\\antigravity-ide\\brain\\80a352e0-3742-4bd0-b6b1-9dd82b90207d\\category_pendant_1783278582343.png",
  "C:\\Users\\NineSol\\.gemini\\antigravity-ide\\brain\\80a352e0-3742-4bd0-b6b1-9dd82b90207d\\category_bangle_1783278594689.png",
  "C:\\Users\\NineSol\\.gemini\\antigravity-ide\\brain\\80a352e0-3742-4bd0-b6b1-9dd82b90207d\\category_earrings_1783278605247.png",
  "C:\\Users\\NineSol\\.gemini\\antigravity-ide\\brain\\80a352e0-3742-4bd0-b6b1-9dd82b90207d\\pool_ring_1_1783278851783.png",
  "C:\\Users\\NineSol\\.gemini\\antigravity-ide\\brain\\80a352e0-3742-4bd0-b6b1-9dd82b90207d\\pool_ring_2_1783278861411.png",
  "C:\\Users\\NineSol\\.gemini\\antigravity-ide\\brain\\80a352e0-3742-4bd0-b6b1-9dd82b90207d\\pool_necklace_1_1783278870697.png",
  "C:\\Users\\NineSol\\.gemini\\antigravity-ide\\brain\\80a352e0-3742-4bd0-b6b1-9dd82b90207d\\pool_necklace_2_1783278879632.png",
  "C:\\Users\\NineSol\\.gemini\\antigravity-ide\\brain\\80a352e0-3742-4bd0-b6b1-9dd82b90207d\\pool_earrings_1_1783278889695.png",
  "C:\\Users\\NineSol\\.gemini\\antigravity-ide\\brain\\80a352e0-3742-4bd0-b6b1-9dd82b90207d\\pool_earrings_2_1783278899348.png"
];

let poolIndex = 0;
function getNextImage() {
  const img = generatedImages[poolIndex];
  poolIndex = (poolIndex + 1) % generatedImages.length;
  return img;
}

// 1. Traverse all image files, copy replacement, build mapping
const mapping = {}; // Old filename -> new generic filename

let genericCounter = 1;

function findFiles(dir, ext) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(findFiles(file, ext));
    } else {
      if (file.toLowerCase().endsWith(ext)) results.push(file);
    }
  });
  return results;
}

const allWebps = findFiles(path.join(__dirname, 'public', 'images'), '.webp');
const allJpgs = findFiles(path.join(__dirname, 'public', 'images'), '.jpg');
const allImgs = [...allWebps, ...allJpgs];

allImgs.forEach(filePath => {
  const basename = path.basename(filePath);
  if (basename.includes('FJ Insta') || basename.includes('Felinda')) {
    const ext = path.extname(basename);
    const newBasename = `aurea-piece-${genericCounter}.webp`;
    genericCounter++;
    
    // Copy the generic AI image over to the same directory with the new name
    const src = getNextImage();
    const dest = path.join(path.dirname(filePath), newBasename);
    
    // We only copy if we haven't mapped this old basename yet, to avoid duplicating
    if (!mapping[basename]) {
      if (fs.existsSync(src)) {
        fs.copyFileSync(src, dest);
      }
      mapping[basename] = newBasename;
    }

    // Delete old file
    fs.unlinkSync(filePath);
  }
});

// 2. Search and replace in codebase
const targetDirs = ['app', 'components', 'data', 'lib'];
let replacedCount = 0;

targetDirs.forEach(dir => {
  const exts = ['.js', '.jsx', '.json'];
  exts.forEach(ext => {
    const files = findFiles(path.join(__dirname, dir), ext);
    files.forEach(file => {
      let content = fs.readFileSync(file, 'utf8');
      let changed = false;

      // Also replace 'auréa-jewelry' with 'aurea-jewellery'
      if (content.includes('auréa-jewelry')) {
        content = content.replace(/auréa-jewelry/g, 'aurea-jewellery');
        changed = true;
      }

      Object.keys(mapping).forEach(oldName => {
        const newName = mapping[oldName];
        if (content.includes(oldName)) {
          // Replace exactly the old basename with the new basename
          // We have to escape regex special chars
          const regex = new RegExp(oldName.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g');
          content = content.replace(regex, newName);
          changed = true;
        }
      });

      if (changed) {
        fs.writeFileSync(file, content, 'utf8');
        replacedCount++;
      }
    });
  });
});

console.log(`Replaced old images and updated ${replacedCount} source files.`);
