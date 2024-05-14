import ProductCards from "./components/ProductCards";
import { formInputsList, productList } from "./assets/data";
import Modal from "./components/ui/Modal";
import { ChangeEvent, FormEvent, useState } from "react";
import Button from "./components/ui/Button";
import Inputs from "./components/ui/Inputs";
import { Iproduct } from "./assets/interfaces";
import { productValidation } from "./validation";
import ErrorMsg from "./components/ErrorMsg";

function App() {
	const defaultProductValue = {
		title: "",
		description: "",
		imageURL: "",
		price: "",
		color: [],
		category: {
			name: "",
			iamgeURL: "",
		},
	};
	// state
	const [product, setProduct] = useState<Iproduct>(defaultProductValue);
	const [isOpen, setIsOpen] = useState(false);
	const [errors, setErrors] = useState({
		title: "",
		description: "",
		imageURL: "",
		price: "",
	});
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

		// throw new Error("function not impemented");
	};
	const onCancel = () => {
		setIsOpen(false);
		setProduct(defaultProductValue);
	};

	// render
	const renderProductList = productList.map((product) => (
		<ProductCards key={product.id} product={product} />
	));
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
			/>
			<ErrorMsg msg={errors[input.name]} />
		</div>
	));
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
