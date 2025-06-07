import React from 'react';

function Banner({ status, children, action, actionText, buttonClassName }) {
  return (
    <div className={`${status} banner`}>
      {children}
      {action && (
        <button onClick={action} className={`${buttonClassName} banner-button`}>
          {actionText}
        </button>
      )}
    </div>
  );
}

export default Banner;
