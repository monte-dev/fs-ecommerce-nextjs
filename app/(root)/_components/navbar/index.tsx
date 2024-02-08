import Logo from './logo';

const Navbar = () => {
	return (
		<div className="border-2 border-black fixed top-0 w-full h-28 p-2 flex items-center justify-between">
			{/* <NavbarInfo /> */}
			<Logo size={'lg'} withText />
			{/* <NavbarMenu /> */}
		</div>
	);
};
export default Navbar;
