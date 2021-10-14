import React from "react";
import './styles.css'
import './fonts.css'
import Header from "./Header";
import BlockCatalog from "./BlockCatalog";
import BlockForm from "./BlockForm";
import Footer from "./Footer";

function App() {
  return (
      <div>
          <Header/>
          <BlockCatalog/>
          <BlockForm/>
          <Footer/>
      </div>
  );
}

export default App;
