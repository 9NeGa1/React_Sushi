import { createRoot } from "react-dom/client"
import "./index.css"
import { NextUIProvider } from "@nextui-org/react"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import { Provider } from "react-redux"
import { store } from "./redux/store"
import "./firebase"

const container = document.getElementById("root")

 


if (container) {
  const root = createRoot(container)
  
  root.render(
        
        <NextUIProvider>
          <BrowserRouter basename="/React_Sushi">
          <Provider store={store}>
              <App/>
          </Provider>
          </BrowserRouter>
        </NextUIProvider>
        

  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}
