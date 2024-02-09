import { Button } from '@/components/ui/button';
import { SignInButton, UserButton, currentUser } from '@clerk/nextjs';
import Link from 'next/link';

import { LuShoppingCart, LuUser, LuHeart } from 'react-icons/lu';

const Menu = async () => {
	const user = await currentUser();

	return (
		<div className="flex flex-1 justify-end">
			{!user && (
				<div className="flex items-center gap-x-2">
					<SignInButton>
						<Button
							size={'icon'}
							variant={'ghost'}
							asChild
							className="text-muted-foreground hover:text-primary"
						>
							<Link href={''}>
								<LuUser className="h-5 w-5 " />
							</Link>
						</Button>
					</SignInButton>
					<Button
						size={'icon'}
						variant={'ghost'}
						asChild
						className="text-muted-foreground hover:text-primary"
					>
						<Link href={`/cart`}>
							<LuShoppingCart className="h-5 w-5 " />
						</Link>
					</Button>
				</div>
			)}
			{user && (
				<div className="flex items-center gap-x-2">
					<Button
						size={'icon'}
						variant={'ghost'}
						asChild
						className="text-muted-foreground hover:text-primary"
					>
						<Link href={`/wishlist`}>
							<LuHeart className="h-5 w-5" />
						</Link>
					</Button>
					<Button
						size={'icon'}
						variant={'ghost'}
						asChild
						className="text-muted-foreground hover:text-primary"
					>
						<Link href={`/cart`}>
							<LuShoppingCart className="h-5 w-5 " />
						</Link>
					</Button>
					<UserButton afterSignOutUrl="/" />
				</div>
			)}
		</div>
	);
};
export default Menu;
