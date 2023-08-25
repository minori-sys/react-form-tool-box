import { useFormContext } from 'react-hook-form';
import { ErrorMessage } from './ErrorMessage';
import '../assets/Radio.scss';

type RadioItem = {
  label: string;
  value: string | number;
};

type Props = {
  name: string;
  items: Array<RadioItem>;
};

export function Radio({ name, items }: Props) {
  const { register } = useFormContext();
  return (
    <fieldset className="radio">
      {items.map((item) => (
        <label key={item.label}>
          <input
            {...register(name, { required: true })}
            type="radio"
            value={item.value}
          />
          {item.label}
        </label>
      ))}
      <ErrorMessage name={name} />
    </fieldset>
  );
}
