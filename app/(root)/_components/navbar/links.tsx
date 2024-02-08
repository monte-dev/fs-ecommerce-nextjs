'use client';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Separator } from '@/components/ui/separator';

interface LinksProps {
	navigation: {
		label: string;
		subLinks: string[];
	}[];
}

const Links = ({ navigation }: LinksProps) => {
	const pathname = usePathname();

	return (
		<NavigationMenu className="flex-2 hidden md:flex">
			<NavigationMenuList className="flex items-center justify-center">
				{navigation.map((link) => (
					<NavigationMenuItem key={link.label} className="relative">
						<NavigationMenuTrigger className="tracking-wider text-[1rem] lg:text-lg  lg:gap-x-4">
							{link.label}
						</NavigationMenuTrigger>
						<NavigationMenuContent>
							{link.subLinks && (
								<NavigationMenuList className="w-[550px] h-20 px-4 gap-x-4 flex z-50">
									{link.subLinks.map((link) => (
										<NavigationMenuItem key={link}>
											<NavigationMenuLink
												href={`/${link}`}
												className={cn(
													'text-lg font-medium hover:underline underline-offset-4 transition-colors hover:text-black',
													pathname === `/${link}`
														? 'text-black'
														: 'text-neutral-500'
												)}
											>
												{link}
											</NavigationMenuLink>
										</NavigationMenuItem>
									))}
								</NavigationMenuList>
							)}
							<Separator />
							{/*TODO: show this category's sample products */}
							<div className="px-4 py-8">product card</div>
						</NavigationMenuContent>
					</NavigationMenuItem>
				))}
			</NavigationMenuList>
		</NavigationMenu>
	);
};

export default Links;
