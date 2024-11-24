import { createRoot } from "react-dom/client";
import App from "./App";
import './input.css'
import { Provider } from "react-redux";
import { store } from "./config/Store";

const root = createRoot(document.getElementById('root')
);

// eslint-disable-next-line react/react-in-jsx-scope
root.render(
<Provider store={store}>
    <App/>
</Provider>
)