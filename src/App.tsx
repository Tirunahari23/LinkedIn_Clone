import SigninPage from "./pages/signinpage/signinPage";
import { store } from "./redux/store";
import RoutesPage from "./routes/RoutesPage";
import  {Provider}  from "react-redux";
function App() {
  return (
    <Provider store={store}>

      <RoutesPage/>
    </Provider>
  );
}

export default App;
