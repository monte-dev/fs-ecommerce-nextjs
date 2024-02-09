import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface CtaImageProps {
	imageSrc: string;
	actionText: string;
	heading: string;
	description: string;
	className?: string;
}
const CtaImage = ({
	imageSrc,
	actionText,
	heading,
	description,
	className,
}: CtaImageProps) => {
	return (
		<div className={cn('w-full h-full relative', className)}>
			<Image
				src={imageSrc}
				alt={heading}
				width={300}
				height={300}
				className="w-full h-full object-cover  object-center "
			/>
			<div className="absolute bottom-[2rem] right-[2rem] text-right text-white bg-black/10 p-2 rounded-lg">
				<p className="text-3xl lg:text-5xl  tracking-wide font-semibold">
					{heading}
				</p>
				<p className="text-xl lg:text-xl  tracking-widest">
					{description}
				</p>
				<Button
					size={'lg'}
					className="text-sm p-4 md:p-6 lg:px-8 lg:text-lg tracking-wider mt-4"
					variant={'default'}
				>
					{actionText}
				</Button>
			</div>
		</div>
	);
};
export default CtaImage;
