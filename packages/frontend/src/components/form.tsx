import { TextField, Box, FormHelperText } from '@mui/material';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import { styled } from '@mui/material/styles';


const CustonTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'green',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'green',
  },
  '&.css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root': {
    color: '#fff',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#20235b',
    },
    '&:hover fieldset': {
      borderColor: '#20235b',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'green',
    },
  },
})


export default function BasicTextFields() {
  return (
    <Box 
      component="form"
      sx={{
        width: "100%",
      }}
      >
      <Box 
        component="div"
        sx={{
          width: "100%",
        }}>
        <FormControl
          sx={{
            width: "100%",
          }}
        >
          <CustonTextField id="fullWidth" label="Cep" variant="outlined" fullWidth />
        </FormControl>
      </Box>
      <Box
        component="div"
        sx={{
          display: "flex",
          width: "100%",
          marginTop: "10px"
        }}
        >
        <Box 
          component="div"
            sx={{
              display: "flex",
              width: "100%",
              flexDirection: "column",
            }}
          >
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </Box>
        <Box 
          component="div"
            sx={{
              display: "flex",
              width: "100%",
              flexDirection: "column",
            }}
          >
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </Box>
      </Box>
    </Box>
  );
}
