import Image from "./Image";
import { Iproduct } from "../assets/interfaces";
import Button from "./ui/Button";
import { textSlicer } from "../assets/utils/functions";
import CircleColor from "./CircleColor";

interface Iprops {
	product: Iproduct;
	setProductToEdit: (product: Iproduct) => void;
	openEdit: () => void;
	setProductToEditIdx: (value: number) => void;
	idx: number;
	openConfirmModal: () => void;
}

const ProductCards = ({
	product,
	setProductToEdit,
	openEdit,
	setProductToEditIdx,
	idx,
	openConfirmModal,
}: Iprops) => {
	const { title, description, imageURL, colors, price, category } = product;
	// renders
	const renderColors = colors.map((color) => (
		<CircleColor key={color} color={color} />
	));
	// handlers
	const onEdit = () => {
		setProductToEdit(product);
		openEdit();
		setProductToEditIdx(idx);
	};
	const OnRemove = () => {
		setProductToEdit(product);

		openConfirmModal();
	};

	return (
		<div className="border border-md p-2 flex flex-col max-w-sm md:max-w-lg mx-auto md:mx-0 space-y-3">
			<Image
				imageURL={imageURL}
				alt={"product-name"}
				className="rounded-md mb-2 h-52 lg:object-cover w-full"
			/>
			<h3 className="text-lg font-semibold">{title}</h3>
			<p className="text-xs text-gray-500 break-words">
				{textSlicer(description)}
			</p>
			<div className="flex items-center space-x-1 flex-wrap ">
				{renderColors}
			</div>

			<div className="flex justify-between items-center">
				<span className="text-lg text-indigo-600 font-semibold">{price}</span>
				<Image
					imageURL={product.category.imageURL}
					alt={category.name}
					className="w-10 h-10 rounded-full object-bottom"
				/>
			</div>
			<div className="flex space-x-2  justify-between items-center">
				<Button width="w-full" onClick={onEdit} className=" bg-indigo-700 ">
					Edit
				</Button>
				<Button width="w-full" className=" bg-red-700" onClick={OnRemove}>
					Destroy
				</Button>
			</div>
		</div>
	);
};

export default ProductCards;
