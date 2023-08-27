import { useFormContext } from 'react-hook-form';
import { ErrorMessage } from './ErrorMessage';
import '../assets/Check.scss';

type CheckItem = {
  label: string;
  value: string | number;
};

type Props = {
  name: string;
  items: Array<CheckItem>;
};

export function Check({ name, items }: Props) {
  const { register } = useFormContext();
  return (
    <>
      <div className="checkbox">
        {items.map((item) => (
          <label key={item.label}>
            <input
              type="checkbox"
              id={name}
              className="checkbox"
              {...register(name)}
              value={item.value}
            />
            {item.label}
          </label>
        ))}
      </div>
      <ErrorMessage name={name} />
    </>
  );
}
