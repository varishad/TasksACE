const fs = require('fs');
const path = require('path');

// SEO Verification Script for TasksACE Website
console.log('🔍 SEO Verification Report for TasksACE Website\n');

// Function to check if file has metadata
function hasMetadata(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    return content.includes('export const metadata');
  } catch (error) {
    return false;
  }
}

// Function to get all page files
function getAllPages(dir) {
  const pages = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      pages.push(...getAllPages(fullPath));
    } else if (item === 'page.tsx') {
      pages.push(fullPath);
    }
  }
  
  return pages;
}

// Main verification
const appDir = path.join(__dirname, '../app');
const allPages = getAllPages(appDir);

console.log(`📊 Total Pages Found: ${allPages.length}`);
console.log(`📍 Pages with Metadata: ${allPages.filter(page => hasMetadata(page)).length}`);
console.log(`❌ Pages Missing Metadata: ${allPages.filter(page => !hasMetadata(page)).length}\n`);

// List pages with metadata
console.log('✅ Pages with SEO Metadata:');
allPages.filter(page => hasMetadata(page)).forEach(page => {
  const relativePath = path.relative(appDir, page);
  console.log(`  - ${relativePath}`);
});

console.log('\n❌ Pages Missing SEO Metadata:');
allPages.filter(page => !hasMetadata(page)).forEach(page => {
  const relativePath = path.relative(appDir, page);
  console.log(`  - ${relativePath}`);
});

console.log('\n🎯 SEO Implementation Status:');
const coverage = (allPages.filter(page => hasMetadata(page)).length / allPages.length * 100).toFixed(1);
console.log(`📈 SEO Coverage: ${coverage}%`);

if (coverage >= 80) {
  console.log('✅ Excellent SEO Implementation!');
} else if (coverage >= 60) {
  console.log('⚠️  Good SEO Implementation - Consider adding metadata to remaining pages');
} else {
  console.log('❌ SEO Implementation needs improvement');
}

console.log('\n🚀 Next Steps:');
console.log('1. Add metadata to remaining pages');
console.log('2. Implement structured data for all service pages');
console.log('3. Monitor Google Search Console for indexing');
console.log('4. Track organic traffic growth');
console.log('5. Optimize based on performance data'); 