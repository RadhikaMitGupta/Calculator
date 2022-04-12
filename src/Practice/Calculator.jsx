import React,{useState,useRef} from 'react'
import "./Calculator.css"
const Calculator = () => {
const [input,setInput]=useState("")
const  buttonRef=useRef(null)
    var arr=[1,2,3,4,5,6,7,8,9,0]
    var arr2=['+','-','*','/',]
    const handleClick=(e)=>{
        setInput(input.concat(e.target.value))
    }
    const clearDisplay=()=>{
        setInput('')
    }
    const PopInput=()=>{
        setInput(input.slice(0,-1))
    }
    const calculate=()=>{
         
        setInput(result(input))
    }
    function result(input){
        var sum='';
        let a=""
        let b=0
        var operation=""
        for(var i=0;i<input.length;i++){
            if(input[i]!=='+' && input[i]!=='-' && input[i]!=='*' && input[i]!=='/'){
               sum+=input[i]
            }
            else if((input[i]==="+"  || input[i]==="-" || input[i]==="*" || input[i]==="/") && a===""){
                  operation=input[i]
                  a=sum
                  sum=""
              }
            else if((input[i]==="+" || input[i]==="-" || input[i]==="*" || input[i]==="/") && a!==undefined){
                if(operation==="+"){
                    b=+a+(+sum)
                }
                else if(operation==="-"){
                  b=+a-(+sum)
              }
            else if(operation==="*"){
                  b=+a*(+sum)
              }
            else if(operation==="/"){
                  b=+a/(+sum)
              }
              sum=""
              a=b
              operation=input[i]
              
            }
          }
              if(operation==="+")
            {
              b=a+(+sum)
            }
              else if(operation==="-")
            {
              b=a-(+sum)
            }
            else if(operation==="*")
            {
              b=a*(+sum)
            }
            else if(operation==="/")
            {
              b=a/(+sum)
            }
          
            return b;
      }
   const ThemeChange1=()=>{
      var body=  document.querySelector("body")
      body.style.color="white"
      body.style.backgroundColor="#000"
      var tr=  buttonRef.current.childNodes
      tr=Array.from(tr)
      tr.forEach((e)=>{
      e.style.backgroundColor="#666"
      e.style.color="white"
      e.style.borderColor="white"
      })
    }
  const ThemeChange2=()=>{
    var body=  document.querySelector("body")
    body.style.color="white"
    body.style.backgroundColor="#fff"
    var tr=  buttonRef.current.childNodes
    tr=Array.from(tr)
    tr.forEach((e)=>{
    e.style.backgroundColor="#f0f0f0"
    e.style.color="black"
    e.style.borderColor="black"
    })
  }
      
  return (
    <div>
        <button onClick={ThemeChange1}>darkTheme</button>
        <button onClick={ThemeChange2}>lightTheme</button>
        <div id='Container'>
            <input type="text" name="" id="input" value={input} placeholder="0"/><br></br>
            <div id="container1" ref={buttonRef}>
            {arr.map((e)=>{
                return (
                    <input type="button" value={e} className="button" onClick={handleClick}/>
                )
                
            })}
            {arr2.map((e)=>{
                return(
                    <input type="button" value={e} className="button" onClick={handleClick}/>
                    )
            })}
              <input type="button" value="=" onClick={calculate} className="button"/>
              <input type="button" value="Clear"  onClick={clearDisplay} className="button button1"/>
              <input type="button" value="X"  onClick={PopInput} className="button"/>
           </div>
        </div>
      
    </div>
  )
}

export default Calculator
