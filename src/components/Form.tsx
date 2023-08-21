import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { schema, Schema } from '../schema/schema';
import { Input } from './Input';
import { Select } from './Select';
import { Check } from './Check';
import { Radio } from './Radio';
import { area, reply } from '../data/data';
import { Textarea } from './Textarea';

export function Form() {
  const methods = useForm<Schema>({
    resolver: zodResolver(schema)
  });
  const onSubmit: SubmitHandler<Schema> = (data) => console.log(data);

  console.log(methods.watch('name'));
  console.log(methods.formState.errors);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <h2>お名前</h2>
        <Input name="name" />
        <h2>メールアドレス</h2>
        <Input name="email" />
        <h2>メールアドレス（確認）</h2>
        <Input name="emailConfirm" />
        <h2>お住まいの地域</h2>
        <Select name="area" items={area} />
        <h2>返信の有無</h2>
        <Radio name="reply" items={reply} />
        <h2>利用規約</h2>
        <Check name="terms" label="同意する" />
        <h2>メッセージ</h2>
        <Textarea name="message" />
        <input className="button" type="submit" />
      </form>
    </FormProvider>
  );
}
