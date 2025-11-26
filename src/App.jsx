
import './App.css'
import Todo from './Components/Todo';
import { Provider } from 'react-redux';  //provides the redux store
import { store } from './app/store';
function App() {

  return (
    <>
      <Provider store={store}>
        <Todo />
      </Provider>
    </>
  )
}

export default App;
