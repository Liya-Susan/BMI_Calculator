import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form} from 'react-bootstrap';


function Form1({getData}) {
  const [weight,setWeight] = useState("");
  const [height,setHeight] = useState("");
  const [alert,setAlert] = useState(false);
  const onSubmit =(e)=>{
      e.preventDefault();
      if (isNaN(weight) || isNaN(height)){
        setAlert(true);
      } else {
        getData(weight,height)
        setAlert(false);
        setHeight('');
        setWeight('');
      }
  };
  return (
    <div className='container card py-5px shadow col-md-4 ' style={{ marginBlockStart:'10px'}}>
      <div className='card-body ' >
      <h4 style={{textAlign:'center'}}>BMI Calculator</h4>
     <Form  onSubmit={onSubmit}>
      
      <div className='row '>
        <div className='col'>
          <label>Weight(in kg):</label>
          <br/>
          <input type='text' className='form-control' value={weight} onChange={(e)=>
            setWeight(e.target.value) } required 
          />
        </div>
        <div className='col'>
          <label>Height(in m):</label>
          <br/>
          <input type='text' className='form-control' value={height} onChange={(e)=>
            setHeight(e.target.value)} required/>
        </div>
        
         
        
      </div>
      <input type="submit" className='btn btn-primary ' style={{marginBlockStart :'20px'}} value="Get BMI"/>
      </Form>
      
      </div>
      {alert &&(<div className='alert alert-danger'role={alert}>Please enter valid datas</div>)}   
      
    </div>
    
    
  )
}

export default Form1
