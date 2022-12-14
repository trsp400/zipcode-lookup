import {Box, Typography} from '@mui/material';

export default function HeaderTextForm() {
  return (
    <Box 
      sx={{
        py: 3
      }}
      >
      <Typography variant="h4" fontWeight={800} sx={{ color: "white" }}>Enter your address</Typography>
      <Typography variant="h6" sx={{ color: "#8789af" }}>Fill in the zip code field to generate your address</Typography>

    </Box>
  );
}
