import { Box, CardContent,Card, Typography,Grid  } from '@mui/material'

import { DataLocalityProps } from '../types/form'

function AddressHistoryList({ postCode, country, city, state }: DataLocalityProps){
  return (
    <Box width="100%"  sx={{ mx: '2px', transform: 'scale(0.9)'}}>
      <Card variant="elevation" sx={{ bgcolor: "#102027" }} >
        <CardContent>
          <Grid container direction={{ xs: "column", sm: "row" }} rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 12 }} wrap="wrap">
            <Grid item xs={3}>
              <Typography variant='h6' color="#fff" fontWeight="700">Post Code</Typography>
              <Typography variant='subtitle1' color="#bdbdbd">{postCode}</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant='h6' color="#fff" fontWeight="700">Country</Typography>
              <Typography variant='subtitle1' color="#bdbdbd">{country}</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant='h6' color="#fff" fontWeight="700">City</Typography>
              <Typography variant='subtitle1' color="#bdbdbd">{city}</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant='h6' color="#fff" fontWeight="700">State</Typography>
              <Typography variant='subtitle1' color="#bdbdbd">{state}</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  )
}

export default AddressHistoryList;