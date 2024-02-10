import { prismadb } from '@/lib/db';

export const getAllProductsWithImages = async () => {
	const products = await prismadb.product.findMany({
		include: {
			images: {
				select: {
					url: true,
				},
			},
		},
	});
	return products;
};
