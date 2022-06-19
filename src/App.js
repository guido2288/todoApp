import './App.css';

import { TodoList } from './Components/TodoList';
import { Switch } from './Components/Switch';


function App() {



  return (

        <App className="App">
          <header>
            <h1>TODO</h1>
            <Switch />
          </header>
      
          <TodoList>
        
          </TodoList>

        </App>
  
  );
}



export default App;
