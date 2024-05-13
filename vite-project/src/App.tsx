import ProductCards from "./components/ProductCards";
import { productList } from "./assets/data";

function App() {
	// render
	const renderProductList = productList.map((product) => (
		<ProductCards key={product.id} product={product} />
	));
	return (
		<div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3  gap-2 p-2 rounded-md m-5 ">
			{renderProductList}
		</div>
	);
}

export default App;
