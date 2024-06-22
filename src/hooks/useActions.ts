import { postsActions } from "@/store/slices/postsSlice";
import { todosActions } from "@/store/slices/todosSlice";
import { usersActions } from "@/store/slices/usersSlice";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

const actions = {
  ...usersActions,
  ...postsActions,
  ...todosActions,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
