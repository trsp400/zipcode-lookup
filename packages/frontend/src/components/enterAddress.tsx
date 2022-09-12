import { Box, Stack } from '@mui/material'

import HeaderTextForm from "./headerTextForm";
import FormAddres from "./formAddress";

function EnterAddress(){
  return (
    <Box width="100%" bgcolor="#001e3c">
      <Stack>
        <HeaderTextForm />
        <FormAddres />
      </Stack>
    </Box>
  )
}

export default EnterAddress;