import Navbar from './_components/navbar';

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<Navbar className="absolute left-1/2 transform -translate-x-1/2 max-w-[1600px]" />
			<div className="flex h-full justify-center border-2 border-blue-500 mt-28 absolute left-1/2 transform -translate-x-1/2 w-full max-w-[1600px]">
				{children}
			</div>
		</>
	);
};

export default HomeLayout;
