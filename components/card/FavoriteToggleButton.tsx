import { FaHeart } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { auth } from "@clerk/nextjs/server";
import CardSignInButton from "./CardSignInButton";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function FavoriteToggleButton({ propertyId }: { propertyId: string }) {
	const { userId } = auth();
	if (!userId) return <CardSignInButton />;

	return (
		<Button size="icon" variant="outline" className="p-2 cursor-pointer">
			<FaHeart />
		</Button>
	);
}
