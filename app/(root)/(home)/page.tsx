import { promises as fs } from 'fs';

import Brands from './_components/brands';
import { CtaImagesContainer } from './_components/ctaImagesContainer';
import ProductCard from '@/components/ui/product-card';
import { getAllProductsWithImages } from '@/actions/get-products';

const HomePage = async () => {
	const products = await getAllProductsWithImages();

	const data = await fs.readFile(process.cwd() + '/data.json', 'utf8');
	const dataParsed = JSON.parse(data);
	return (
		<main className="flex w-full flex-col items-center justify-between">
			<CtaImagesContainer />
			<Brands brands={dataParsed.brands} />
			<div className="flex gap-x-2 gap-y-4 py-8 lg:py-12 flex-wrap justify-center">
				{products.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
		</main>
	);
};

export default HomePage;
