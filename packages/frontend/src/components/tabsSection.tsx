import {useContext, useState} from 'react'
import {Box, Tabs, Tab, Divider, IconButton, Typography, Snackbar, Alert } from '@mui/material';

import { PlaceOutlined, DeleteOutline } from '@mui/icons-material';

import { TabPanelProps, TabsContentProps } from '../types/tabs'
import { DataLocationProps } from '../types/form'

import EnterAddress from './enterAddress';
import AddressHistoryList from './addressHistoryList';


const tabContent: TabsContentProps[] = [
  {
    label: 'Address',
    iconLabel: <PlaceOutlined />,
  },
  {
    label: 'History',
    iconLabel: <PlaceOutlined />,
  }
]


function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box width="100%">{children}</Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


export default function TabsSection() {
  const [value, setValue] = useState(0);
  
  const [addresses, setAddresses] = useState(JSON.parse(localStorage.getItem('#postalCodeSearch') as string) || [])
  const [open, setOpen] = useState(false);

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleClearLocalStorage = () => {
    localStorage.removeItem('#postalCodeSearch');
    setAddresses([])
    setOpen(true)
  }

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    setAddresses(JSON.parse(localStorage.getItem('#postalCodeSearch') as string) || [])
  };

  return (
    <Box sx={{ width: '100%', bgcolor: '#001e3c'}}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert 
          onClose={handleClose} 
          severity="error" 
          sx={{ width: '100%' }}
          elevation={6} 
          variant="filled"
        >
          Succesfully cleared search history!
        </Alert>
      </Snackbar>
      <Tabs 
        indicatorColor='primary'
        textColor='primary'
        centered
        value={value} 
        onChange={handleChange} 
      >
        {
          tabContent.map((content, index) => (
          <Tab 
            key={(index * Math.random()).toString()}
            icon={content.iconLabel} 
            label={content.label}  
            {...a11yProps(index)} 
            sx={{ 
              color: "#fff", 
              fontSize: {xs: 15, md: 18 }, 
              width: "20%"
            }} 
          />
        ))} 
      </Tabs>
      <Divider color='#8789af' sx={{ opacity: 0.4 }} />    
        <TabPanel value={value} index={0}>
          <EnterAddress />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Box display="flex" flexDirection="row">
            <Typography variant="h6" sx={{ color: "#8789af" }}>Delete recent searches</Typography> 
            <IconButton onClick={() => handleClearLocalStorage()} color="error" title='Delete recent searches'>
              <DeleteOutline />
            </IconButton>
          </Box>
            {addresses?.map((dataItem: any, index: number) => (
              <AddressHistoryList
                key={(index * Math.random()).toString()}
                {...dataItem}
            />
            ))}
        </TabPanel>
       
    </Box>
  );
}
