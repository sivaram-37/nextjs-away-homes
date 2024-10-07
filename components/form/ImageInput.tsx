import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function ImageInput() {
	return (
		<div className="mb-2">
			<Label htmlFor="image" className="capitalize">
				Image
			</Label>
			<Input
				id="image"
				name="image"
				type="file"
				accept="image/*"
				className="max-w-sm"
				required
			/>
		</div>
	);
}
