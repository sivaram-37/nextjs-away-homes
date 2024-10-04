import { fetchProfileImage } from "@/utils/actions";
import Image from "next/image";
import { LuUser2 } from "react-icons/lu";

async function UserIcon() {
	const profuleImage = await fetchProfileImage();
	if (profuleImage)
		return (
			<Image
				src={profuleImage}
				alt="profile"
				className="w-6 h-6 rounded-full object-cover"
			/>
		);
	return <LuUser2 className="w-6 h-6 bg-primary rounded-full text-white" />;
}
export default UserIcon;
