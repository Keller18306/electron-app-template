import React, { useEffect, useState } from 'react';

function App() {
  const [wind, setWindow] = useState<string>('');

  useEffect(() => {
    window.require('electron').ipcRenderer.on('set-window', (event: any, wind: string) => {
      setWindow(wind)
    })
  }, []);

  switch (wind) {
    
  }

  return 'Неизвестное окно';
}

export default App;
