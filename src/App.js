import CakeContainer from "./components/CakeContainer";
import { Provider } from 'react-redux';
import store from "./redux/store";
import HooksCakeContainer from "./components/HooksCakeContainer";
import SoftyContainer from "./components/SoftyContainer";
import BurgerContainer from "./components/BurgerContainer";

function App() {
  return (
    <Provider store={store}>
      <HooksCakeContainer/>
      <CakeContainer/>
      <SoftyContainer/>
      <BurgerContainer/>
    </Provider>
  );
}

export default App;
