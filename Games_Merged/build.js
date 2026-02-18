import fs from 'fs-extra';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const DIST_DIR = join(__dirname, 'dist');
const FRUIT_GAME_DIR = join(__dirname, 'CB.SC.U4CSE23424');
const MATH_GAME_DIR = join(__dirname, 'Math_Game_FSlab2');

async function buildAll() {
    console.log('🚀 Starting unified build process...\n');

    try {
        // Clean dist directory
        console.log('🧹 Cleaning dist directory...');
        await fs.remove(DIST_DIR);
        await fs.ensureDir(DIST_DIR);
        console.log('✅ Dist directory cleaned\n');

        // Copy homepage files
        console.log('📄 Copying homepage files...');
        await fs.copy(join(__dirname, 'index.html'), join(DIST_DIR, 'index.html'));
        await fs.copy(join(__dirname, 'styles.css'), join(DIST_DIR, 'styles.css'));
        console.log('✅ Homepage files copied\n');

        // Build Fruit Game (Vite)
        console.log('🍎 Building Fruit Garden game...');
        process.chdir(FRUIT_GAME_DIR);
        execSync('npm run build', { stdio: 'inherit' });
        process.chdir(__dirname);
        
        // Copy Fruit Game build to dist/fruit-garden
        const fruitBuildDir = join(FRUIT_GAME_DIR, 'dist');
        const fruitTargetDir = join(DIST_DIR, 'fruit-garden');
        await fs.copy(fruitBuildDir, fruitTargetDir);
        console.log('✅ Fruit Garden built and copied\n');

        // Build Math Game (Create React App)
        console.log('🚗 Building Smart Garage game...');
        process.chdir(MATH_GAME_DIR);
        execSync('npm run build', { stdio: 'inherit' });
        process.chdir(__dirname);
        
        // Copy Math Game build to dist/smart-garage
        const mathBuildDir = join(MATH_GAME_DIR, 'build');
        const mathTargetDir = join(DIST_DIR, 'smart-garage');
        await fs.copy(mathBuildDir, mathTargetDir);
        console.log('✅ Smart Garage built and copied\n');

        // Update homepage links to use new paths
        console.log('🔗 Updating homepage links...');
        const indexPath = join(DIST_DIR, 'index.html');
        let indexContent = await fs.readFile(indexPath, 'utf-8');
        indexContent = indexContent.replace(
            'href="CB.SC.U4CSE23424/index.html"',
            'href="/fruit-garden/index.html"'
        );
        indexContent = indexContent.replace(
            'href="Math_Game_FSlab2/public/index.html"',
            'href="/smart-garage/index.html"'
        );
        await fs.writeFile(indexPath, indexContent);
        console.log('✅ Homepage links updated\n');

        console.log('🎉 Build completed successfully!');
        console.log('📦 Output directory: dist/');
        console.log('🌐 Deploy the dist/ folder to Vercel or any static hosting');

    } catch (error) {
        console.error('❌ Build failed:', error.message);
        process.exit(1);
    }
}

buildAll();
