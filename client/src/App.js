import React from 'react';
import { Route } from 'react-router-dom';
import Burgers from './Burgers'; // Adjust the path
import SideDishes from './SideDishes'; // Adjust the path
import Drinks from './Drinks'; // Adjust the path
import Support from './Support'; // Adjust the path

const App = () => {
  return (
    <div>
      <Route path="/burgers" component={Burgers} />
      <Route path="/side-dishes" component={SideDishes} />
      <Route path="/drinks" component={Drinks} />
      <Route path="/support" component={Support} />
    </div>
  );
};

export default App;

