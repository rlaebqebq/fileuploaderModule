import axios from 'axios';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

// eslint-disable-next-line react/prop-types
const RequireAuthImage = ({ src, alt = '', Loading, ...rest }) => {
  // Auth헤더를 담은 상태에서 src url을 통해 이미지 요청
  const {
    data,
    isLoading: isLoadingImage,
    isSuccess: isSuccessLoadingImage,
  } = useQuery([src], {
    queryFn: async () => {
      // blob형태로 반환된 데이터
      const { data } = await axios.get(src, { responseType: 'blob' });
      //   console.log(src, data);

      return data;
    },
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: true,
    retryDelay: 100,
  });
  // 이미지 주소
  const [imageSrc, setImageSrc] = useState();

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (data) {
      setImageSrc(URL.createObjectURL(data));
      return () => {
        // data가 바뀔때마다 이전 data에 대한 ObjectURL해제
        URL.revokeObjectURL(imageSrc);
      };
    }
  }, [data]);

  // eslint-disable-next-line consistent-return
  const checkLoading = () => {
    const tmp = Loading && !isLoadingImage;
    const tmp2 = isSuccessLoadingImage && imageSrc;
    if (Loading && isLoadingImage) {
      return Loading;
    }
    if (!Loading || (tmp && tmp2)) return <img src={imageSrc} alt={alt} {...rest} />;
    if (tmp && !tmp2) return null;
  };

  return checkLoading();
};

export default RequireAuthImage;
