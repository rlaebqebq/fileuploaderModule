import React, { useState } from 'react';
import axios from 'axios';
import { useMutation } from 'react-query';

// 허용가능한 확장자 목록!
const ALLOW_FILE_EXTENSION = 'jpg,jpeg,png';
const FILE_SIZE_MAX_LIMIT = 5 * 1024 * 1024; // 5MB

const FileUploadButton = () => {
  const [file, setFile] = useState<File>();

  const fileUploadHandler = useMutation(['fileUploadHandler'], {
    mutationFn: (file) => {
      const formData = new FormData();
      formData.append('file', file);

      return axios.post('/design/figure/upload', formData);
    },
    onSuccess: () => {
      console.log('success');
    },
  });

  // const fileUploadHandler = (files: File) => {
  //   // console.log(e.files[0]);
  // }

  const fileUploadValidHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    const files = (target.files as FileList)[0];

    if (!files) {
      return;
    }

    if (!fileExtensionValid(files)) {
      target.value = '';
      // eslint-disable-next-line no-alert
      alert(`이미지 타입이 올바르지 않습니다, ${ALLOW_FILE_EXTENSION}] 타입의 이미지를 사용해주세요.`);
      return;
    }

    if (files.size > FILE_SIZE_MAX_LIMIT) {
      target.value = '';
      // eslint-disable-next-line no-alert
      alert('업로드 가능한 최대 용량은 5MB입니다. ');
      return;
    }
    setFile(files);
    // fileUploadHandler(files);
    fileUploadHandler.mutate(files);
  };

  return (
    <>
      <h1>파일 업로드 페이지</h1>
      <input type='file' onChange={fileUploadValidHandler} />
      <br />
      <br />
      <br />
      {/* <button type='button' onClick={fileUploadHandler}>
        파일 업로드 하기
      </button> */}
      <hr />
    </>
  );
};

const fileExtensionValid = ({ name }: { name: string }): boolean => {
  const extension = removeFileName(name);
  if (!(ALLOW_FILE_EXTENSION.indexOf(extension) > -1) || extension === '') {
    return false;
  }
  return true;
};

const removeFileName = (originalFileName: string): string => {
  const lastIndex = originalFileName.lastIndexOf('.');
  if (lastIndex < 0) {
    return '';
  }
  return originalFileName.substring(lastIndex + 1).toLowerCase();
};

export default FileUploadButton;
