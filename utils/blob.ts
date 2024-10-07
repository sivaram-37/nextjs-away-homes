import { put } from "@vercel/blob";

export default async function uploadImage(image: File, filename: string) {
	const blob = await put(filename, image, {
		access: "public",
	});

	if (!blob) throw new Error("Image upload failed");

	return blob.url;
}
