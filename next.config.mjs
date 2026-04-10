/** @type {import('next').NextConfig} */
const securityHeaders = [
	{ key: 'X-Content-Type-Options', value: 'nosniff' },
	{ key: 'X-Frame-Options', value: 'DENY' },
	{
		key: 'Referrer-Policy',
		value: 'strict-origin-when-cross-origin',
	},
	{
		key: 'Permissions-Policy',
		value: 'camera=(), microphone=(), geolocation=()',
	},
	{ key: 'X-DNS-Prefetch-Control', value: 'on' },
]

// CSP: a strict policy needs nonces for Next.js + GA4 inline scripts; add via
// middleware or experimental CSP support when you are ready to tune allowlists.

const nextConfig = {
	async headers() {
		return [
			{
				source: '/:path*',
				headers: securityHeaders,
			},
		]
	},
	webpack(config) {
		config.watchOptions = {
			...(config.watchOptions ?? {}),
			ignored: [
				'**/.git/**',
				'**/.next/**',
				'**/node_modules/**',
			],
		}

		// Grab the existing rule that handles SVG imports
		const fileLoaderRule = config.module.rules.find(rule =>
			rule.test?.test?.('.svg')
		)

		config.module.rules.push(
			// Reapply the existing rule, but only for svg imports ending in ?url
			{
				...fileLoaderRule,
				test: /\.svg$/i,
				resourceQuery: /url/, // *.svg?url
			},
			// Convert all other *.svg imports to React components
			{
				test: /\.svg$/i,
				issuer: fileLoaderRule.issuer,
				resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
				use: {
					loader: '@svgr/webpack',
					options: {
						svgoConfig: {
							plugins: [
								{
									name: 'preset-default',
									params: {
										overrides: {
											removeViewBox: false,
										},
									},
								},
							],
						},
					},
				},
			}
		)

		// Modify the file loader rule to ignore *.svg, since we have it handled now.
		fileLoaderRule.exclude = /\.svg$/i

		return config
	},
}

export default nextConfig
