import type { Metadata } from 'next';
import { Teko } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { cn } from '@/lib/utils';
import { ClerkProvider } from '@clerk/nextjs';
import Navbar from './(root)/_components/navbar';

const font = Teko({
	weight: ['300', '400', '500', '600', '700'],
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Exquisite',
	description: 'Elevate Your Elegance',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<ClerkProvider>
			<html lang="en">
				<body className={cn('', font.className)}>
					<Navbar className="z-50 absolute left-1/2 transform -translate-x-1/2 max-w-[1600px]" />
					<ThemeProvider
						attribute="class"
						defaultTheme="light"
						storageKey="exquisiteThemeKey"
					>
						{children}
					</ThemeProvider>
				</body>
			</html>
		</ClerkProvider>
	);
}
