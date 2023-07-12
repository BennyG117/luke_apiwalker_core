import React from "react";

const ObiImage = () => {


  return (
    <div>
        {/* <img src="https://images.hellomagazine.com/horizon/square/991a4758f0ae-star-wars-ep-3-t.jpg" alt="Obi-Wan"/>     */}
        <img src={require("../images/obiwan.jpg")} alt={"Obi-Wan Kenobi"}/>
    </div>

  )
}


export default ObiImage