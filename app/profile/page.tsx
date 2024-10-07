import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import ImageInputContainer from "@/components/form/ImageInputContainer";
import SubmitButton from "@/components/form/SubmitButton";
import {
	updateProfileAction,
	fetchProfile,
	updateProfileImageAction,
} from "@/utils/actions";

export default async function ProfilePage() {
	const profile = await fetchProfile();

	return (
		<section className="">
			<h1 className="text-2xl font-semibold mb-8 capitalize">user profile</h1>
			<div className="border p-8 rounded-md overflow-y-auto scroll-smooth max-h-96">
				<ImageInputContainer
					action={updateProfileImageAction}
					text="Update Profile Image"
					name={profile.username}
					image={profile.profileImage}
				/>
				<FormContainer action={updateProfileAction}>
					<div className="grid gap-4 md:grid-cols-2 mt-4 ">
						<FormInput
							type="text"
							name="firstName"
							label="First Name"
							defaultValue={profile.firstName}
						/>
						<FormInput
							type="text"
							name="lastName"
							label="Last Name"
							defaultValue={profile.lastName}
						/>
						<FormInput
							type="text"
							name="username"
							label="Username"
							defaultValue={profile.username}
						/>
					</div>
					<SubmitButton text="Update Profile" className="mt-8" />
				</FormContainer>
			</div>
		</section>
	);
}
