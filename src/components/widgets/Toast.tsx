"use client"

import { ToastState } from '@/libs/atoms';
import { IToast } from '@/libs/interface/toast.interface';
import { useRecoilValue } from 'recoil';

const Toast: React.FC = () => {
  const { message, isVisible } = useRecoilValue<IToast>(ToastState);

  return (
    <>
      {isVisible && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-600 z-[999999] text-white px-4 py-1 rounded-full shadow opacity-80 transition-opacity duration-200">
          {message}
        </div>
      )}
    </>
  );
};

export default Toast;