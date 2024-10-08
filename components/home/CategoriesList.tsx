import { categories } from "@/utils/categories";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import Link from "next/link";

export default function CategoriesList({
	category,
	search,
}: {
	category?: string;
	search?: string;
}) {
	const searchTerm = search ? `&search=${search}` : "";
	return (
		<section>
			<ScrollArea className="py-1">
				<div className="flex justify-around">
					{categories.map((item) => {
						const isActive = item.label === category;
						return (
							<Link key={item.label} href={`/?category=${item.label}${searchTerm}`}>
								<article
									className={`p-3 flex flex-col items-center cursor-pointer duration-300  hover:text-primary w-[100px] ${
										isActive ? "text-primary" : ""
									}`}
								>
									<item.icon className="w-6 h-6 sm:w-8 sm:h-8" />
									<p className="capitalize text-xs mt-1 sm:text-sm">{item.label}</p>
								</article>
							</Link>
						);
					})}
				</div>
				<ScrollBar orientation="horizontal" />
			</ScrollArea>
		</section>
	);
}
