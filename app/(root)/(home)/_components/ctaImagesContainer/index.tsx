import CtaImage from './ctaImage';

export const CtaImagesContainer = () => {
	return (
		<section className="w-full min-h-fit">
			<div className=" flex flex-wrap md:grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-4 h-fit md:h-[500px] lg:h-[750px]">
				<CtaImage
					imageSrc="/images/exquisite_cta.png"
					actionText="Browse"
					heading="Female Accessories"
					description="Explore our range of accessory products"
					className="h-72 md:h-full row-span-2"
				/>
				<CtaImage
					imageSrc="/images/exquisite_cta2.png"
					actionText="Take a look"
					heading="As a gift"
					description="Treat yourself, or somebody else"
				/>
				<CtaImage
					imageSrc="/images/exquisite_cta3.png"
					actionText="Shop Now"
					heading="Engagement Rings"
					description="For a special someone"
					className="h-72 md:h-full col-start-2 row-start-2"
				/>
			</div>
		</section>
	);
};
