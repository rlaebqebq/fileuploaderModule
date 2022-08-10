import DefaultGlobalStyle from './Styles/DefaultGlobalStyle';

import 'modern-normalize';
import 'react-loading-skeleton/dist/skeleton.css';

import UploadImages from 'UploadImages';

function App() {
  return (
    <>
      <DefaultGlobalStyle />
      <UploadImages />
    </>
  );
}

export default App;
