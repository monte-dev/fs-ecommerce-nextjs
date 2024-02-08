import { promises as fs } from 'fs';
import { cn } from '@/lib/utils';

import Links from './links';
import Logo from './logo';
import Menu from './menu';

interface NavbarProps {
	className?: string;
}
const Navbar = async ({ className }: NavbarProps) => {
	const data = await fs.readFile(process.cwd() + '/data.json', 'utf8');
	const links = JSON.parse(data);
	return (
		<div
			className={cn(
				'fixed top-0 w-full  h-28 p-2 flex items-center justify-between border-b-2 border-b-slate-200',
				className
			)}
		>
			<Logo size={'lg'} withText />
			<Links navigation={links.navigation} />
			<Menu />
		</div>
	);
};
export default Navbar;
