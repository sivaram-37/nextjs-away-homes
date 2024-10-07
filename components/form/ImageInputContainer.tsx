"use client";

import { ImageInputContainerProps } from "@/lib/types";
import Image from "next/image";
import { useState } from "react";
import { LuUser2 } from "react-icons/lu";
import { Button } from "../ui/button";
import FormContainer from "./FormContainer";
import ImageInput from "./ImageInput";
import SubmitButton from "./SubmitButton";

export default function ImageInputContainer(props: ImageInputContainerProps) {
	const { image, name, action, text } = props;
	const [isVisible, setIsVisible] = useState(false);
	const userIcon = (
		<LuUser2 className="w-24 h-24 bg-primary rounded-md text-white mb-4" />
	);

	return (
		<div>
			{image ? (
				<Image
					src={image}
					alt={name}
					width={100}
					height={100}
					className="rounded-md object-cover mb-4 w-32 h-32"
					priority
				/>
			) : (
				userIcon
			)}
			<Button size="sm" variant="outline" onClick={() => setIsVisible((show) => !show)}>
				{text}
			</Button>
			{isVisible && (
				<div className="max-w-lg mt-4">
					<FormContainer action={action}>
						{props.children}
						<ImageInput />
						<SubmitButton size="sm" />
					</FormContainer>
				</div>
			)}
		</div>
	);
}
