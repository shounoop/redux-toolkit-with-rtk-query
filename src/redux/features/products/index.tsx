import { useGetProductsQuery } from '../../services/products/productApi';

const Products = () => {
	const { data, error, isLoading } = useGetProductsQuery();

	console.log({ data, error, isLoading });

	return <div>Products</div>;
};

export default Products;
