// scripts/download-icons.js
const { downloadPackage } = require('@iconify/tools');
const path = require('path');
const fs = require('fs');

// Create output directory
const outputDir = path.join(__dirname, '../public/iconify-collections');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const collections = ['devicon', 'logos', 'simple-icons'];

(async () => {
  for (const prefix of collections) {
    console.log(`Downloading ${prefix}...`);
    const target = path.join(outputDir, `${prefix}.json`);
    
    try {
      await downloadPackage({
        target,
        package: `@iconify-json/${prefix}`,
        version: 'latest',
      });
      console.log(`✅ ${prefix} saved to ${target}`);
    } catch (error) {
      console.error(`❌ Error downloading ${prefix}:`, error.message);
    }
  }
  
  console.log('\n🎉 All collections downloaded! Run "npm run deploy" to update your site.');
})();