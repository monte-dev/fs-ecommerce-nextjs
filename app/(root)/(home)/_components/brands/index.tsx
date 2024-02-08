import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';

interface BrandsProps {
	brands: {
		key: string;
		name: string;
		src: string;
	}[];
}

const Brands = ({ brands }: BrandsProps) => {
	return (
		<section className="py-8 mx-16">
			<Carousel
				opts={{
					loop: true,
				}}
			>
				<CarouselContent>
					{brands.map((brand) => (
						<CarouselItem
							className="basis-1/2 md:basis-1/3 flex items-center justify-center"
							key={brand.key}
						>
							<Image
								src={brand.src}
								alt={brand.name}
								width={200}
								height={120}
							/>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</section>
	);
};
export default Brands;
