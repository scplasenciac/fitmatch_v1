const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');
const ghpages = require('gh-pages');

// Build the project
console.log('Building project...');
execSync('npm run build', { stdio: 'inherit' });

// Create .nojekyll file
console.log('Creating .nojekyll file...');
const outDir = path.join(__dirname, 'out');
fs.writeFileSync(path.join(outDir, '.nojekyll'), '');

// Deploy to GitHub Pages
console.log('Deploying to GitHub Pages...');
ghpages.publish('out', {
  dotfiles: true,
  branch: 'gh-pages',
  repo: 'https://github.com/scplasenciac/fitmatch_v1.git'
}, function(err) {
  if (err) {
    console.error('Deployment failed:', err);
    process.exit(1);
  } else {
    console.log('Deployment successful!');
  }
}); 