const fs = require('fs');
const path = require('path');

// Create an SVG favicon with gradient
const createFaviconSVG = () => {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#A724FF;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#7729FF;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#4D29FF;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="32" height="32" rx="6" fill="url(#gradient)"/>
  <text x="16" y="22" font-family="Arial, sans-serif" font-size="20" font-weight="bold" fill="white" text-anchor="middle">N</text>
</svg>`;
};

// Create a larger icon for app/icon.png (Next.js 13+)
const createAppIconSVG = () => {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#A724FF;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#7729FF;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#4D29FF;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="512" height="512" rx="96" fill="url(#gradient)"/>
  <text x="256" y="340" font-family="Arial, sans-serif" font-size="320" font-weight="bold" fill="white" text-anchor="middle">N</text>
</svg>`;
};

// Create favicon.ico placeholder (SVG format for modern browsers)
const createFaviconICO = () => {
  return createFaviconSVG();
};

const main = () => {
  const appDir = path.join(__dirname, 'app');
  const publicDir = path.join(__dirname, 'public');

  // Ensure directories exist
  if (!fs.existsSync(appDir)) {
    fs.mkdirSync(appDir, { recursive: true });
  }
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // Create app/icon.svg (Next.js 13+ will use this)
  const iconPath = path.join(appDir, 'icon.svg');
  fs.writeFileSync(iconPath, createAppIconSVG());
  console.log(`✓ Created ${iconPath}`);

  // Create public/favicon.svg
  const faviconPath = path.join(publicDir, 'favicon.svg');
  fs.writeFileSync(faviconPath, createFaviconSVG());
  console.log(`✓ Created ${faviconPath}`);

  // Also create a simple favicon.ico as SVG (modern browsers support SVG favicons)
  const faviconIcoPath = path.join(publicDir, 'favicon.ico');
  fs.writeFileSync(faviconIcoPath, createFaviconICO());
  console.log(`✓ Created ${faviconIcoPath}`);

  console.log('\n✅ Favicon created successfully!');
  console.log('📝 Note: For best compatibility, you may want to convert SVG to ICO format using an online tool.');
  console.log('   The SVG favicon will work in modern browsers.');
};

main();

