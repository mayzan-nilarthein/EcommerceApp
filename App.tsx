import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/app/store';
import { ApolloProvider } from '@apollo/client';
import client from './src/graphql/client';
import RootNavigator from './src/navigation/RootNavigator';

const App = () => {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <RootNavigator />
      </ApolloProvider>
    </Provider>
  );
};

export default App;
