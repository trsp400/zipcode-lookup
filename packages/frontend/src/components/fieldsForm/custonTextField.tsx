import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';


const CustonTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'green',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'green',
  },
  '&.MuiInputBase-input': {
    color: '#fff'
  },
  '&.MuiFormControl-root>label': {
    color: '#fff',
  },
  'input': { 
    color: "#fff" 
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

export { CustonTextField }