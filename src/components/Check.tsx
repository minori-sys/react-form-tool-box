import { useFormContext } from 'react-hook-form';
import ErrorMessage from './ErrorMessage';
import '../assets/Check.scss';

type Props = {
  name: string;
  label: string;
};

export function Check({ name, label }: Props) {
  const { register } = useFormContext();
  return (
    <>
      <div className="checkbox">
        <label>
          <input
            type="checkbox"
            className="checkbox"
            id={name}
            {...register(name)}
          />
          {label}
        </label>
      </div>
      <ErrorMessage name={name} />
    </>
  );
}
