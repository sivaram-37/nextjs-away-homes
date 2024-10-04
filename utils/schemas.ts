import * as z from "zod";
import { ZodSchema } from "zod";

export const profileSchema = z.object({
	firstName: z.string().min(3, { message: "Firstname must be alteast 3 characters" }),
	lastName: z.string().min(3, { message: "Lastname must be atleast 3 characters" }),
	username: z.string().min(5, { message: "Username must be atleast 5 characters" }),
});

export function validateWithZodSchema<T>(schema: ZodSchema<T>, data: unknown): T {
	const result = schema.safeParse(data);
	if (!result.success) {
		const errors = result.error.errors.map((error) => error.message);

		throw new Error(errors.join(", "));
	}
	return result.data;
}
