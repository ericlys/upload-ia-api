import { FastifyInstance } from "fastify";
import { z } from "zod";

export async function createTranscriptionRoute(app: FastifyInstance){
  app.get('/videos/:videoId/transcription', async (request, reply) => {
    const paramsSchema = z.object({
      videoId: z.string().uuid(),
    })

   const { videoId } = paramsSchema.parse(request.params)

   const bodySchema = z.object({
    prompt: z.string(),
   })

   const {prompt} = bodySchema.parse(request.body)

   return {
    videoId,
    prompt,
   }
  })
}