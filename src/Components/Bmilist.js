import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


function bmilist({range,bmi}) {
  return (
    <div className='shadow-sm text-center'>
      <ul className='list-group'>
        <li className='list-group-item p-2'>
          <div className='row'>
            <div className='col font-weight-bold '>Type</div>
            <div className='col font-weight-bold' >BMI</div>
            <div className='col font-weight-bold'>Weight</div>
          </div>
        </li>
        <li className={ bmi < 18.5 ? "list-group-item-action list-group-item-primary list-group-item p-2":"list-group-item p-2"}>
          <div className='row '>
            <div className='col'>Underweight</div>
            <div className='col'>&lt; 18.5 </div>
            <div className='col'>&lt; {range.Underweight.low +'kg'}</div>
          </div>
        </li>
        <li className={ bmi >18.5 && bmi<24.9 ? "list-group-item-action list-group-item-primary list-group-item p-2":"list-group-item p-2"}>
          <div className='row'>
            <div className='col'>Normal</div>
            <div className='col'> 18.5-24.9 </div>
            <div className='col'>{range.Normal.low + "kg -" +range.Normal.high+"kg"}</div>
          </div>
        </li>
        
        <li className={  bmi >25 && bmi<29.9 ? "list-group-item-action list-group-item-primary list-group-item p-2":"list-group-item p-2"}>
          <div className='row'>
            <div className='col'>Over Weight</div>
            <div className='col'>25-29.9 </div>
            <div className='col'>{range.OverWeight.low + "kg -" +range.OverWeight.high+"kg"}</div>
          </div>
        </li>
        <li className={  bmi > 30 && bmi<34.9? " list-group-item-action list-group-item-primary  list-group-item p-2 ":"list-group-item p-2"}>
          <div className='row'>
            <div className='col'>Obesity class I</div>
            <div className='col'>30-34.9 </div>
            <div className='col'>{range.Obesityone.low + "kg -" +range.Obesityone.high+"kg"}</div>
          </div>
        </li>
        <li className={  bmi >35 && bmi<39.9 ? "list-group-item-action list-group-item-primary list-group-item p-2":"list-group-item p-2"}>
          <div className='row'>
            <div className='col'>Obesity class II</div>
            <div className='col'>35-39.9 </div>
            <div className='col'>{range.Obesitytwo.low + "kg -" +range.Obesitytwo.high+"kg"}</div>
          </div>
        </li>
        <li className={ bmi > 40 ? "list-group-item-action list-group-item-primary list-group-item p-2":"list-group-item p-2"}>
          <div className='row'>
            <div className='col'>Obesity class III</div>
            <div className='col'> &gt; 40 </div>
            <div className='col'>&gt; {range.Obesitythree.high+"kg"}</div>
          </div>
        </li>

      </ul>
      
    </div>
  )
}

export default bmilist
