import { createSlice } from "@reduxjs/toolkit";

const STATUS = Object.freeze({
  IDLE: "idle",
  LOADING: "loading",
  ERROR: "error",
  SUCCESS: "success",
});

const BlogData = createSlice({
  name: "data",
  initialState: {
    data: [],
    status: STATUS.IDLE,
  },
  reducers: {
    addBlogData(state, action) {
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export const { addBlogData, setStatus } = BlogData.actions;
export default BlogData.reducer;

//thunks

export function fetchBlogData() {
  return async function fetchBlogThunk(dispatch, getState) {
    dispatch(setStatus(STATUS.LOADING));

    try {
      const res = await fetch(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${import.meta.env.VITE_API_KEY}`);
      const data = await res.json();
      dispatch(addBlogData(data));
      dispatch(setStatus(STATUS.SUCCESS));
    } catch (err) {
      dispatch(setStatus(STATUS.ERROR));
      console.error(err);
    }
  };
}