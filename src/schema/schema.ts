import * as z from 'zod';

export const schema = z
  .object({
    name: z.string().nonempty('名前を入力してください'),
    email: z
      .string()
      .nonempty('メールアドレスを入力してください')
      .email('正しいメールアドレスを入力してください'),
    emailConfirm: z
      .string()
      .nonempty('メールアドレスを入力してください')
      .email('正しいメールアドレスを入力してください'),
    area: z
      .string()
      .min(1, 'お住まいの地域を選択してください')
      .transform((v) => Number(v)),
    reply: z.enum(['yes', 'no'], {
      errorMap: () => ({ message: '返信について選択してください' })
    }),
    message: z.string().nonempty('メッセージを入力してください')
  })
  .superRefine(({ email, emailConfirm }, ctx) => {
    if (email !== emailConfirm) {
      ctx.addIssue({
        path: ['emailConfirm'],
        code: 'custom',
        message: 'メールアドレスが一致していません'
      });
    }
  });

export type Schema = z.infer<typeof schema>;
