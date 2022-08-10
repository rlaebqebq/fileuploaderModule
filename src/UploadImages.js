/* eslint-disable react/prop-types */
import { useEffect, useState, useCallback } from 'react';
import { UploadImagesForm, UploadImagesFormLiStyle } from './style/index';
import PlusImage from 'resources/image/plus.svg';
import RemoveImage from 'resources/image/remove.svg';
import { ReactSVG } from 'react-svg';
// import { css } from "styled-components";
import Dropzone from 'react-dropzone-uploader';
import 'stdfyles.css';
import 'react-dropzone-uploader/dist/styles.css';

import { FormProvider, useForm, useFormContext } from 'react-hook-form';

import { useDropzone } from 'react-dropzone';

function FileInput(props) {
  // eslint-disable-next-line react/prop-types
  const { name, label = name } = props;
  const { register, unregister, setValue, watch } = useFormContext();
  const files = watch(name);
  const onDrop = useCallback(
    (droppedFiles) => {
      setValue(name, droppedFiles, { shouldValidate: true });
    },
    [setValue, name]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    // eslint-disable-next-line react/destructuring-assignment
    accept: props.accept,
  });
  useEffect(() => {
    register(name);
    return () => {
      unregister(name);
    };
  }, [register, unregister, name]);
  return (
    <>
      <label className=' ' htmlFor={name}>
        {label}
      </label>
      <div {...getRootProps()} type='file' role='button' aria-label='File Upload' id={name}>
        <input {...props} {...getInputProps()} />
        <div style={{ width: '500px', border: 'black solid 2px' }} className={` ${  isDragActive ? ' ' : ' '}`}>
          <p className=' '>Drop the files here ...</p>

          {!!files?.length && (
            <div className=' '>
              {files.map((file) => {
                return (
                  <div key={file.name}>
                    <img
                      src={URL.createObjectURL(file)}
                      alt={file.name}
                      style={{
                        height: '200px',
                      }}
                    />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
}


// eslint-disable-next-line import/no-cycle

// eslint-disable-next-line react/prop-types
function Preview({ meta }) {
  // eslint-disable-next-line react/prop-types
  const { name } = meta;
  console.log("메타", meta);
  return <UploadImagesFormLiStyle>{name}</UploadImagesFormLiStyle>;
}

// eslint-disable-next-line react/prop-types
function Layout({ input, previews, submitButton, dropzoneProps }) {
  return (
    <div>
      {previews}
      {/* <div {...dropzoneProps}>{input}<button type='button' onClick={}>삭제</button></div> */}
      {submitButton}
    </div>
  );
}

function DropzoneInputContent(files, extra) {
  const { reject } = extra;
  const { name, remove } = files;
  if (!reject) {
    return '이미지를 첨부해주세요';
  }
  if (reject) {
    return 'jpg, jpeg, png만 업로드 가능합니다';
  }
  if (files) {
    return name;
  }
  // eslint-disable-next-line jsx-a11y/no-static-element-interactions
  // return <span className="dzu-previewButton" onClick={remove} />
}

// eslint-disable-next-line react/prop-types
function UploadImages({ onClose, onSuccess, uploadMethod }) {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  const methods = useForm({
    mode: 'onBlur',
  });

  const { urls, uploadFile } = watch();

  // const { project_id: projectId } = useSelector((state) => state.user.me) || {};

  // const [currMetadata, setCurrMetadata] = useRecoilState(metadataState);
  const [fileArray, setFileArray] = useState([]);
  // const [fileName, setFileName] = useState([]);
  const [forDynamicallyAdd, setForDynamicallyAdd] = useState(['forDynamicallyAdd']);
  const [clickIndex, setClickIndex] = useState(0);

  const handleClickForm = (e) => {
    e.stopPropagation();
  };

  const onSubmit = (data) => {
    if (uploadMethod === 'uploadImagesURL') {
      // addImagesURL(Object.values(data.urls));
    }
    if (uploadMethod === 'uploadImagesDirect') {
      console.log(fileArray);
      // addImagesDirect(fileArray);
    }
  };

  // 현재 UploadImage를 제외한 곳을 클릭하면 UploadImages창 닫기
  useEffect(() => {
    window.addEventListener('click', onClose);
    return () => window.removeEventListener('click', onClose);
  }, []);

  useEffect(() => {
    setValue('urls', ['']);
    setValue('uploadFile', fileArray);
    // setFileArray([...fileArray, acceptedFiles]);
    // setValue("uploadFile", [""]);
  }, []);

  useEffect(() => {
    console.log('전송할모든파일', fileArray);
    // setClickIndex();
  }, [fileArray, forDynamicallyAdd, uploadFile, clickIndex]);

  const handleChangeStatus = ({ meta }, status) => {
    console.log(status, meta);
    console.log(status, meta.name);
  };

  const handleSubmitdd = (files, allFiles) => {
    setFileArray(allFiles);
    // addImagesDirect(allFiles);
  };
  const handleChaasfwengeStatus = ({ meta, file }, status) => {
    console.log(status, meta, file);
  };
  const handleSusfwefbmit = files => {
    console.log(files.map(f => f.meta));
  };
  return (
    <FormProvider {...methods}>
      <UploadImagesForm onClick={handleClickForm} onSubmit={handleSubmit(onSubmit)}>
        <div className='image-body'>
          <div className='image-body-info'>이미지를 직접 첨부해주세요. (png, jpeg, jpg만 업로드 가능합니다.)</div>
          {/* <Dropzone
            inputWithFilesContent={<ReactSVG src={PlusImage} />}
            submitButtonContent='확인'
            accept='image/jpg, image/jpeg, image/png'
            inputContent={DropzoneInputContent}
            onSubmit={handleSubmitdd}
            // LayoutComponent={Layout}
            styles={{
              input: { display: 'none' },
            }}
            PreviewComponent={Preview}
          /> */}
          <Dropzone
            onChangeStatus={handleChaasfwengeStatus}
            onSubmit={handleSusfwefbmit}
            accept="image/*"
            inputContent={DropzoneInputContent}
            inputWithFilesContent="Dodaj još"
            submitButtonContent="Pošalji"
            PreviewComponent={Preview}
          />
          {/* <FileInput accept='image/png, image/jpg, image/jpeg, image/gif' name='file alt text' label='File Upload' /> */}
        </div>
      </UploadImagesForm>
    </FormProvider>
  );
}

export default UploadImages;
