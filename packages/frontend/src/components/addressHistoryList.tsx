import { Box, CardContent,Card, Typography,Grid  } from '@mui/material'

function AddressHistoryList(data: any){
  return (
    <Box width="100%"  sx={{ mx: '2px', transform: 'scale(0.9)'}}>
      <Card variant="elevation" sx={{ bgcolor: "#102027" }} >
        <CardContent>
          <Grid container direction={{ xs: "column", sm: "row" }} rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 12 }} wrap="wrap">
            <Grid item xs={3}>
              <Typography variant='h6' color="#fff" fontWeight="700">Post Code</Typography>
              <Typography variant='subtitle1' color="#bdbdbd">{data?.postcode}</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant='h6' color="#fff" fontWeight="700">Country</Typography>
              <Typography variant='subtitle1' color="#bdbdbd">{data?.country}</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant='h6' color="#fff" fontWeight="700">Place name</Typography>
              <Typography variant='subtitle1' color="#bdbdbd">{data?.places?.placeName}</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant='h6' color="#fff" fontWeight="700">State</Typography>
              <Typography variant='subtitle1' color="#bdbdbd">{data?.places?.state}</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  )
}

export default AddressHistoryList;