import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import { MyProvider } from './pages/Data/MyContext.jsx';
// import { MyProvider } from './MyProvider';

const root = createRoot(document.getElementById('root'));

root.render(
    <StrictMode>
        <BrowserRouter>
            <MyProvider>
                <App />
            </MyProvider>
        </BrowserRouter>
    </StrictMode>
);