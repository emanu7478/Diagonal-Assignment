// // LIBRARIES
// import 'react-native-gesture-handler';
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { SafeAreaProvider } from 'react-native-safe-area-context';

// // REDUX SETUP
// import { Provider } from 'react-redux';
// import { Store, Persistor } from '@redux/store';
// import { PersistGate } from 'redux-persist/integration/react';

// // APP SETUP
// import AppNavigator from '@navigation';

// function App() {
//   return (
//     <Provider store={Store}>
//       <PersistGate loading={null} persistor={Persistor}>
//         <NavigationContainer>
//           <SafeAreaProvider>
//             <AppNavigator />
//           </SafeAreaProvider>
//         </NavigationContainer>
//       </PersistGate>
//     </Provider>
//   );
// }

// export default App;

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Store, Persistor } from '@redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import AppNavigator from '@navigation';

function App() {
  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={Persistor}>
        <NavigationContainer>
          <SafeAreaProvider>
            <AppNavigator />
          </SafeAreaProvider>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;
