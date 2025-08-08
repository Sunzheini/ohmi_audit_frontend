import React from 'react';
import ReactDOM from 'react-dom/client';

// import css here, last takes precedence
import './styles/reset.css';
import 'bootstrap/dist/css/bootstrap.min.css';  // Bootstrap CSS
import './styles/style.css';

import './styles/components/buttons.css';
import './styles/components/card-buttons-bar.css';
import './styles/components/content_container.css';
import './styles/components/footer.css';
import './styles/components/forms.css';
import './styles/components/left_menu_bar.css';
import './styles/components/navigation_bar.css';
import './styles/components/task_status.css';
import './styles/components/tables.css';

import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
