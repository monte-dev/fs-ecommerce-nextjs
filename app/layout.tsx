import type { Metadata } from 'next';
import { Teko } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { cn } from '@/lib/utils';

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
			<body className={cn('', font.className)}>
				<ThemeProvider
					attribute="class"
					defaultTheme="light"
					storageKey="exquisiteThemeKey"
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
