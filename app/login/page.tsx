import FormLogo from "@/components/form/FormLogo";
import LoginForm from "@/components/form/LoginForm";

export default function LoginPage() {
	return (
		<main className="flex items-center justify-center my-10">
			<div className="w-96 p-6 rounded-lg border-2 border-stone-100 shadow-lg shadow-stone-300">
				<FormLogo />
				<LoginForm />
			</div>
		</main>
	);
}
