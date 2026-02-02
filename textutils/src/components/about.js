import React from 'react'

export default function about(useState) {

 
   const [mystyle, setMystyle] = useState(   {
    color: 'black',
    backgroundColor: 'white'
  });

  const  [btntext, setbtntext] = useState(
 "Enable Dark Mode"
  );

  const setmypath = () =>{
  if ( mystyle.color == 'white'){
    setMystyle({
        color: 'black',
    backgroundColor: 'white'

    })
   setbtntext ("Enable Light Mode")
  }
  else{

    setMystyle({
      color: 'white',
  backgroundColor: 'black'
    
  })
   setbtntext("enable dark mode")
   setbtntext("Enable dark mode")
  }
  
  return (
    <div className="container" style={myStyle}>
      <h3 className='my-2'>About Us</h3>
     <div class="accordion accordion-flush" id="accordionFlushExample" style={myStyle}>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body" style={myStyle}>Placeholder content for this accordion, which is intended to demonstrate the 
        <code>.accordion-flush</code> class. This is the first item’s accordion body.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body" style={myStyle}>Placeholder content for this accordion, which is intended to demonstrate the 
        <code>.accordion-flush</code> class. This is the second item’s accordion body.
         Let’s imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body" style={myStyle}>Placeholder content for this accordion, which is intended to demonstrate the 
        <code>.accordion-flush</code> class. This is the third item’s accordion body. 
        Nothing more exciting happening here in terms of content, but just filling up the space to make it look, 
        at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
</div>
<div className=' my-3'>

  <button type="button" onClick={setmypath} className="btn btn-success">Enable dark mode</button>

</div>

</div>
 
  )}}

