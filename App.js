import { StyleSheet, Text, View } from 'react-native'
import RootStack from './src/Navigation/RootStack'
import { Provider } from 'react-redux'
import { Store } from './src/Redux/store'
import persistStore from 'redux-persist/es/persistStore';
import { PersistGate } from 'redux-persist/integration/react';


let persistor = persistStore(Store);

const App = () => {

  return (
    <Provider store={Store}>
      <PersistGate persistor={persistor}>
        <RootStack />
      </PersistGate>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})