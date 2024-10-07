import { put } from "@vercel/blob";

export default async function uploadImage(image: File) {
	const timestamp = Date.now();
	const newName = `${image.name}${timestamp}`;

	const blob = await put(newName, image, {
		access: "public",
	});

	if (!blob) throw new Error("Image upload failed");

	return blob.url;
}
