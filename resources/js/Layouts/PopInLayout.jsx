import React from "react";

const PopInLayout = ({children, handleClose}) => {

  return(
      <div>
          <button onClick={handleClose}>Fermer</button>
          {children}
      </div>
  )
}

export default PopInLayout;
