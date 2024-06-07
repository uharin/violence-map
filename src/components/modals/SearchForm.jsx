import React, { useState, useCallback } from 'react';
import { Box, Button, TextField, Typography, Autocomplete } from '@mui/material';
import _debounce from 'lodash/debounce';
import { getAutoLocation } from '../../api/map';

function SearchForm() {
  const [cityState, setCityState] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [options, setOptions] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSearch = useCallback(
    _debounce(async (searchValue) => {
      setCityState(searchValue);
      const suggestions = await getAutoLocation(searchValue);
      setOptions(suggestions || []);
    }, 1300),
    [],
  );

  const handleCityStateChange = async (value) => {
    setCityState(value);
    debouncedSearch(value);
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
        onChange={(e, value) => setCityState(value)}
        freeSolo
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
      <TextField
        label="Latitude"
        value={latitude}
        onChange={(e) => setLatitude(e.target.value)}
        fullWidth
      />
      <TextField
        label="Longitude"
        value={longitude}
        onChange={(e) => setLongitude(e.target.value)}
        fullWidth
      />
      <Button variant="contained" color="primary" type="submit">
        Search
      </Button>
    </Box>
  );
}

export default SearchForm;
