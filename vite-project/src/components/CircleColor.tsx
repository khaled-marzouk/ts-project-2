import { HTMLAttributes } from "react";

interface Iprops extends HTMLAttributes<HTMLSpanElement> {
	color: string;
}

function CircleColor({ color, ...rest }: Iprops) {
	return (
		<div>
			<span
				{...rest}
				style={{ backgroundColor: color }}
				className={`block w-5 h-5 rounded-full  cursor-pointer`}
			></span>
		</div>
	);
}

export default CircleColor;
