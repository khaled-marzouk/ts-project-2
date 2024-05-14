import ProductCards from "./components/ProductCards";
import { formInputsList, productList } from "./assets/data";
import Modal from "./components/ui/Modal";
import { useState } from "react";
import Button from "./components/ui/Button";
import Inputs from "./components/ui/Inputs";

function App() {
	// state
	const [isOpen, setIsOpen] = useState(false);
	// handler
	function open() {
		setIsOpen(true);
	}

	function close() {
		setIsOpen(false);
	}

	// render
	const renderProductList = productList.map((product) => (
		<ProductCards key={product.id} product={product} />
	));
	const renderIputs = formInputsList.map((input) => (
		<div className="flex flex-col">
			<label
				className="mb-[1px] text-sm font-medium text-gray-700"
				htmlFor={input.id}
			>
				{input.label}
			</label>
			<Inputs type="text" name={input.name} id={input.id} />
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
				<div className="space-y-3">
					{renderIputs}

					<div className="flex items-center space-x-3">
						<Button className="bg-indigo-700 hover:bg-indigo-800">
							{" "}
							cancel
						</Button>
						<Button className=" bg-gray-400 hover:bg-gray-500"> submit</Button>
					</div>
				</div>
			</Modal>
		</main>
	);
}

export default App;
