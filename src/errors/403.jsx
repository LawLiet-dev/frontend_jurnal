import { Link } from 'react-router-dom';

const AccessDenied = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <p className="text-8xl font-bold text-red-500">403</p>
        <h2 className="text-2xl font-semibold mt-4">Access Denied</h2>
        <p className="mt-2 text-gray-600">
          You don't have permission to access this page.
        </p>
        <Link 
          to="/"
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 inline-block"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default AccessDenied;