import React, { useState } from 'react'

const Slider = ({slides}) => {
 const [index, setIndex] = useState(0);

 const next = ()=>{
    setIndex(i => i+1);
 }
 const previous = ()=>{
    setIndex(i => i-1);
 }
 const restart = ()=>{
    setIndex(0);
 }
 
    
 return (
    <>
    <div className="text-center d-flex m-4 justify-content-center">
        <div className="container">
        <button disabled={index === 0} className="btn btn-dark outlined mx-2" onClick={restart}>Restart</button>
        <button disabled={index === 0} className="btn btn-success outlined mx-2" onClick={previous}>Prev</button>
        <button disabled={index === slides.length-1} className="btn btn-success outlined mx-2" onClick={next}>Next</button>
        </div>
    </div>
    <div className="card text-center container p-5 mb-5">
        <h1 className='mb-3'>{slides[index].title}</h1>
        <p>{slides[index].text}</p>
    </div>
    </>
  )
}

export default Slider