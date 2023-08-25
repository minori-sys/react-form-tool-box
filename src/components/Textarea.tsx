import { useFormContext } from 'react-hook-form';
import { ErrorMessage } from './ErrorMessage';
import '../assets/Textarea.scss';

type Props = {
  name: string;
  placeholder?: string;
};

export function Textarea({ name, placeholder }: Props) {
  const { register } = useFormContext();
  return (
    <>
      <textarea
        className="textarea"
        {...register(name)}
        placeholder={placeholder || ''}
      ></textarea>
      <ErrorMessage name={name} />
    </>
  );
}
