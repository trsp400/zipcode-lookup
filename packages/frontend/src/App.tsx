import Divider from '@mui/material/Divider';


import Layout from 'components/layout';
import HeaderStatusSection from 'components/headerStatusSection'
import HeaderTextForm from 'components/headerTextForm';
import FormAddres from './components/formAddres'


function App() {
  return (
      <Layout>
        <HeaderStatusSection />
        <Divider color='#8789af' sx={{ opacity: 0.4 }} />
        <HeaderTextForm />
        <FormAddres />
      </Layout>
  );
}

export default App;
