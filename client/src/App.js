import React from 'react';
import { Route } from 'react-router-dom';
import Burgers from './Components/Burgers'; // Adjust the path
import Sidedishes from './Components/Sidedishes'; // Adjust the path
import Drinks from './Components/Drinks'; // Adjust the path
import Support from './Components/Support'; // Adjust the path

const App = () => {
  return (
    <div>
      <Route path="/burgers" component={Burgers} />
      <Route path="/side-dishes" component={Sidedishes} />
      <Route path="/drinks" component={Drinks} />
      <Route path="/support" component={Support} />
    </div>
  );
};

export default App;

