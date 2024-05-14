import ProductCards from "./components/ProductCards";
import { productList } from "./assets/data";
import Modal from "./components/ui/Modal";
import { useState } from "react";
import Button from "./components/ui/Button";

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
	return (
		<main className="container">
			<Button onClick={open} className="bg-indigo-700">
				{" "}
				Add
			</Button>

			<div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3  gap-2 md:gap-4 p-2 rounded-md m-5 xl:grid-cols-4 ">
				{renderProductList}
			</div>
			<Modal isOpen={isOpen} close={close} title="Add new product">
				<div className="flex items-center space-x-3">
					<Button className="bg-indigo-700"> cancel</Button>
					<Button className=" bg-gray-700"> submit</Button>
				</div>
			</Modal>
		</main>
	);
}

export default App;
