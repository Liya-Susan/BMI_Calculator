import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form1 from './Components/Form';
import Bmiscore from './Components/Bmiscore';
import Bmilist from './Components/Bmilist';


function App() {
  const [changeweight,setchangeweight]=useState({type:'',value:''})
  const [bmi,setBmi] = useState('')
  const [bmiType,setBmiType] = useState('')
  const [show,setShow] =useState(false)
  const [bmiRange,setBmiRange] = useState({
    Underweight :{low:''},
    Normal :{low:'',high:''},
    OverWeight:{low:'',high:''},
    Obesityone:{low:'',high:''},
    Obesitytwo:{low:'',high:''},
    Obesitythree :{low:'',high:''}
  })

  
   
  const onFormSubmit = (w,h) =>{
    
       let b = calBmi(w,h);
       setBmi(b);
       let bType = calBmiType(b);
       setBmiType(bType);
       const range={
        Underweight : {low : calWeight(18.5, h)},
        Normal :{low:calWeight(18.5, h),high:calWeight(24.9, h)},
        OverWeight:{low:calWeight(25, h),high:calWeight(29.9, h)},
        Obesityone:{low:calWeight(30, h),high:calWeight(34.9, h)},
        Obesitytwo:{low:calWeight(35, h),high:calWeight(39.9, h)},
        Obesitythree :{high:calWeight(40, h)}
        
      }
      setBmiRange(range);
      setchangeweight(calchangeweight(b,w,range));
      setShow(true)
  }
  const calBmi=(w,h)=> (w/(h*h)).toFixed(2);
  const calWeight=(b,h)=>(b*h*h).toFixed(2);
  const calchangeweight=(b,w,range)=>{
    let changeobj;
    if (b > 24.9){
      changeobj ={type:"positive",value:(w-range.Normal.high).toFixed(2),
    }; return changeobj;}
    else if (b < 18.5) {
      changeobj = {
        value: (range.Normal.low - w).toFixed(2),
        type: "negative",
      };
      return changeobj;
    } else {
      changeobj = { value: 0, type: "normal" };
      return changeobj;
    }
  }
  const calBmiType=(bmi)=>{
    if (bmi<18.5){
      return "Underweight";
    } else if (18.5 < bmi && bmi < 24.9) {
      return "Normal";
    } else if (24.9 < bmi && bmi < 29.9) {
      return "Over Weight";
    } else if (29.9 < bmi && bmi < 34.9) {
      return "Obesity Class I";
    } else if (34.9 < bmi && bmi < 39.9) {
      return "Obesity Class II";
    } else if (bmi > 39.9) {
      return "Obesity Class III";
    }
  }
  
  return (
    <>
        
        <Form1 getData={onFormSubmit}/>
        {show && (
        <div className='row m-3 '>
          <div className='col-md-6 '>
             <Bmiscore bmiNo={bmi} bmiName={bmiType} changeweight={changeweight}/>
          </div>
          <div className='col-md-6 '>
          <Bmilist range={bmiRange} bmi={bmi}/>
          </div>
        </div>)}
        
        
        
    </>
      
  )
}

export default App

