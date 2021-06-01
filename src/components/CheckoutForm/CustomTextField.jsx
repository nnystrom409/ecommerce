import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { TextField, Grid } from '@material-ui/core';

function FormInput({ name, label, required }) {
  const { control } = useFormContext();
  console.log(name)
  console.log(label)

  const isError = false;

  return (
    <Grid item xs={12} sm={6}>
      <Controller
        render={({ field }) => <TextField {...field} label={label}  name={name} />}
        name={name}
        control={control}
        label={label}
        fullWidth
        required={required}
        error={isError}
      />
    </Grid>
  );
}

export default FormInput;
