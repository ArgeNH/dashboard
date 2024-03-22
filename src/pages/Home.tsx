import { useLocation } from 'react-router-dom';

export const Home = () => {
  const location = useLocation();
  return (
    <div className="flex justify-center items-center h-full">
      <h1 className="text-3xl">
        <code className="bg-secondary-200 p-2 rounded-md">
          {location.pathname}
        </code>
      </h1>
    </div>
  );
};
