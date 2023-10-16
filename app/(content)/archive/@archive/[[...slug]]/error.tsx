"use client";
const Error = ({
  error,
}: {
  error: {
    message: string;
  };
}) => {
  return (
    <div className='flex py-12 flex-col items-center justify-center  bg-gray-900 text-red-800 p-4'>
      <div className='bg-white shadow-lg rounded-lg p-6 max-w-md text-center'>
        <h2 className='text-3xl font-bold mb-4'>Error Occurred!</h2>
        <p className='text-lg'>{error.message}</p>
      </div>
    </div>
  );
};

export default Error;
