import React from "react";

const PopInLayout = ({children, handleClose}) => {

  return(
      <div className="outer-space" onClick={handleClose}>
          <div className="popin-body" onClick={e => e.stopPropagation()}>
              <div className="close-btn" onClick={handleClose}>❌</div>
              {
                  children
              }
          </div>
      </div>
  )
}

export default PopInLayout;
