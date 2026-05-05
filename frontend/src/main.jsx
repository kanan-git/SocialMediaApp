// import { BrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

createRoot(document.getElementById('root')).render(
	<RouterProvider router={router} />
	// <BrowserRouter>
		// <App />
	// </BrowserRouter>
);
