"use client";
import { useRouter } from "next/navigation";

const ImageModal = ({ children }: { children: React.ReactNode }) => {
  const route = useRouter();
  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70'
      onClick={route.back}
    >
      {children}
    </div>
  );
};

export default ImageModal;
