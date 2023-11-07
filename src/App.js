import './App.css';
import React from 'react';
import Navbar from './components/navbar/navbar';
import Banner from './components/banner/banner';
import RowPost from './components/RowPost/RowPost';
import {originals,action,comedy,romance,horror,documentaries } from './urls'


function App() {
  return (
    <div className="App"> 
      <Navbar />
      <Banner /> 
      <RowPost url = {originals} title ='Netflix Originals'/>
      <RowPost url = {action} title ='Action' isSmall />
      <RowPost url = {comedy} title ='Comedy' isSmall />
      <RowPost url = {romance} title ='Romance' isSmall />
      <RowPost url = {horror} title ='Horror' isSmall />
      <RowPost url = {documentaries} title ='Documentaries' isSmall />
    </div>
  );
}
 
export default App;
