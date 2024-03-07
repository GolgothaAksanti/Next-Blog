import { ChangeEvent } from "react";

type Props = {
  className?: string;
  placeholder?: string;
  disabled?: boolean;
  value?: string;
  checked?: boolean;
  id?: string;
  inputType?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({
  inputType,
  placeholder,
  value,
  onChange,
  className = "",
  disabled,
  id,
  checked,
}: Props) => {
  return (
    <label>
      <input
        className={className}
        placeholder={placeholder}
        type={inputType}
        value={value}
        disabled={disabled}
        onChange={onChange}
        id={id}
        checked={checked}
      />
    </label>
  );
};

export default Input;
