import React ,{useState} from 'react';

 export default function TextForm(props) {
                                                     
const [on,setOn] = useState(true);


  const handleLoclick =() => {
    console.log("lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowercase!","success");
   
  }
  const handleUpclick = () =>{
     console.log("uppercase was clicked" + text);
     let newText = text.toUpperCase();
     setText(newText);
     props.showAlert("converted to uppercase!","success");

     
  }

  const handleonChange = (event) =>{
    console.log("on change");
    setText(event.target.value);

 }
  const [text, setText] = useState('Enter Text Here');
 /*  text ="to creation";// wrong way
  setText("new text");// corecet */
  return (
    <>
      <div className="container" style={{
              Color: props.mode === "dark" ? "white" : "black"}}>
        <h1>{props.heading}</h1>
  
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleonChange}
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color : props.mode === "dark" ? "grey" : "black",
            }}
          ></textarea>
        </div>
  
        <button className="btn btn-success mx-1" onClick={handleUpclick}>
          convert uppercase
        </button>
        <button className="btn btn-success mx-2" onClick={handleLoclick}>
          convert lowercase
        </button>
        <button className="btn btn-success mx-2" onClick={handleonChange}>
          clear text
        </button>
  
        <div className="container my-3" style={{
             Color: props.mode === "dark" ? "white" : "white"}}>
          <h1  style={{
             backgroundColor: props.mode === "dark" ? "white" : "white"}}>Your text summary</h1>
          <p>{text.split(" ").length} words and {text.length} characters</p>
          <p>{0.001 * text.split(" ").length} minutes readable</p>
        </div>
  
        <div>
          <h3>Preview</h3>
          <p>{text}</p>
  
          <h2>Light is {on ? "on" : "off"}</h2>
          <button className="button" onClick={() => setOn(!on)}>
            Switch
          </button>
        </div>
      </div>
    </>
  );
 }  




