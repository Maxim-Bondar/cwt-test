import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { dogsActions } from "../store/dogs/dogs.slice";

const actions = {
  ...dogsActions,
};

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(actions, dispatch);
};
