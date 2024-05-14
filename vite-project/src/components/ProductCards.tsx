import Image from "./Image";
import { Iproduct } from "../assets/interfaces";
import Button from "./ui/Button";
import { textSlicer } from "../assets/utils/functions";

interface Iprops {
	product: Iproduct;
}

const ProductCards = ({ product }: Iprops) => {
	return (
		<div className="border border-md p-2 flex flex-col max-w-sm md:max-w-lg mx-auto md:mx-0 space-y-3">
			<Image
				imageURL={product.imageURL}
				alt={"product-name"}
				className="rounded-md mb-2 h-52 lg:object-cover w-full"
			/>
			<h3 className="text-lg font-semibold">{product.title}</h3>
			<p className="text-xs text-gray-500 break-words">
				{textSlicer(product.description)}
			</p>
			<div className="flex items-center space-x-2 my-4">
				<span className="w-5 h-5 rounded-full bg-red-500 cursor-pointer"></span>
				<span className="w-5 h-5 rounded-full bg-red-500 cursor-pointer"></span>
				<span className="w-5 h-5 rounded-full bg-red-500 cursor-pointer"></span>
			</div>
			<div className="flex justify-between items-center">
				<span className="text-lg text-indigo-600 font-semibold">
					{product.price}
				</span>
				<Image
					imageURL={product.category.iamgeURL}
					alt={product.category.name}
					className="w-10 h-10 rounded-full object-bottom"
				/>
			</div>
			<div className="flex space-x-2  justify-between items-center">
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
					Destroy
				</Button>
			</div>
		</div>
	);
};

export default ProductCards;
