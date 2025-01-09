import React from 'react';
import PropTypes from 'prop-types';

const Alert = ({ type, message, onClose }) => {
  // Tailwind classes for different alert types
  const typeClasses = {
    success: 'bg-green-100 text-green-800 border-green-400',
    error: 'bg-red-100 text-red-800 border-red-400',
    warning: 'bg-yellow-100 text-yellow-800 border-yellow-400',
    info: 'bg-blue-100 text-blue-800 border-blue-400',
  };

  return (
    <div
      className={`flex items-center justify-between border-l-4 p-4 rounded shadow-sm ${
        typeClasses[type] || typeClasses.info
      }`}
    >
      <span className="flex-1">{message}</span>
      {onClose && (
        <button
          onClick={onClose}
          className="text-lg font-bold leading-none text-gray-600 hover:text-gray-900 focus:outline-none"
        >
          &times;
        </button>
      )}
    </div>
  );
};

Alert.propTypes = {
  type: PropTypes.oneOf(['success', 'error', 'warning', 'info']),
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func,
};

Alert.defaultProps = {
  type: 'info',
  onClose: null,
};

export default Alert;
