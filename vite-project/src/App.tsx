import ProductCards from "./components/ProductCards";
import { colors, formInputsList, productList } from "./assets/data";
import Modal from "./components/ui/Modal";
import { KeyboardEventHandler, ChangeEvent, FormEvent, useState } from "react";
import Button from "./components/ui/Button";
import Inputs from "./components/ui/Inputs";
import { Iproduct } from "./assets/interfaces";
import { productValidation } from "./validation";
import ErrorMsg from "./components/ErrorMsg";
import CircleColor from "./components/CircleColor";
import uuid from "react-uuid";

function App() {
	const defaultProductValue: Iproduct = {
		title: "",
		description: "",
		imageURL: "",
		price: "",
		colors: [],
		category: {
			name: "",
			imageURL: "",
		},
	};
	// state
	const [products, setProducts] = useState<Iproduct[]>(productList);
	const [tempColor, setTempColor] = useState<string[]>([]);
	console.log(tempColor);
	const [product, setProduct] = useState<Iproduct>(defaultProductValue);
	const [isOpen, setIsOpen] = useState(false);
	const [errors, setErrors] = useState({
		title: "",
		description: "",
		imageURL: "",
		price: "",
	});
	// #################################################################################

	// handler
	const open = () => {
		setIsOpen(true);
	};
	const close = () => {
		setIsOpen(false);
	};
	const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		const { value, name } = e.target;
		setProduct({
			...product,
			[name]: value,
		});
		setErrors({
			...errors,
			[name]: "",
		});
	};

	const keyUpHandler: KeyboardEventHandler<HTMLInputElement> = (e) => {
		const { name, value } = e.currentTarget;
		const fieldError = productValidation({
			...product,
			[name]: value,
		})[name as keyof typeof errors];

		setErrors((prevErrors) => ({
			...prevErrors,
			[name]: fieldError,
		}));
	};
	// ###################################################
	const submitHandler = (e: FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		const { title, description, imageURL, price } = product;
		const errors = productValidation({
			title,
			description,
			imageURL,
			price,
		});
		const hasError =
			Object.values(errors).some((value) => value === "") &&
			Object.values(errors).every((value) => value === "");
		if (!hasError) {
			setErrors(errors);
			return;
		}
		setProducts((prev) => [
			...prev,
			{ ...product, id: uuid(), colors: tempColor },
		]);
		setProduct(defaultProductValue);
		setTempColor([]);
		close();
	};
	// ##################################################################
	const onCancel = () => {
		close();
		setProduct(defaultProductValue);
		// resetForm();
	};
	// const resetForm = () => {
	// 	setProduct(defaultProductValue);
	// 	setErrors({
	// 		title: "",
	// 		description: "",
	// 		imageURL: "",
	// 		price: "",
	// 	});
	// };
	//####################################################################
	// render
	const renderProductList = products.map((product) => (
		<ProductCards key={product.id} product={product} />
	));
	//####################################################################
	const renderIputs = formInputsList.map((input) => (
		<div className="flex flex-col" key={input.id}>
			<label
				className="mb-[1px] text-sm font-medium text-gray-700"
				htmlFor={input.id}
			>
				{input.label}
			</label>
			<Inputs
				type="text"
				name={input.name}
				id={input.id}
				value={product[input.name]}
				onChange={changeHandler}
				onKeyUp={keyUpHandler}
			/>
			<ErrorMsg msg={errors[input.name as keyof typeof errors]} />
		</div>
	));
	//####################################################################
	const renderColors = colors.map((color) => (
		<CircleColor
			key={color}
			color={color}
			onClick={() => {
				if (tempColor.includes(color)) {
					setTempColor((prev) => prev.filter((item) => item !== color));
					return;
				}
				setTempColor((prev) => [...prev, color]);
			}}
		/>
	));
	//####################################################################
	return (
		<main className="container">
			<Button onClick={open} className="bg-indigo-700 hover:bg-indigo-800">
				{" "}
				Add
			</Button>

			<div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3  gap-2 md:gap-4 p-2 rounded-md m-5 xl:grid-cols-4 ">
				{renderProductList}
			</div>
			<Modal isOpen={isOpen} close={close} title="Add new product">
				<form onSubmit={submitHandler} className="space-y-3">
					{renderIputs}
					<div className="flex items-center space-x-1 flex-wrap ">
						{renderColors}
					</div>
					<div className="flex items-center space-x-1 flex-wrap ">
						{tempColor.map((color) => (
							<span
								className="p-1 mr-1 mb-1 text-xs rounded-md text-white"
								style={{ backgroundColor: color }}
								key={color}
							>
								{color}
							</span>
						))}
					</div>

					<div className="flex items-center space-x-3">
						<Button className=" bg-gray-400 hover:bg-gray-500"> submit</Button>
						<Button
							onClick={onCancel}
							className="bg-indigo-700 hover:bg-indigo-800"
						>
							{" "}
							cancel
						</Button>
					</div>
				</form>
			</Modal>
		</main>
	);
}

export default App;
