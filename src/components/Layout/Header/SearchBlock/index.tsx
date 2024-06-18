import s from "./SearchBlock.module.scss";
import { useSearchUsersQuery, usersApi } from "@/api/usersApi";
import Input from "@/components/Input";
import { useState } from "react";

const SearchBlock = () => {
  const [value, setValue] = useState("");
  const { data } = useSearchUsersQuery(value, { skip: value.length < 1 });
  const onChange = (value: string) => setValue(value);

  return (
    <div className={s.search_container}>
      <Input onChange={onChange} placeholder="Поиск людей по имени" />
      <div className={s.search_results}>
        {data?.map((user) => (
          <div key={user.id} className={s.result_item}>
            <div>
              <p className={s.username}>{user.username}</p>
              <p className={s.name}>{user.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBlock;
