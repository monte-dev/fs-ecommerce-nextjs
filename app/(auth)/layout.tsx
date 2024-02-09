import { ReactNode } from 'react';
import Navbar from '../(root)/_components/navbar';
import Logo from '../(root)/_components/navbar/logo';

const AuthLayout = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<div className="h-full flex flex-col items-center justify-center space-y-8">
				<div className="mt-20">
					<Logo withText />
				</div>
				{children}
			</div>
		</>
	);
};
export default AuthLayout;
