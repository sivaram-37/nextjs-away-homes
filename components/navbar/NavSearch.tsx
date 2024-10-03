import { Input } from "../ui/input";

export default function NavSearch() {
	return (
		<Input
			type="text"
			placeholder="Search for properties..."
			className="max-w-xs dark:bg-muted "
		/>
	);
}
