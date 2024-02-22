import '@acme/components/react/globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'

const bodySans = localFont({
	src: [
		{
			path: '../../../../packages/shared/src/fonts/helvetica-neue/thin.otf',
			weight: '300',
			style: 'normal',
		},
		{
			path: '../../../../packages/shared/src/fonts/helvetica-neue/regular.otf',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../../../../packages/shared/src/fonts/helvetica-neue/medium.otf',
			weight: '500',
			style: 'normal',
		},
		{
			path: '../../../../packages/shared/src/fonts/helvetica-neue/medium.otf',
			weight: '600',
			style: 'normal',
		},
		{
			path: '../../../../packages/shared/src/fonts/helvetica-neue/bold.otf',
			weight: '700',
			style: 'normal',
		},
	],
	variable: '--font-body',
})

export const metadata: Metadata = {
	title: 'Full Stack App',
	description: 'Hello full stack app.',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={bodySans.className}>{children}</body>
		</html>
	)
}
