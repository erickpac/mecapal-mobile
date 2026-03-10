import { memo } from 'react';
import { Controller, Control, FieldValues, Path } from 'react-hook-form';
import { Input, InputProps } from '@/components/input';

interface FormInputProps<T extends FieldValues>
  extends Omit<InputProps, 'value' | 'onChangeText' | 'error'> {
  control: Control<T>;
  name: Path<T>;
}

const FormInputComponent = <T extends FieldValues>({
  control,
  name,
  ...inputProps
}: FormInputProps<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value }, fieldState: { error, isDirty } }) => (
        <Input
          {...inputProps}
          value={value}
          onChangeText={onChange}
          onBlur={onBlur}
          dirty={isDirty}
          error={error?.message}
        />
      )}
    />
  );
};

export const FormInput = memo(FormInputComponent) as typeof FormInputComponent;
