const { execSync } = require('child_process')
const path = require('path')

process.env.NEXT_PUBLIC_BASE_PATH = '/linux-admin-learning-platform'

const root = path.resolve(__dirname, '..')
const outDir = path.join(root, 'out')

// Build
execSync('npm run build', { cwd: root, stdio: 'inherit' })

// .nojekyll for GitHub Pages
require('fs').writeFileSync(path.join(outDir, '.nojekyll'), '')

// Deploy
execSync('npx gh-pages -d out -b gh-pages', { cwd: root, stdio: 'inherit' })
