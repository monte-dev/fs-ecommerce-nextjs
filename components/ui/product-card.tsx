'use client';
import React, { MouseEventHandler, useState } from 'react';
import { Product } from '@prisma/client';
import { AiOutlineArrowsAlt, AiOutlineShoppingCart } from 'react-icons/ai';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from './card';
import Image from 'next/image';
import { Button } from './button';

interface ProductCardProps {
	product: ProductWithImages;
}

interface ProductWithImages extends Product {
	images: { url: string }[];
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
	const [imageHovered, setImageHovered] = useState(false);

	return (
		<Card className="w-48 flex flex-col justify-between rounded-none border  shadow-md transition cursor-pointer">
			<CardContent
				className="h-[200px] p-0 my-2 m-auto w-full border-none relative overflow-hidden group"
				onMouseEnter={() => setImageHovered(true)}
				onMouseLeave={() => setImageHovered(false)}
			>
				{imageHovered
					? product.images
							.slice(1, 2)
							.map((image, index) => (
								<Image
									fill
									sizes={'200'}
									className="aspect-square object-cover rounded-md"
									key={index}
									src={`/images/products/${image.url}`}
									alt={`Product ${index + 1}`}
								/>
							))
					: product.images
							.slice(0, 1)
							.map((image, index) => (
								<Image
									fill
									sizes={'200'}
									className="aspect-square object-cover rounded-md"
									key={index}
									src={`/images/products/${image.url}`}
									alt={`${product.name}`}
								/>
							))}
				<div className="opacity-0 group-hover:opacity-100 absolute  px-5 top-5 right-0 text-right">
					<div className="flex flex-col gap-y-6 justify-center">
						<Button
							variant={'outline'}
							className="bg-gray-100 px-3 rounded-full hover:bg-gray-300"
wd						>
							<AiOutlineArrowsAlt />
						</Button>
						<Button
							variant={'outline'}
							className="bg-gray-100 px-3 rounded-full hover:bg-gray-300"
						>
							<AiOutlineShoppingCart />
						</Button>
					</div>
				</div>
			</CardContent>

			<CardHeader className="border-none text-center px-1 py-2 h-[100px] grid  place-content-between justify-center bg-gray-100">
				<CardTitle className="text-lg font-normal tracking-wide px-1 w-full">
					{product.name}
				</CardTitle>
				<CardDescription className="text-xl font-semibold">{`$${product.price}`}</CardDescription>
			</CardHeader>
		</Card>
	);
};

export default ProductCard;
