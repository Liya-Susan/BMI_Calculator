import React from 'react'

function bmiscore({bmiNo,bmiName,changeweight}) {
  return (
    <div className='card text-center shadow ' style={{padding:'10px'}}>
      <div className='card-body'>
         <strong >Your BMI Score</strong>
         <div className='row justify-content-center'>
         <h3 className='p-3 my-2 alert alert-primary col-4 ' >{bmiNo}</h3>
         </div>
         
         <h4 className='text-primary '>{bmiName}</h4>
         {changeweight.type === "positive" && (
        <div className="fs-4">You need lose <span className="h5">{changeweight.value} kg</span> </div>
      )}
      {changeweight.type === "negative" && (
        <div className="fs-4">You need gain <span className="h5">{changeweight.value} kg</span> </div>
      )}
       {changeweight.type === "normal" && (
        <div className="fs-4">You weight is Normal,Good for you </div>
      )}
      </div>
    </div>
  )
}

export default bmiscore
