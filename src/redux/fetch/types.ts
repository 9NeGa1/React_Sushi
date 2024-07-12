import { fetchArray } from "../cart/types";

export type fetchDataParams = {
    sortBy?: "" | "name" | "price" | "popular";
    filterParams?: string;
    categoryType: string;
  }
  
  export type fetchPaginationParams = {
    page: number;
    categoryType: string;
  }
  
  export interface fetchState {
    items: fetchArray[];
    status: "loading" | "success" | "error";
    itemsPagination: fetchArray[];
  }