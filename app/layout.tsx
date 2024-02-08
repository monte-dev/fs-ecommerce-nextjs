import type { Metadata } from 'next';
import { Teko } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';

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
		<html lang="en">
			<body className={font.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					storageKey="exquisiteThemeKey"
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
