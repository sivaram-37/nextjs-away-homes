import Link from "next/link";
import { Button } from "../ui/button";

export default function EmptyList({
	heading = "No item in the list.",
	message = "Keep exploring our properties.",
	btnText = "Back home",
}: {
	heading?: string;
	message?: string;
	btnText?: string;
}) {
	return (
		<div className="mt-4">
			<h2 className="text-xl font-bold">{heading}</h2>
			<p className="text-lg">{message}</p>
			<Button className="mt-4 capitalize" size="lg" asChild>
				<Link href="/">{btnText}</Link>
			</Button>
		</div>
	);
}
