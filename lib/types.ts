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
	prevState: any,
	formData: FormData
) => Promise<{ message: string }>;
