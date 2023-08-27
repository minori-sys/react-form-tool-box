import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { schema, Schema } from '../schema/schema';
import { Input } from './Input';
import { Select } from './Select';
import { Check } from './Check';
import { Radio } from './Radio';
import { area, reply, sns } from '../data/data';
import { Textarea } from './Textarea';

export function Form() {
  const methods = useForm<Schema>({
    mode: 'onBlur',
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      emailConfirm: '',
      sns: [],
      reply: 'no',
      message: ''
    }
  });
  const onSubmit: SubmitHandler<Schema> = (data) => {
    alert(JSON.stringify(data));
    methods.reset();
  };

  console.log('methods', methods.formState.errors);

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
        <h2>利用SNS</h2>
        <Check name="sns" items={sns} />
        <h2>返信の有無</h2>
        <Radio name="reply" items={reply} />
        <h2>メッセージ</h2>
        <Textarea name="message" />
        <input className="button" type="submit" />
      </form>
    </FormProvider>
  );
}
