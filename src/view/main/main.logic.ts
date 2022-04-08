import {useState} from 'react';
import {useDispatch} from 'react-redux';
export const MainLogic = () => {
  const dispatch = useDispatch();
  const [childData, setChildData] = useState(-1);

  console.log('child data: ', childData);

  const handleChildDataSent = (data: any) => {
    setChildData(data);
  };

  return {dispatch, handleChildDataSent};
};
