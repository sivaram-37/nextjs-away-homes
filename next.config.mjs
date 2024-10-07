/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{ protocol: "https", hostname: "img.clerk.com" },
			{
				protocol: "https",
				hostname: "4uce32fctn9ip8ci.public.blob.vercel-storage.com",
			},
			{ protocol: "https", hostname: "flagcdn.com" },
		],
	},
};

export default nextConfig;
