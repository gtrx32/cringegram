import s from "./SearchBlock.module.scss";
import { useSearchUsersQuery } from "@/api/usersApi";
import Input from "@/components/UI/Input";
import { useClickOutside } from "@react-hooks-library/core";
import { useDebounce } from "@react-hook/debounce";
import { useEffect, useRef, useState } from "react";
import UserPreview from "../UserPreview";

const SearchBlock = () => {
  const [value, setValue] = useDebounce("", 300);
  const { data } = useSearchUsersQuery(value, { skip: value.length === 0 });

  const onChange = (value: string) => setValue(value);

  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (value.length > 0) setIsOpen(true);
    else setIsOpen(false);
  }, [value]);

  useClickOutside(ref, () => {
    setIsOpen(false);
  });

  return (
    <div className={s.search_container}>
      <Input onChange={onChange} placeholder="Search users by name" />
      {isOpen && (
        <div ref={ref} className={s.search_results}>
          {data?.map((user) => (
            <UserPreview user={user} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBlock;
