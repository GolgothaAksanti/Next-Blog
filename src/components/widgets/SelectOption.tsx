import { TbArrowsMoveVertical } from "react-icons/tb";

interface Option {
  value: number | string;
  label: string;
}

interface SelectOptionProps {
  options: Option[];
  selectedOption: number | string;
  setSelectedOption: (option: number | string) => void;
  title: string;
  id?: string;
}

export const SelectOption = ({
  options,
  selectedOption,
  setSelectedOption,
  title,
  id,
}: SelectOptionProps) => {
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="relative">
      <label
        htmlFor={id}
        className="block mb-2 text-xs font-medium text-gray-900"
      >
        {title}
      </label>
      <select
        id={id}
        value={selectedOption}
        onChange={handleSelectChange}
        className="block w-full appearance-none p-4 py-3  text-gray-600 border bg-gray-50 border-gray-300 text-xs rounded-md focus:outline-none"
      >
        <option value="" disabled>
          Select a {title}
        </option>
        {options.map((option, i) => (
          <option className="text-xs" key={i} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 top-6 right-2 flex items-center px-2 pointer-events-none">
        <TbArrowsMoveVertical className="text-gray-600" />
      </div>
    </div>
  );
};
