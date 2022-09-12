import { Select } from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomSelect = styled(Select)({
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: 'green',
  },
  '&#demo-customized-select': {
    color: '#8789af',
  },

  '&>.MuiOutlinedInput-notchedOutline, :hover .MuiOutlinedInput-notchedOutline': {
    borderColor: '#8789af',
  },
  "&>.MuiSelect-select": {
    color: "#fff",
  },
  "& .MuiSvgIcon-root": {
    color: "#fff",
  },
})

export { CustomSelect } 