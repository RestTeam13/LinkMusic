import React from "react";
import './styles.css'
import './fonts.css'
import Header from "./Header";
import BlockCatalog from "./BlockCatalog";
import BlockForm from "./BlockForm";
import Footer from "./Footer";
import BlockSuggestion from "./BlockSuggestion";

function App() {
  return (
      <div>
          <Header/>
          <BlockSuggestion/>
          <BlockCatalog/>
          <BlockForm/>
          <Footer/>
      </div>
  );
}

export default App;
