import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Resume from "./pages/Resume";
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { 
    createBrowserRouter, 
    RouterProvider
} from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage';

const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <NotFoundPage />,
        children: [
            {
                path: "", 
                element: <App />,
            },
            {
                path: "/resume",
                element: <Resume />
            },
        ]
        
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={ router } />
    </React.StrictMode>
);

reportWebVitals();
