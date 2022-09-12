import { useState, useEffect } from 'react'
import { Box, InputLabel, SelectChangeEvent, Button, FormControl, MenuItem, CircularProgress } from '@mui/material';

import { gql, useLazyQuery } from '@apollo/client';

import { CustomSelect } from './fieldsForm/customSelect'
import { CustomTextField } from './fieldsForm/customTextField'
import RequestFeedback from './requestFeedback';
import {dataCountries} from '../data/countriesList'

const addressQuery = gql`
  query Address($country: String!, $zipcode: String!) {
    findAddress(country: $country, zipcode: $zipcode) {
      countryAbbreviation,
      postcode,
      country,
      places {
        placeName,
        state,
        stateAbbreviation
      }
    }
  }
`;

export default function FormAddres() {

  const [country, setCountry] = useState('US');
  const [zipcode, setZipcode] = useState('');
  const [address, setAddress] = useState<any>();
  const [itemsSearched, setItemsSearched] = useState<any>(JSON.parse(localStorage.getItem('#postalCodeSearch') as string) || [])
  const [isErrorRequest, setIsErrorRequest] = useState(false)
  
  const [buttonClicked, setButtonClicked] = useState(false)

  const [findAddress, { loading, error, data}] = useLazyQuery(addressQuery);

  useEffect(() => {    
    if (buttonClicked && data?.findAddress) {
      setAddress(data?.findAddress)
      setButtonClicked(false)
      
      if (itemsSearched?.length < 5) {
        setItemsSearched([...itemsSearched, data?.findAddress])
        localStorage.setItem('#postalCodeSearch', JSON.stringify([...itemsSearched, data?.findAddress]))
      }
      
    }
  }, [buttonClicked, data, itemsSearched])

  const handleChangeCountry = (event: SelectChangeEvent<unknown>) => {
    setCountry(event.target.value as string);
  };
  
  return loading ? <CircularProgress /> : (
    <Box 
      component="form"
      display="flex"
      width="100%"
      height="auto"
      flexDirection="column"
      alignItems="center"
      >
      <Box 
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        component="div"
        width="100%"
       >
        <FormControl
          fullWidth
          component="div"

          sx={{
            display: "flex",
            width: "100%",
            mr: { xs: 0, md: 2 },
            mb: { xs: 4, md: 0 }
          }}
        >
          
          <CustomTextField label="Enter your zip code" variant="outlined" onChange={dataInput => setZipcode(dataInput.target.value)} />
          </FormControl>

          <FormControl
          fullWidth
          component="div"
          sx={{
            display: "flex",
            width: "100%",
          }}
        >
            <InputLabel id="demo-simple-select-helper-label" sx={{ color: "#fff" }}>Country</InputLabel>
            <CustomSelect
              labelId="demo-simple-select-helper-label"
              id="demo-customized-select"
              value={!country ? 'US' : country}
              label="Country"

              onChange={handleChangeCountry}
             
            >
              {dataCountries.map((itemCountry, index) => (
                <MenuItem 
                  key={(index * Math.random()).toString()}
                  value={itemCountry?.code}
                >
                  {itemCountry?.country}
                </MenuItem>
                ))}
            </CustomSelect>
            
        </FormControl>
      </Box>   

      <Box 
          component="div"
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          my={5}
          width="100%"
            sx={{
              '& .MuiTextField-root': { mr: 2, width: '100%' },
              '& .MuiTextField-root:last-child': { mr: 0 }
            }}
          >

        
          <CustomTextField 
            id="outlined-basic" 
            variant="outlined" 
            label="Place name"
            value={address?.places?.placeName || ''}
            sx={{ mb: { xs: 2, md: 0 } }}
          />
          <CustomTextField 
            id="outlined-basic" 
            variant="outlined" 
            label="State"
            value={address?.places?.state || ''}
          />

      </Box>

      <Box 
        component="div"
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        my={5}
        width="100%"
          sx={{
            '& .MuiTextField-root': { mr: 2, width: '100%' },
            '& .MuiTextField-root:last-child': { mr: 0 }
          }}
      >        
        <CustomTextField 
          id="outlined-basic" 
          variant="outlined" 
          label="State Abbreviation"
          value={address?.places?.stateAbbreviation || ''}
          sx={{ mb: { xs: 2, md: 0 } }}
        />
        <CustomTextField 
          id="outlined-basic" 
          variant="outlined" 
          label="Country abbreviation"
          value={address?.country || ''}
        />

      </Box>


      <Box width={{ xs: "100%", md: 1/3}}>
        <Button 
          variant="contained" 
          color="success"
          fullWidth
          sx={{ py: 1.5 }}
          onClick={() => {
            findAddress({
              variables: {
                country,
                zipcode
              },
              notifyOnNetworkStatusChange: true,
            })
            setButtonClicked(true)
          }}
          >
          Search
        </Button>
      </Box>
     <RequestFeedback 
      durationHideFeedback={3000}
      isErrorRequest={isErrorRequest}
      setIsErrorRequest={setIsErrorRequest}
      typeFeedback="error"
      message='Address not found'
     />
    </Box>
  );
}
