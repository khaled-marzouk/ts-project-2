export const productValidation = (product: {
	title: string; description: string; imageURL: string; price: string;
}) => {
	const errors: {
		title: string; description: string; imageURL: string; price: string;
	} = {
		title: "", description: "", imageURL: "", price: "",
	};
	if (
		!product.title.trim() || product.title.length < 10 || product.title.length > 50
	) {
		errors.title = "Product title must be between 10 and 50 chracters";
	}
	if (!product.description.trim() || product.description.length < 10 || product.description.length > 900) {
		errors.description = "description must be between 10 and 900 chracters"
	}

	const validurl = /^(ftp|http|https):\/\/[^"]+$/.test(product.imageURL)
	if (!product.imageURL.trim() || !validurl) {
		errors.imageURL = "please enter valid image url"
	}
	if (!product.price.trim() || isNaN(Number(product.price)) || !Number.isInteger(Number(product.price)) || !/^\d+$/.test(product.price)) {
		errors.price = "please enter a number "
	}

	return errors
};
