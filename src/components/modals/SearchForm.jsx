import React, { useState, useEffect, useCallback } from 'react';
import { Box, Button, TextField, Typography, Autocomplete } from '@mui/material';
import _debounce from 'lodash/debounce';
import { useDispatch, useSelector } from 'react-redux';
import { setCityState, setCoordinates } from '../../store/mapSlice';
import { getAutoLocation } from '../../api/map';

const SearchForm = () => {
  const dispatch = useDispatch();
  const cityState = useSelector((state) => state.map.cityState);
  const { latitude, longitude } = useSelector((state) => state.map.coordinates);

  const [localCoordinates, setLocalCoordinates] = useState({ latitude: '', longitude: '' });
  const [options, setOptions] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSearch = useCallback(
    _debounce(async (searchValue) => {
      dispatch(setCityState(searchValue));
      const suggestions = await getAutoLocation(searchValue);
      setOptions(suggestions || []);
    }, 1300),
    [dispatch, cityState],
  );

  const handleCityStateChange = async (value) => {
    debouncedSearch(value);
  };

  // Update Redux state when local state changes
  useEffect(() => {
    dispatch(setCoordinates(localCoordinates));
  }, [localCoordinates, dispatch]);

  const handleCoordinateChange = async ({ axis, value }) => {
    setLocalCoordinates((prevCoordinates) => ({
      ...prevCoordinates,
      [axis]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        width: '100%',
      }}
      onSubmit={handleSubmit}
    >
      <Autocomplete
        options={options}
        onChange={(e, value) => dispatch(setCityState(value))}
        freeSolo
        disabled={!!latitude || !!longitude}
        renderInput={(params) => (
          <TextField
            {...params}
            label="City/State"
            value={cityState}
            onChange={(e) => handleCityStateChange(e.target.value)}
            fullWidth
          />
        )}
      />
      <Typography
        sx={{
          color: 'text.secondary',
          textAlign: 'center',
          width: '100%',
        }}
        component="p"
      >
        OR
      </Typography>
      {['latitude', 'longitude'].map((fieldName) => (
        <TextField
          key={fieldName}
          label={fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}
          value={localCoordinates[fieldName]}
          disabled={!!cityState}
          fullWidth
          onChange={(e) =>
            handleCoordinateChange({
              axis: fieldName,
              value: e.target.value.trim(),
            })
          }
        />
      ))}
      <Button variant="contained" color="primary" type="submit">
        Search
      </Button>
    </Box>
  );
}

export default SearchForm;
