import { promises as fs } from 'fs';

import Brands from './_components/brands';
import { CtaImagesContainer } from './_components/ctaImagesContainer';

import { prismadb } from '@/lib/db';
import { getAllProductsWithImages } from '@/actions/get-products';

const HomePage = async () => {
	const products = await getAllProductsWithImages();

	const data = await fs.readFile(process.cwd() + '/data.json', 'utf8');
	const dataParsed = JSON.parse(data);
	return (
		<main className="flex w-full flex-col items-center justify-between">
			<CtaImagesContainer />
			<Brands brands={dataParsed.brands} />
			<ProductCard data={products} />
		</main>
	);
};

export default HomePage;
