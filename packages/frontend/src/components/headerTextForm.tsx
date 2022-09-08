import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


export default function HeaderTextForm() {
  return (
    <Box>
      <Typography variant="h3" sx={{ color: "white" }}>Enter your address</Typography>
      <Typography variant="h6" sx={{ color: "#8789af" }}>Fill in the zip code field to generate your address</Typography>

    </Box>
  );
}
