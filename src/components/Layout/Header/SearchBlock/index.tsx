import s from "./SearchBlock.module.scss";
import { useSearchUsersQuery } from "@/api/usersApi";
import Input from "@/components/Input";
import { useClickOutside } from "@react-hooks-library/core";
import { useDebounce } from "@react-hook/debounce";
import { useEffect, useRef, useState } from "react";

const SearchBlock = () => {
  const [value, setValue] = useDebounce("", 300);
  const onChange = (value: string) => setValue(value);
  const { data } = useSearchUsersQuery(value, { skip: value.length < 1 });

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (data && data?.length > 0) setIsOpen(true);
    else setIsOpen(false);
  }, [data]);

  useEffect(() => {
    if (value.length < 1) setIsOpen(false);
  }, [value]);

  const ref = useRef(null);

  useClickOutside(ref, () => {
    setIsOpen(false);
  });

  return (
    <div className={s.search_container}>
      <Input onChange={onChange} placeholder="Поиск людей по имени" />
      {isOpen && (
        <div ref={ref} className={s.search_results}>
          {data?.map((user) => (
            <div key={user.id} className={s.result_item}>
              <div>
                <p className={s.username}>{user.username}</p>
                <p className={s.name}>{user.name}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBlock;
