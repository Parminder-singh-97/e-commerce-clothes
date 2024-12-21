import { useDispatch } from "react-redux";

// Custom React Hook
export const useDispatchAction = () => {
  const dispatch = useDispatch();

  const dispatchAction = (action) => {
    dispatch(action);
  };

  return dispatchAction;
};