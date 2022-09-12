import Layout from 'components/layout';

import TabsSection from './components/tabsSection'

import { ApolloProvider } from '@apollo/client/react';
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql/',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>    
      <Layout>
        <TabsSection />
      </Layout>
    </ApolloProvider>
  );
}

export default App;
