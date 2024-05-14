import { ButtonHTMLAttributes, ReactNode } from "react";

interface Iprops extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	className?: string;
	width?: "w-full" | "w-fit";
}

function Button({ children, width = "w-full", className, ...rest }: Iprops) {
	return (
		<button
			className={`${className} ${width} rounded-md text-white p-2 w-full`}
			{...rest}
		>
			{children}
		</button>
	);
}

export default Button;
