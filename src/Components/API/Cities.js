import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState, useEffect } from "react";

export default function Cities(props) {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("https://countriesnow.space/api/v0.1/countries/capital")
      .then((response) => response.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <p>{error.message}</p>;
  } else if (!isLoaded) {
    return (
      <div className="loader">
        <span>Loading...</span>
      </div>
    );
  } else {
    return (
      <FormControl fullWidth disabled={false} >
        <InputLabel id="city">City</InputLabel>

        <Select labelId="city" id="citySelect" label="citySelect" value={props.selectedValue}
          onChange={props.onSelectChange}>
          {items.// @ts-ignore
            data
            .map((item) => (
              <MenuItem key={item.iso3} value={item.capital}>
                {item.capital}
              </MenuItem>
            ))}
        </Select>

      </FormControl >
    );
  }
};
