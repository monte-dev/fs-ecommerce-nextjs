import { promises as fs } from 'fs';

import Brands from './_components/brands';
import { CtaImagesContainer } from './_components/ctaImagesContainer';

const HomePage = async () => {
	const data = await fs.readFile(process.cwd() + '/data.json', 'utf8');
	const dataParsed = JSON.parse(data);
	return (
		<main className="flex w-full flex-col items-center justify-between">
			<CtaImagesContainer />
			<Brands brands={dataParsed.brands} />
		</main>
	);
};

export default HomePage;
