import CakeContainer from "./components/CakeContainer";
import { Provider } from 'react-redux';
import store from "./redux/store";
import HooksCakeContainer from "./components/HooksCakeContainer";
import SoftyContainer from "./components/SoftyContainer";
import BurgerContainer from "./components/BurgerContainer";
import NewCakeContainer from "./components/NewCakeContainer";
import ItemContainer from "./components/ItemContainer";
import UserContainer from "./components/UserContainer";

function App() {
  return (
    <Provider store={store}>
      {/* <ItemContainer cake/>
      <ItemContainer/>
      <HooksCakeContainer/>
      <CakeContainer/>
      <SoftyContainer/>
      <BurgerContainer/>
    <NewCakeContainer/> */}
      <UserContainer/>
    </Provider>
  );
}

export default App;
