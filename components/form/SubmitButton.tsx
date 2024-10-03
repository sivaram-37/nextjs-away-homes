"use client";

import { SubmitButtonProps } from "@/lib/types";
import { Button } from "../ui/button";
import { useFormStatus } from "react-dom";
import { ReloadIcon } from "@radix-ui/react-icons";

export default function SubmitButton({
	className = "",
	text = "submit",
}: SubmitButtonProps) {
	const { pending } = useFormStatus();

	return (
		<Button type="submit" className={`capitalize ${className}`} size="lg">
			{pending ? (
				<>
					<ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
					Please wait...
				</>
			) : (
				text
			)}
		</Button>
	);
}
