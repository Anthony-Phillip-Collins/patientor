// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useEffect, useState } from 'react';
import styles from './app.module.css';

import NxWelcome from './nx-welcome';

export function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then((d) => {
        console.log(d);
        setData(d.message);
      });
  }, []);

  return (
    <div>
      <NxWelcome title="frontend" />
    </div>
  );
}

export default App;
