import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './input.css';
import AdminCMSApp from './AdminCMSApp.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AdminCMSApp />
  </StrictMode>,
)
