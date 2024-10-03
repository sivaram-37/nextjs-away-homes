import { TbBrandAirbnb } from "react-icons/tb";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Logo() {
	return (
		<Button size={"icon"} asChild>
			<Link href="/">
				<TbBrandAirbnb className="h-6 w-6" />
			</Link>
		</Button>
	);
}
