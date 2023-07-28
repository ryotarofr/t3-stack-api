// pages/api/trpc/[trpc].ts

// import { z } from "zod";

// import { createTRPCRouter, publicProcedure } from "../trpc";

// const router = createTRPCRouter({
//   AssesmentFeed: publicProcedure.query(
//     async () => {
//       const toggleValue = await prisma.toggle.findFirst({
//         select: { value: true },
//       });
//       return toggleValue?.value || false;
//     },
//   )
// })
  
// create: publicProcedure
// .input(z.object({
//   question: z.string(),
//   optionA: z.boolean(),
//   optionB: z.boolean(),
//   optionC: z.boolean(),
//   optionD: z.boolean(),
//   tweetId: z.string()
// }))
// .mutation(async ({ input: { question, optionA, optionB, optionC, optionD, tweetId }, ctx }) => {
//   const assessment = await ctx.prisma.assessment.create({
//     data: { question, optionA, optionB, optionC, optionD, tweetId, userId: ctx.session.user.id },
//   });
 


// export default router;
