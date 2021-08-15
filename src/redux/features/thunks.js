import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const getDummyData = createAsyncThunk(
  'main/getDummyData',
  async (_, {dispatch, getState}) => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');

    return res.data;
  },
);
