import React from 'react';
import FileUpload from './FileUpload';
import { Container } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <Container maxWidth="sm">
        <FileUpload />
      </Container>
    </div>
  );
}

export default App;
