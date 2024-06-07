import { fetchWithTimeout } from './request';

export const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_API_TOKEN;

const MAPBOX_AUTOLOCATION_URL = 'https://api.mapbox.com/geocoding/v5/mapbox.places';

// const mapBoxUrl = (start, end) => `https://api.mapbox.com/directions/v5/mapbox/cycling/${start[0]},${start[1]};${end[0]},${end[1]}?steps=true&geometries=geojson&access_token=${process.env.REACT_APP_MAPBOX_API_TOKEN}`

export const getAutoLocation = async (value) => {
  try {
    const response = await fetchWithTimeout(
      `${MAPBOX_AUTOLOCATION_URL}/${encodeURIComponent(value)}.json?access_token=${MAPBOX_TOKEN}&types=place&autocomplete=true`,
    );

    const places = response.features.map((place) => place.place_name);
    return places;
  } catch (error) {
    return new Error(error);
  }
};
// export const getMap = async (start, end) => {
//   const response = await fetchWithTimeout(mapBoxUrl(start, end));
//   console.log(response);
// };
