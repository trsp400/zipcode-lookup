import { useState, useCallback } from 'react'
import { Box, InputLabel, SelectChangeEvent, Button, FormControl, MenuItem } from '@mui/material';

import { CustonSelect } from './fieldsForm/custonSelect'
import { CustonTextField } from './fieldsForm/custonTextField'
import RequisitionFeedback from './requisitionFeedback';
import {dataCountries} from '../data/countriesList'
import { api } from '../api'
import { setDataStorage } from '../util/setDataStorage';

import { DataLocalityProps } from '../types/form'


export default function FormAddres() {

  const [codeCountry, setCodeCountry] = useState('');
  const [zipCode, setZipCode] = useState('US');
  const [dataLocality, setDataLocality] = useState<DataLocalityProps>();
  const [isErrorRequisition, setIsErrorRequisition] = useState(false)
  
  const getAddress = useCallback(() => {
    const params = `${codeCountry}/${zipCode}`

    api.get(params).then(response => {
      const dataAddress  = response.data

      console.log(dataAddress)

      setDataLocality(() =>  {
        const dataLocality: DataLocalityProps = {
          country: dataAddress["country"],
          postCode: dataAddress["post code"],
          city: dataAddress.places[0]["place name"],
          state: dataAddress.places[0]["state"]
        }

        console.log(dataAddress)
        setDataStorage(dataLocality)
        
        return {
          city: dataAddress.places[0]["place name"],
          state: dataAddress.places[0]["state"]
        };
      })
    }).catch(() =>{
      setIsErrorRequisition(true)
    })


    

  },[codeCountry, zipCode])


  const handleChangeCountry = (event: SelectChangeEvent<unknown>) => {
    setCodeCountry(event.target.value as string);
  };

  
  return (
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
          
          <CustonTextField label="Enter your zip code" variant="outlined" onChange={dataInput => setZipCode(dataInput.target.value)} />
          </FormControl>

          <FormControl
          fullWidth
          component="div"
          sx={{
            display: "flex",
            width: "100%",
          }}
        >
            <InputLabel id="demo-simple-select-helper-label" sx={{ color: "#fff" }}>Countrie</InputLabel>
            <CustonSelect
              labelId="demo-simple-select-helper-label"
              id="demo-customized-select"
              value={!codeCountry ? 'US' : codeCountry}
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
            </CustonSelect>
            
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

              
                <CustonTextField 
                  id="outlined-basic" 
                  variant="outlined" 
                  label="City"
                  value={dataLocality?.city}
                  focused={!!dataLocality?.city}
                  sx={{ mb: { xs: 2, md: 0 } }}
                />
                <CustonTextField 
                  id="outlined-basic" 
                  variant="outlined" 
                  label="State"
                  value={dataLocality?.state}
                  focused={!!dataLocality?.state}
                />

            </Box>


      <Box width={{ xs: "100%", md: 1/3}}>
        <Button 
          variant="contained" 
          color="success"
          fullWidth
          sx={{ py: 1.5 }}
          onClick={() => getAddress()}
          >
          Search
        </Button>
      </Box>
     <RequisitionFeedback 
      durationHideFeedback={3000}
      isErrorRequisition={isErrorRequisition}
      setIsErrorRequisition={setIsErrorRequisition}
      typeFeedback="error"
      message='Address not found'
     />
    </Box>
  );
}
