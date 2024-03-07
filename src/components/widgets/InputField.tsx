import React from "react";

type IInputField = {
  id?: string;
  title?: string;
  placeholder?: string;
  value?: string | number;
  defaultValue?: string | number;
  className?: string;
  required?: boolean;
  autoFocus?: boolean;
  onClick?: () => void;
  type?:
    | "email"
    | "tel"
    | "text"
    | "number"
    | "address"
    | "date"
    | "password"
    | "radio";
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputField = ({
  id,
  title,
  value,
  placeholder,
  defaultValue,
  type = "text",
  autoFocus = false,
  className,
  required,
  onChange,
  onClick,
}: IInputField): JSX.Element => {
  return (
    <div className="text-xs flex items-center">
      <label htmlFor={id} className="block mb-2 font-medium text-gray-900">
        {title} {required ? <span className="text-danger">*</span> : null}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        required={required}
        autoFocus={autoFocus}
        defaultValue={defaultValue}
        placeholder={placeholder || title}
        onChange={onChange}
        onClick={onClick}
        className={`border bg-gray-200 border-gray-300 text-gray-900 text-sm rounded-md placeholder:text-xs focus:ring-0 focus:outline-none w-full ${className}`}
      />
    </div>
  );
};

export default InputField;
