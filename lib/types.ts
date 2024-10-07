import { IconType } from "react-icons";

export type FormInputProps = {
	name: string;
	type: string;
	label?: string;
	defaultValue?: string;
	placeholder?: string;
};

type btnsize = "default" | "lg" | "sm";
export type SubmitButtonProps = {
	className?: string;
	text?: string;
	size?: btnsize;
};

export type actionFunction = (
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	prevState: any,
	formData: FormData
) => Promise<{ message: string }>;

export type ImageInputContainerProps = {
	image: string;
	name: string;
	action: actionFunction;
	text: string;
	children?: React.ReactNode;
};

type CategoryLabel =
	| "cabin"
	| "tent"
	| "airstream"
	| "cottage"
	| "container"
	| "caravan"
	| "tiny"
	| "magic"
	| "warehouse"
	| "lodge";

export type Category = {
	label: CategoryLabel;
	icon: IconType;
};

export type TextAreaInputProps = {
	name: string;
	labelText?: string;
	defaultValue?: string;
};

export type PropertyCardProps = {
	image: string;
	id: string;
	name: string;
	tagline: string;
	country: string;
	price: number;
};
