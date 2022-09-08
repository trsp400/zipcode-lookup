import { TextField, Box, FormHelperText, MenuItem, InputLabel, Select, SelectChangeEvent, InputBase } from '@mui/material';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import { styled } from '@mui/material/styles';

import dataCountries from '../data/countriesList.json'

const CustonTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'green',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'green',
  },
  '&.MuiFormControl-root>label': {
    color: '#8789af',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#8789af',
    },
    '&:hover fieldset': {
      borderColor: '#8789af',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'green',
    },
  },
})

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    color: "#8789af",
    marginTop: theme.spacing(3),

  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    border: '1px solid #8789af',
    fontSize: 16,
    padding: '16px 26px 15px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
  },
}));


const textfieldPerColumn = [ 
  [
    { label: "Street" },
    { label: "Complement" },
    { label: "City" },
  ],
  [
    { label: "House number" },
    { label: "District" },
    { label: "State" },
  ] 
]


export default function FormAddres() {
  return (
    <Box 
      component="form"
      sx={{
        width: "100%",
      }}
      >
      <Box 
        display="flex"
        component="div"
        width="100%"
        
       >
        <FormControl
          fullWidth
          component="div"
          sx={{
            display: "flex",
            width: "100%",
          }}
        >
          
          <CustonTextField label="Enter your zip code" variant="outlined" />
          </FormControl>

          <FormControl
          fullWidth
          component="div"
          sx={{
            display: "flex",
            width: "100%",
          }}
        >
            <InputLabel id="demo-simple-select-helper-label">Countrie</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-customized-select"
              value={'US'}
              label="Countrie"
              input={<BootstrapInput />}
              // onChange={handleChange}
            >
              {dataCountries.map(countrie => (
                <MenuItem value={countrie?.code}>{countrie?.name}</MenuItem>
                ))}
            </Select>
            
        </FormControl>
      </Box>
      <Box
        component="div"
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        mt={5}
        width="100%"
        sx={{
          '& > :last-child': { mr: 0 },
        }}
        >

        {
          textfieldPerColumn.map((itensTextField) => (
            <Box 
                component="div"
                display="flex"
                flexDirection="column"
                mr={2}
                width="100%"
                  sx={{
                    '& .MuiTextField-root': { mb: 2, width: '100%' },
                  }}
                >
            {itensTextField.map(itemTextField => ((
              
                <CustonTextField 
                  id="outlined-basic" 
                  label={itemTextField.label} 
                  variant="outlined" 
                />
            )))}
            </Box>
          ))
        }
        {/* <Box 
          component="div"
            sx={{
              display: "flex",
              width: "100%",
              flexDirection: "column",
              bgcolor: "blue"
            }}
          >
          <CustonTextField id="outlined-basic" label="ouse number" variant="outlined" />
          <CustonTextField id="outlined-basic" label="Complement" variant="outlined" />
          <CustonTextField id="outlined-basic" label="City" variant="outlined" />
        </Box> */}
        {/* <Box 
          component="div"
            sx={{
              display: "flex",
              width: "100%",
              flexDirection: "column",
            }}
          >
          <CustonTextField id="outlined-basic" label="House number" variant="outlined" />
          <CustonTextField id="outlined-basic" label="District" variant="outlined" />
          <CustonTextField id="outlined-basic" label="State" variant="outlined" />
        </Box> */}
      </Box>
    </Box>
  );
}
