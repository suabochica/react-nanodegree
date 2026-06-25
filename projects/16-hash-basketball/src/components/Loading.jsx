import * as React from 'react';

function Delayed ({ children, waitBeforeShow = 1000 }) {
  const [isShown, setIsShown] = React.useState(false);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setIsShown(true);
    }, waitBeforeShow);

    return () => clearTimeout(timeout);
  }, [waitBeforeShow]);

  return isShown ? children : null;
}

export default function Loading () {
  return (
    <Delayed>
      <div className='loading'>
        <p>Loading...</p>
      </div>
    </Delayed>
  );
}