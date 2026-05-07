import { memo } from 'react';
import { Controller, Control, FieldValues, Path } from 'react-hook-form';
import { SelectInput, SelectInputProps } from '@/components/select-input';

interface FormSelectInputProps<T extends FieldValues> extends Omit<
  SelectInputProps,
  'value' | 'onValueChange' | 'error'
> {
  control: Control<T>;
  name: Path<T>;
  onValueChange?: (value: string) => void;
}

const FormSelectInputComponent = <T extends FieldValues>({
  control,
  name,
  onValueChange: externalOnChange,
  ...selectProps
}: FormSelectInputProps<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <SelectInput
          {...selectProps}
          value={value}
          onValueChange={(val) => {
            if (externalOnChange) {
              externalOnChange(val);
            } else {
              onChange(val);
            }
          }}
          error={error?.message}
        />
      )}
    />
  );
};

export const FormSelectInput = memo(
  FormSelectInputComponent,
) as typeof FormSelectInputComponent;
