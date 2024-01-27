import { Link } from "wouter-preact";

function ConsoleSelect({
	className,
	href,
	children,
}: { className: string; href: string; children: string }) {
	return (
		<Link
			className={`${className} text-white font-semibold text-sm py-1 px-2 rounded-full text-center transition-all`}
			href={href}
			target={"_blank"}
		>
			{children}
		</Link>
	);
}

export default ConsoleSelect;
