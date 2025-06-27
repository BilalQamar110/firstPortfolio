import React from 'react';

const Cart = ({ projects, onRemove, onClear }) => {
  const total = projects.length;

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-center">📁 Saved Projects</h2>

      {total === 0 ? (
        <p className="text-gray-500 text-center">No projects added yet.</p>
      ) : (
        <>
          <ul className="divide-y divide-gray-200">
            {projects.map((project) => (
              <li key={project.id} className="py-3 flex justify-between items-center">
                <div>
                  <p className="font-medium">{project.title}</p>
                  <p className="text-sm text-gray-500">{project.category}</p>
                </div>
                <button
                  onClick={() => onRemove(project.id)}
                  className="text-red-500 hover:text-red-700 text-sm"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-4 text-right">
            <p className="text-sm text-gray-600 mb-2">Total Projects: {total}</p>
            <button
              onClick={onClear}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm"
            >
              Clear All
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
