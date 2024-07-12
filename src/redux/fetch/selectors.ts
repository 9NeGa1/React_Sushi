import { RootState } from "../store";

export const selectFetchItems = (state: RootState) => state.fetchSlice;
