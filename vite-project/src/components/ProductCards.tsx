import Image from "./Image";
import { Iproduct } from "../assets/interfaces";
import Button from "./ui/Button";
import { textSlicer } from "../assets/utils/functions";

interface Iprops {
	product: Iproduct;
}

const ProductCards = ({ product }: Iprops) => {
	return (
		<div className="border border-md p-2 flex flex-col">
			<Image
				imageURL={product.imageURL}
				alt={"product-name"}
				className="rounded-md mb-2"
			/>
			<h3>{product.title}</h3>
			<p>{textSlicer(product.description)}</p>
			<div className="flex items-center space-x-2 my-4">
				<span className="w-5 h-5 rounded-full bg-red-500 cursor-pointer"></span>
				<span className="w-5 h-5 rounded-full bg-red-500 cursor-pointer"></span>
				<span className="w-5 h-5 rounded-full bg-red-500 cursor-pointer"></span>
			</div>
			<div className="flex justify-between items-center">
				<p>{product.price}</p>
				<Image
					imageURL={product.imageURL}
					alt={"product-name"}
					className="w-10 h-10 rounded-full object-bottom"
				/>
			</div>
			<div className="flex space-x-2 mt-5 justify-between items-center">
				<Button
					width="w-full"
					onClick={() => {
						console.log("clicked");
					}}
					className=" bg-indigo-700 "
				>
					Edit
				</Button>
				<Button width="w-full" className=" bg-red-700">
					Delete
				</Button>
			</div>
		</div>
	);
};

export default ProductCards;
