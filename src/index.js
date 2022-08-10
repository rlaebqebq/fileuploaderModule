// import axios from 'axios';
import { createRoot } from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { RecoilRoot } from 'recoil';
// import { QueryClient, QueryClientProvider } from 'react-query';

// import { API_BASE_URL } from './Common/constants';
// import store from './redux/store';

import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);


root.render(
  <App />
);
