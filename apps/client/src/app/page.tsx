import { Button } from '@acme/components/react'

export default async function Home() {
	const tasks = await fetch('http://localhost:3333/v1/todos').then((res) => res.json())

	return (
		<main className="flex min-h-screen flex-col items-center justify-center p-24 gap-10 px-24">
			<h1 className="font-bold text-2xl">Hello Full Stack App</h1>
			<Button variant="default">Button from Package</Button>
			<div className="p-6 border-border bg-foreground/10 flex flex-col items-center gap-4">
				<i>Request from localhost:3333/v1/todos</i>
				<code>{JSON.stringify(tasks, null, '\t')}</code>
			</div>
		</main>
	)
}
