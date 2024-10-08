import { fetchProfileImage } from "@/utils/actions";
import { LuUser2 } from "react-icons/lu";

async function UserIcon() {
	const profuleImage = await fetchProfileImage();
	if (profuleImage)
		return (
			// eslint-disable-next-line @next/next/no-img-element
			<img src={profuleImage} alt="profile" className="w-6 h-6 rounded-full object-cover" />
		);
	return <LuUser2 className="w-6 h-6 bg-primary rounded-full text-white" />;
}
export default UserIcon;
