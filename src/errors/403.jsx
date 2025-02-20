const AccessDenied = () => {
  return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="text-center">
              <h1 className="text-6xl font-bold text-red-500">403</h1>
              <h2 className="text-2xl font-semibold mt-4">Access Denied</h2>
              <p className="mt-2 text-gray-600">
                  You don't have permission to access this page.
              </p>
              <button
                  onClick={() => window.history.back()}
                  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                  Go Back
              </button>
          </div>
      </div>
  );
};

export default AccessDenied;