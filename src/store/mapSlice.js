import { createSlice } from '@reduxjs/toolkit';

const initialMapState = {
  cityState: null,
  coordinates: {
    latitude: 40.4406,
    longitude: -79.9959,
  },
  defaultConfig: {
    zoom: 7,
    pitch: 0,
    bearing: 0,
  },
};

const mapSlice = createSlice({
  name: 'map',
  initialState: initialMapState,
  reducers: {
    setCityState: (state, { payload }) => ({
      ...state,
      cityState: payload,
    }),
    setCoordinates: (state, { payload }) => ({
      ...state,
      coordinates: { ...payload },
    }),
  },
});

export const { setCityState, setCoordinates } = mapSlice.actions;
export default mapSlice.reducer;
