import Routes from "./Routes";
import { SelectionProvider } from "./common/utils/SelectionContext";

const App = () => {
  return (
    <SelectionProvider>
      <Routes />
    </SelectionProvider>);
};

export default App;
