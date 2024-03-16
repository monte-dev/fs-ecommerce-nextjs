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
		<section className="py-8 mx-16 border-y-2 my-2">
			<Carousel
				opts={{
					loop: true,
				}}
			>
				<CarouselContent>
					{brands.map((brand) => (
						<CarouselItem
							className="basis-1/2 md:basis-1/3 flex items-center justify-center w-[120px] h-[160px] relative mx-4"
							key={brand.key}
						>
							<Image
								src={brand.src}
								alt={brand.name}
								fill
								sizes="400"
								className="object-fill w-[120px] px-4 py-8"
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
