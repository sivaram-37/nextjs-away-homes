import { LuAlignLeft } from "react-icons/lu";
import { Button } from "../ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import UserIcon from "./UserIcon";
import { links } from "@/utils/links";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";
import SignOutLink from "./SignOutLink";

export default function LinksDropdown() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline" className="flex gap-4 max-w-[100px]">
					<LuAlignLeft className="w-6 h-6" />
					<UserIcon />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-52" align="center" sideOffset={10}>
				<SignedOut>
					<DropdownMenuItem>
						<SignInButton mode="modal">
							<button className="w-full text-left">Login</button>
						</SignInButton>
					</DropdownMenuItem>
					<DropdownMenuSeparator />
					<DropdownMenuItem>
						<SignUpButton mode="modal">
							<button className="w-full text-left">Register</button>
						</SignUpButton>
					</DropdownMenuItem>
				</SignedOut>
				<SignedIn>
					{links.map((link) => (
						<DropdownMenuItem key={link.href}>
							<Link href={link.href}>{link.label}</Link>
						</DropdownMenuItem>
					))}
					<DropdownMenuSeparator />
					<DropdownMenuItem>
						<SignOutLink />
					</DropdownMenuItem>
				</SignedIn>
				{/* {links.map((link) => (
					<DropdownMenuItem key={link.href}>
						<Link href={link.href}>{link.label}</Link>
					</DropdownMenuItem>
				))}
				<DropdownMenuSeparator />
				<DropdownMenuItem>
					<SignOutLink />
				</DropdownMenuItem> */}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
