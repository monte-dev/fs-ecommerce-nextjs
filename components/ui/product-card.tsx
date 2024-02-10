'use client';
import React from 'react';
import { Product } from '@prisma/client';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from './card';

interface ProductCardProps {
	product: ProductWithImages;
}

interface ProductWithImages extends Product {
	images: { url: string }[];
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
	return (
		<Card className="w-48 flex flex-col justify-between rounded-none border hover:scale-105 shadow-md transition cursor-pointer">
			<CardContent className="h-[200px] p-0 my-2  m-auto w-full border-none">
				{product.images.slice(0, 1).map((image, index) => (
					<img
						className="w-full h-full object-center object-fill border-none hover:shadow-sm"
						key={index}
						src={`images/products/${image.url}`}
						alt={`Product ${index + 1}`}
					/>
				))}
			</CardContent>
			<CardHeader className="border-none text-center px-1 py-4 h-[120px] grid  place-content-between justify-center">
				<CardTitle className="text-lg font-normal tracking-wide px-1 w-full">
					{product.name}
				</CardTitle>
				<CardDescription className="text-xl font-semibold">{`$${product.price}`}</CardDescription>
			</CardHeader>
		</Card>
	);
};

export default ProductCard;
