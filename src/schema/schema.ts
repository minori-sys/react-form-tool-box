import * as z from 'zod';
import { errorMessage } from '../data/errorMessage.ts';

export const schema = z
  .object({
    name: z.string().nonempty(errorMessage.name_empty),
    email: z
      .string()
      .nonempty(errorMessage.email_empty)
      .email(errorMessage.email_check),
    emailConfirm: z
      .string()
      .nonempty(errorMessage.email_empty)
      .email(errorMessage.email_check),
    area: z
      .string()
      .min(1, errorMessage.area_empty)
      .transform((v) => Number(v)),
    sns: z.string().array().nonempty(errorMessage.sns_empty),
    reply: z.enum(['yes', 'no'], {
      errorMap: () => ({ message: errorMessage.reply_empty })
    }),
    message: z.string().nonempty(errorMessage.message_empty)
  })
  .superRefine(({ email, emailConfirm }, ctx) => {
    if (email !== emailConfirm) {
      ctx.addIssue({
        path: ['emailConfirm'],
        code: 'custom',
        message: errorMessage.email_confirm
      });
    }
  });

export type Schema = z.infer<typeof schema>;
