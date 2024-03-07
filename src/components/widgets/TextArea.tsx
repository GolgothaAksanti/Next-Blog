import React from "react";

type ITextArea = {
  id?: string;
  title: string;
  placeholder?: string;
  value?: string;
  rows?: number;
  defaultValue?: string;
  className?: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const TextArea = ({
  id,
  title,
  value,
  rows = 8,
  required,
  className,
  placeholder,
  defaultValue,
  onChange,
}: ITextArea): JSX.Element => {
  return (
    <div className="text-xs">
      <label htmlFor={id} className="block mb-2 font-medium text-gray-900">
        {title} {required ? <span className="text-danger">*</span> : null}
      </label>
      <textarea
        id={id}
        rows={rows}
        value={value}
        required={required}
        onChange={onChange}
        defaultValue={defaultValue}
        placeholder={placeholder || title}
        className={`${className} bg-gray-50 resize-none border border-gray-300 text-gray-900 text-xs rounded-md placeholder:text-xs focus:ring-0 focus:outline-none w-full px-4 py-3`}
      />
    </div>
  );
};

export default TextArea;
