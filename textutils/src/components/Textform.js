import React ,{useState} from 'react';

 export default function TextForm(props) {

const handleclear = () => {
  console.log("clear" + text);
  setText(" ");
  
}
  const handleLoclick =() => {
    console.log("lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    
  }
  const handleUpclick = () =>{
     console.log("uppercase was clicked" + text);
     let newText = text.toUpperCase();
     setText(newText);
  }

  const handleonChange = (event) =>{
    console.log("on change");
    setText(event.target.value);

 }
  const [text, setText] = useState('Enter Text Here');
 /*  text ="to creation";// wrong way
  setText("new text");// corecet */
  return(<>

    <div className="container">
    <h1>{props.heading}</h1>
    <div className="mb-3">
      <textarea className="form-control" value={text} onChange={handleonChange} id="mybox" rows="8"></textarea>
    </div>

      <button className="btn btn-success mx-1" onClick={handleUpclick} >convert uppercase</button>
      <button className="btn btn-success mx-2" onClick={handleLoclick} >convert lowercase </button>
      <button className="btn btn-success mx-2" onClick={handleclear} >clear text</button>


      </div>

      <div className="container my-3">
        <h1>Your text summary</h1>
        <p>{text.split(" ").length}  words and {text.length} characters</p>
        <p>{0.001 * text.split("   ").length }minutes readable</p>
      </div><br />

      <div>
        <h3>Preview</h3>
        <p>
        {text}
        </p>
      </div>
</>
  )
}