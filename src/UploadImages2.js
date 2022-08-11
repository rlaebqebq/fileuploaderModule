import React, { useState, useCallback, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';

function Basic(props) {
  const [myFiles, setMyFiles] = useState([]);

  const onDrop = useCallback(
    (acceptedFiles) => {
      setMyFiles([...myFiles, ...acceptedFiles]);
    },
    [myFiles]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  });

  const removeFile = (file) => () => {
    const newFiles = [...myFiles];
    newFiles.splice(newFiles.indexOf(file), 1);
    setMyFiles(newFiles);
  };

  // const removeAll = () => {
  //   setMyFiles([]);
  // };

  const files = myFiles.map((file) => (
    <li key={file.path}>
      {file.path} <button type="button" onClick={removeFile(file)}>Remove File</button>
    </li>
  ));

  useEffect(()=> {
    console.log(myFiles);
  })

  return (
    <section className='container'>
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <p>Drag drop some files here, or click to select files</p>
      </div>
      <ul>{files}</ul>
      {/* {files.length > 0 && (
        <button type='button' onClick={removeAll}>
          Remove All
        </button>
      )} */}
    </section>
  );
}

export default Basic;
