import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import { TodoComponent } from "./context/TodoContext.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <TodoComponent>
      <App />
    </TodoComponent>
  </React.StrictMode>
);
