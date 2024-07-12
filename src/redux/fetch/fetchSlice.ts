import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { fetchArray } from '../cart/types';
import { fetchDataParams, fetchPaginationParams, fetchState } from './types';



export const fetchData = createAsyncThunk<fetchArray[], fetchDataParams>(
  "fetch/fetchData",
  async (params) => {
    try {
      const {categoryType, sortBy, filterParams} = params;
    const {data} = await axios.get(`https://65deb3a6ff5e305f32a04d01.mockapi.io/Sushi?title=${categoryType}`)
    const result: fetchArray[] = data[0].data
    const sortedRes = sortBy ? [...result].sort((a, b) => a[sortBy] > b[sortBy] ? 1 : -1) : result
    if(filterParams) {
      //@ts-ignore
      return sortedRes.filter(item => item[filterParams])
    }

    return sortedRes

    } catch (error) {
      console.log(error)
      return []
    }
    
  }

)

export const fetchPagination = createAsyncThunk<fetchArray[], fetchPaginationParams>(
  "fetch/fetchPagination",
  async (params) => {
    try {
      const {categoryType, page} = params;
    const {data} = await axios.get(`https://65deb3a6ff5e305f32a04d01.mockapi.io/Sushi?title=${categoryType}`)
    const result:fetchArray[] = data[0].data
    return result;
    } catch (error) {
      console.log(error)
      return []
    }  
  }

)

const initialState: fetchState = {
    items: [],
    status: "loading",
    itemsPagination: []
}

export const fetchSlice = createSlice({
  name: 'fetch',

  initialState,
  reducers: {
        setItems(state, action: PayloadAction<fetchArray[]>) {
            state.items = action.payload
        }
      },
      
      extraReducers: (builder) => {
      
        builder.addCase(fetchData.fulfilled, (state, action: PayloadAction<fetchArray[]>) => {
          state.items = action.payload;
          state.status = "success"
          
        })
        builder.addCase(fetchData.pending, (state) => {
          state.items = [];
          state.status = "loading";


        })
        builder.addCase(fetchData.rejected, (state) => {
        
          state.status = "error"
          state.items = [];
        })

        builder.addCase(fetchPagination.fulfilled, (state, action: PayloadAction<fetchArray[]>) => {
        
          state.itemsPagination = action.payload;
          state.status = "success"
        })
      }
    }
)



export const {setItems} = fetchSlice.actions

export default fetchSlice.reducer