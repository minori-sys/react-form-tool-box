import { useFormContext } from 'react-hook-form';
import ErrorMessage from './ErrorMessage';
import '../assets/Input.scss';

type Props = {
  name: string;
  placeholder?: string;
};

export default function Input({ name, placeholder }: Props) {
  const { register } = useFormContext();
  return (
    <>
      <input
        {...register(name)}
        className="input"
        placeholder={placeholder || ''}
      />
      <ErrorMessage name={name} />
    </>
  );
}
