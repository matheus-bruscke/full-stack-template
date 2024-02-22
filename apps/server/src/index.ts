import { Elysia } from 'elysia'
import { todos } from './routes/todos'

export const v1 = new Elysia().group('/v1', (v1) => v1.use(todos))

const app = new Elysia().use(v1).listen(3333)

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`)
