import React,{useState}  from 'react';  // useState is a Hook use to use State.
// State help us to change the value of a variable.

export default function TextForm(props) {
// Syntax for defining useState is given below:
 const[text,setText]=useState("Enter Text Here");   //Here the value "Enter Text Here" is default value passed to variable text.
 // Here we are using Array Destructuring concept and useState destructure the array as variable and function ie text is variable and setText is function which is used to change the value of variable text.

// text="New Text"; //wrong way to change state or value.
// setText("New Text"); //Correct way to change state.

const handleUpClick=()=>{
    // console.log("Uppercase was clicked");
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase!!!","success");
}

const handleLowClick=()=>{
    // console.log("Uppercase was clicked");
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase!!!","success");
}
const handleClearClick=()=>{
    // console.log("Uppercase was clicked");
    setText('');
    props.showAlert("Text Cleared!!!","success");
}

 // Most important we will use it everytime while dealing with events.

const handleOnChange=(event)=>{
// console.log("On change");

setText(event.target.value);  // This is an eg of how to handle Events. 
// event.target.value is used to set the value of text which is targetted by the user.
}

const handleCopy=()=>{
    // let text=document.getElementById('myBox');
    // text.select(); 
    navigator.clipboard.writeText(text );    // To copy the values.
    // document.getSelection().removeAllRanges();    // This is to remove the selection.
    props.showAlert("Copied Text!!!","success");

    // While we are using navigator then we dont need the use of select and remove selections. 

}

const handleExtraSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join((' ')));
    props.showAlert("Extra Spaces Removed !!!","success");
}

  return ( 
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading} </h1>
         <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange}id="myBox" rows="8" style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743' }}></textarea>
{/* OnChange is an event handler which will call the function handleOnChange when we try to change the value of text. */}
        {/* Attribute "value" is used to set the value of textarea. */}
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1 " onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1 " onClick={handleLowClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1 " onClick={handleClearClick}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1 " onClick={handleCopy}>Copy Text</button>
         <button disabled={text.length===0} className="btn btn-primary mx-1 my-1 " onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>

    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h2>Your Text Summary</h2>
        <p>
            {/* {text.split(' ').filter((element)=>{return element.length!==0}).length}   words and {text.length} characters</p> */}
            {text.split(/\s+/).filter((element)=>{return element.length!==0}).length}   words and {text.length} characters</p>
            {/* /\s+/ is used to split for white spaces as well as new lines  */}
        {/* text.split('').length it will count number of white spaces */}
        {/*filter() function is used to apply filter in a code which means that if the condition written in filter is true and filter return true value then only the required operation will allow to perform the task. */}
        <p>{0.008 *text.split(' ').filter((element)=>{return element.length!==0}).length } Minutes read</p>
        {/* Here we are calculating time to read the complete passage which is average time to read 1 word * Total words */}
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </>
  );
}
