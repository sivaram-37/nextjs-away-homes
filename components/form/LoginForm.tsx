"use client";

import { useFormStatus } from "react-dom";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function Form() {
	const { pending } = useFormStatus();

	return (
		<form>
			<div className="flex justify-center items-center mb-8">
				<label htmlFor="email" className="sm:basis-40 text-xl">
					Email
				</label>
				<Input id="email" name="email" type="email" placeholder="name@domain.com" />
			</div>

			<div className="flex justify-center items-center mb-8">
				<label htmlFor="password" className="sm:basis-40 text-xl">
					Password
				</label>
				<Input id="password" name="password" type="password" placeholder="********" />
			</div>

			<div className="flex justify-center">
				<Button
					className="text-xl w-96 hover:bg-red-500 hover:-translate-y-1 hover:scale-95 transition ease-in-out delay-75 duration-300"
					disabled={pending}
					type="submit"
				>
					{pending ? "Loging..." : "Login"}
				</Button>
			</div>
		</form>
	);
}
