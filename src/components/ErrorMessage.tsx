import { useFormContext } from 'react-hook-form';
import { ErrorMessage as RenderErrorMessage } from '@hookform/error-message';

type Props = {
  name: string;
};

export default function ErrorMessage({ name }: Props) {
  const {
    formState: { errors }
  } = useFormContext();
  return (
    <RenderErrorMessage
      errors={errors}
      name={name}
      render={({ message }) => <p>{message}</p>}
    />
  );
}
