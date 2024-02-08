import fastify from "fastify"
import { z } from "zod"

const app = fastify()

app.post('/polls', (request) => {
  const createPollBody = z.object({
    title: z.string()
  })

  const { title } = createPollBody.parse(request.body)

  console.log(title)

  return 'Hello'
})

app.listen({ port: 3333 }).then(() => {
  console.log('HTTP server running!')
})
