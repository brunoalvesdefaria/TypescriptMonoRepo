import React from 'react';
import Library from 'library';

function App() {
  React.useEffect(() => {
    const typedParam: ParamType = 'b';
    Library.typedParamMethod(typedParam);
  }, []);

  return (
    <div className="web-ui">Web UI</div>
  );
}

export default App;
