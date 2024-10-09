"use client";

import { Input } from "../ui/input";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { useState, useEffect } from "react";

export default function NavSearch() {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const { replace } = useRouter();

	const [searchInp, setSearchInp] = useState(searchParams.get("search")?.toString() || "");

	const handleSearch = useDebouncedCallback((value: string) => {
		const params = new URLSearchParams(searchParams);
		if (value) params.set("search", value);
		else params.delete("search");
		replace(`${pathname}?${params.toString()}`);
	}, 300);

	useEffect(() => {
		if (!searchParams.get("search")) {
			setSearchInp("");
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [searchParams.get("search")]);

	return (
		<Input
			type="text"
			placeholder="Search for properties..."
			className="max-w-xs dark:bg-muted "
			value={searchInp}
			onChange={(e) => {
				setSearchInp(e.target.value);
				handleSearch(e.target.value);
			}}
		/>
	);
}
