import Box from '@mui/material/Box';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import Typography  from '@mui/material/Typography';

export default function HeaderStatusSection() {
  return (
    <Box
     component="div"
     sx={{
      width: "100%",
      height:' auto',
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      py: 3

    }}>
      <Box 
        component="div"
        sx={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          bgcolor: "#00c853",
          padding: "10px",
          borderRadius: "100%"
        }}
        >
        <PlaceOutlinedIcon fontSize='large' sx={{ color: "#fff" }}/>
      </Box>
      <Typography variant='subtitle1' fontSize={24} sx={{ color: "#8789af" }}>Address</Typography>
    </Box>
  );
}
