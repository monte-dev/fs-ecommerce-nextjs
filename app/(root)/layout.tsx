import Navbar from './_components/navbar';

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<Navbar />
			<div className="flex h-full justify-center">{children}</div>
		</>
	);
};

export default HomeLayout;
