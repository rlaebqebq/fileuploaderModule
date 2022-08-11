import DefaultGlobalStyle from './Styles/DefaultGlobalStyle';

import 'modern-normalize';
import 'react-loading-skeleton/dist/skeleton.css';

import UploadImages2 from 'UploadImages2';
import DropUploader from 'DropUploader';

function App() {
  return (
    <>
      <DefaultGlobalStyle />
      <UploadImages2 />
      {/* <DropUploader onUpload={(file) => console.log(file)} onRemove={(file) => console.log(file)} /> */}
    </>
  );
}

export default App;
