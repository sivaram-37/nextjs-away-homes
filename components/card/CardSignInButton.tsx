import { SignInButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import { FaRegHeart } from "react-icons/fa";

export default function CardSignInButton() {
	return (
		<SignInButton mode="modal">
			<Button
				variant="outline"
				size="icon"
				className="p-2 cursor-pointer"
				type="button"
				asChild
			>
				<FaRegHeart />
			</Button>
		</SignInButton>
	);
}
