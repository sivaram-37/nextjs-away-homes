import { TbBrandAirbnb } from "react-icons/tb";

export default function FormLogo() {
	return (
		<div className="mb-8 p-2 dark:bg-muted bg-stone-100 rounded-lg flex justify-center items-center">
			<TbBrandAirbnb className="h-14 w-14 p-2 text-primary" />
			<h1 className="text-3xl text-primary font-semibold">Airbnb</h1>
		</div>
	);
}
