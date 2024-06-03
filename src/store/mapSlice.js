import { createSlice } from "@reduxjs/toolkit";

const initialMapState = {
  latitude: 40.4406,
    longitude: -79.9959,
    zoom: 7,
    pitch: 0,
    bearing: 0,
};

const mapSlice = createSlice({
  name: 'map',
  initialState: initialMapState,
  reducers: {
  }
});

export default mapSlice.reducer;