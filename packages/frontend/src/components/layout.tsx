import { ReactNode } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

type LayoutProps = {
  children: ReactNode;
}; 

export default function Layout({ children }: LayoutProps) {
  return (
    <Box sx={{ bgcolor: "#04044c" }}>
      <CssBaseline />
      <Container maxWidth="md" >
        <Box height={{ xs: "100%", md: '100vh' }} pb={{ xs: 5, md: 0 }}>
          {children}
        </Box>
      </Container>
    </Box>
  );
}
