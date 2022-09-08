import Divider from '@mui/material/Divider';


import Layout from 'components/layout';
import HeaderStatusSection from 'components/headerStatusSection'
import HeaderTextForm from 'components/headerTextForm';
import Form from './components/form'


function App() {
  return (
      <Layout>
        <HeaderStatusSection />
        <Divider color='#8789af' />
        <HeaderTextForm />
        <Form />
      </Layout>
  );
}

export default App;
