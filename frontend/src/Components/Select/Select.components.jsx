import { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const SelectList= ({ label, options, value, onChange }) => {
  const [selectedValue, setSelectedValue] = useState(value);

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <FormControl variant='filled' className='form-control' fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select value={selectedValue} onChange={handleChange}>
        {options.map((option, index) => (
          <MenuItem key={index} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default SelectList;