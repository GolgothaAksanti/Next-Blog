import { ChangeEvent } from "react";

type Props = {
  onClick?: () => void,
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
  onClick = () => {}
}: Props) => {
  return (
    <label>
      <input
        className={`w-full outline-none ${className}`}
        placeholder={placeholder}
        type={inputType}
        value={value}
        disabled={disabled}
        onChange={onChange}
        id={id}
        checked={checked}
        onClick={onClick}
      />
    </label>
  );
};

export default Input;
