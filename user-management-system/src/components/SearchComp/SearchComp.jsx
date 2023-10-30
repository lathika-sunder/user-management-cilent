import React from 'react';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';

const SearchComp = () => {
  return (
    <TextField
      label="Search"
      variant="outlined"
      fullWidth
      size="small"
      style={{ margin: '10px 0' ,fontSize:2}}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
}

export default SearchComp;
