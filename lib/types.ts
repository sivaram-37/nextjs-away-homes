export type FormInputProps = {
	name: string;
	type: string;
	label?: string;
	defaultValue?: string;
	placeholder?: string;
};

export type SubmitButtonProps = {
	className?: string;
	text?: string;
};

export type actionFunction = (
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	prevState: any,
	formData: FormData
) => Promise<{ message: string }>;
