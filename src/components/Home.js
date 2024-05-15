import React from "react";
import AddNote from "./AddNote.js"
import Notes  from './Notes';

const Home = () => {

  return (
    <div>
      <div className="container my-5">
      <AddNote/>
      <Notes/>
      </div>
    </div>
  );
};

export default Home;
