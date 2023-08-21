import React from 'react';
import { useFormContext } from 'react-hook-form';
import ErrorMessage from './ErrorMessage';
import '../assets/Select.scss';

type SelectItem = {
  label: string;
  value: string | number;
};

type Props = {
  name: string;
  items: Array<SelectItem>;
} & React.ComponentProps<'select'>;

export function Select({ name, items }: Props) {
  const { register } = useFormContext();
  return (
    <>
      <div className="select">
        <select {...register(name)}>
          {items.map((item) => (
            <option key={item.label} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </div>
      <ErrorMessage name={name} />
    </>
  );
}
