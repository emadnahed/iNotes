// import React from "react";

// const NoteItem = (props) => {
//   const { title, tag, description } = props;
//   return (
//     <div className="col-md-3">
//       <div className="card text-bg-primary my-5" style={{ maxWidth: "15rem", minHeight:"15rem" }}>
//         <div className="card-header">{title}</div>
//         <div className="card-body">
//           <p className="card-text">{description}</p>
//           <h6 className="card-title">Tag: {tag}</h6>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NoteItem;

import React, {useContext} from "react";
import alertContext from "../context/alerts/alertContext";

const NoteItem = (props) => {
  
  const { showAlert } = useContext(alertContext);
  const { title, tag, description, id, deleteNote, note, updateNote } = props;
  return (
    <div className="col-md-3">
      <div className="card-deck my-5">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {description}
            </p>
            <p className="card-text">
              <small className="text-muted">{tag}</small>
            </p>
            <i className="fa-solid fa-trash mx-2" title="delete" onClick={
              ()=>
              {deleteNote(id)
              showAlert( {message:"Note deleted successfully", type:"warning"} )
              }
              } ></i>
            <i className="fa-solid fa-pen-to-square mx-2" title="edit" onClick={()=>{updateNote(note)}}            
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
