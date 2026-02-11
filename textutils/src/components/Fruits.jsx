function fetchFruitData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(['Apple', 'Banana', 'Cherry']);
      }, 1000);
    });
  }
  
  let fruitResource = {
    data: null,
    read() {
      if (this.data !== null) return this.data;
      throw fetchFruitData().then(result => this.data = result);
    }
  };

  function MyFruits()  {
    const fruits = fruitResource.read();
    return (
      <>
        <h2  className='container text-center my-3'>My Favorite Fruits</h2>          
        <ul className='container text-center my-3'>
          {fruits.map((fruit, index) => (
            <li className='container text-center my-3' key={index}>{fruit}</li>
          ))}
        </ul>
      </>
    );
  }
  
  export default MyFruits;
  