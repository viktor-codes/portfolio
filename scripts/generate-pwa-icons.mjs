/**
 * One-shot: resizes public/favicon.png into common PWA / touch icon sizes.
 * Run: node scripts/generate-pwa-icons.mjs
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')
const src = path.join(root, 'public', 'favicon.png')
const outDir = path.join(root, 'public')

if (!fs.existsSync(src)) {
	console.error('Missing public/favicon.png')
	process.exit(1)
}

const outputs = [
	['apple-touch-icon.png', 180],
	['icon-192.png', 192],
	['icon-512.png', 512],
	['favicon-32x32.png', 32],
]

await Promise.all(
	outputs.map(async ([name, size]) => {
		const dest = path.join(outDir, name)
		await sharp(src)
			.resize(size, size, { fit: 'cover', position: 'centre' })
			.png()
			.toFile(dest)
		console.log('Wrote', path.relative(root, dest))
	})
)

console.log('Done.')
