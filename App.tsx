import { NavigationContainer } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import { ContextProvider } from './RiverCamp/RiverCampStore/riverCampContext';
import { useEffect, useState } from 'react';
import Rivercamploader from './RiverCamp/RiverCampComponents/Rivercamploader';
import RiverCampStackNav from './RiverCamp/RiverCampNavigation/RiverCampStackNav';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5400);
  }, []);

  return (
    <NavigationContainer>
      <ContextProvider>
        {isLoading ? <Rivercamploader /> : <RiverCampStackNav />}
        <Toast position="top" topOffset={55} />
      </ContextProvider>
    </NavigationContainer>
  );
};

export default App;
