import React from 'react';
import './Hero.css';

function InternetStatus() {
  const [isOnline, setIsOnline] = React.useState(navigator.onLine);

  React.useEffect(() => {
    // Update network status
    const handleStatusChange = () => {
      setIsOnline(navigator.onLine);
    };

    // Listen to the online status
    window.addEventListener('online', handleStatusChange);

    // Listen to the offline status
    window.addEventListener('offline', handleStatusChange);

    // Specify how to clean up after this effect for performance improvment
    return () => {
      window.removeEventListener('online', handleStatusChange);
      window.removeEventListener('offline', handleStatusChange);
    };
  }, [isOnline]);

  return (
    <div className="ml-5 mt-2">
        <h3>Internet Status</h3>
        {isOnline ? (
          <h1 className="online">You Are Online</h1>
        ) : (
          <h1 className="offline">You Are Offline</h1>
        )}
    </div>
  );
}

export default InternetStatus;
