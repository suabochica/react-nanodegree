import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store";

export const useUsersSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useUsersDispatch: () => AppDispatch = useDispatch;
