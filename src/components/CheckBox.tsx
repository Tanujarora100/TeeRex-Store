import { ChangeEvent } from "react";
import { CheckboxProps } from "../types/CheckBoxPropsType";
const Checkbox: React.FC<CheckboxProps> = ({
  label,
  className,
  checked,
  onChange,
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  return (
    <label>
      <input
        type="checkbox"
        className={className}
        checked={checked}
        onChange={handleChange}
      />
      {label}
    </label>
  );
};
export default Checkbox;
