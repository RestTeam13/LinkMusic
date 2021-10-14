import React from "react";
import './styles.css'
import './fonts.css'
import Header from "./Header";
import BlockCatalog from "./BlockCatalog";
import BlockForm from "./BlockForm";

function App() {
  return (
      <div>
          <Header/>
          <BlockCatalog/>
          <BlockForm/>
      </div>
  );
}

export default App;
