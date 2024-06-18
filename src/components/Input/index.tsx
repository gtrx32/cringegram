import { ComponentPropsWithoutRef, FC, useState } from "react";
import s from "./Input.module.scss";
import clsx from "clsx";

type InputProps = Omit<ComponentPropsWithoutRef<"input">, "onChange"> & {
  onChange: (value: string) => void;
};

const Input: FC<InputProps> = ({ className, onChange, ...props }) => {
  const [value, setValue] = useState("");

  const handleChange = ({
    target: { value: inputValue },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setValue(inputValue);
    onChange(inputValue);
  };

  return (
    <input
      className={clsx(s.search, className)}
      type="text"
      value={value}
      onChange={handleChange}
      {...props}
    />
  );
};

export default Input;
