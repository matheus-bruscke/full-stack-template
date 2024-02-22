import { PrismaClient } from '@prisma/client'
import { Elysia, t } from 'elysia'

const db = new PrismaClient()

export const todos = new Elysia({ prefix: '/todos' })
	.model({
		todo: t.Object({
			title: t.String(),
			description: t.String({ default: '' }),
			completed: t.Boolean({ default: false }),
		}),
	})
	.get('/', async () => await db.todo.findMany())
	.post(
		'/',
		async (ctx) =>
			await db.todo.create({
				data: ctx.body,
			}),
		{
			body: 'todo',
		},
	)
	.patch(
		'/:id',
		async (ctx) =>
			await db.todo.update({
				where: {
					id: Number(ctx.params.id),
				},
				data: ctx.body,
			}),
		{
			body: 'todo',
		},
	)
	.delete(
		'/:id',
		async (ctx) =>
			await db.todo.delete({
				where: {
					id: Number(ctx.params.id),
				},
			}),
	)
