import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { FormInputProps } from "@/lib/types";

export default function FormInput({
	name,
	type,
	label,
	defaultValue,
	placeholder,
}: FormInputProps) {
	return (
		<div className="mb-2">
			<Label htmlFor={name} className="capitalize">
				{label || name}
			</Label>
			<Input
				id={name}
				name={name}
				type={type}
				placeholder={placeholder}
				defaultValue={defaultValue}
				required
			/>
		</div>
	);
}
