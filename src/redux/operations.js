import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
axios.defaults.baseURL = 'https://6761b8f346efb3732372c02f.mockapi.io';

export const fetchToDos = createAsyncThunk(
  'toDos/fetchToDos',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/toDo');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const addToDo = createAsyncThunk(
  'toDos/addToDo',
  async (text, thunkAPI) => {
    try {
      const { data } = await axios.post('/toDo', { text });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const deleteToDo = createAsyncThunk(
  'toDos/deleteToDo',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/toDo/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
