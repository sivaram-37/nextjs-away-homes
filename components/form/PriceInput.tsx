import { Input } from "../ui/input";
import { Label } from "../ui/label";
const name = "price";

export default function PriceInput({ defaultValue }: { defaultValue?: number }) {
	return (
		<div className="mb-2">
			<Label htmlFor="price" className="capitalize">
				Price ($)
			</Label>
			<Input
				id={name}
				type="number"
				name={name}
				min={0}
				defaultValue={defaultValue || 100}
				required
			/>
		</div>
	);
}
