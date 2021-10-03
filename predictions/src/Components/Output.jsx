import React, { useState, useEffect } from 'react';




function Output() {

    const [obj, setObj] = useState('hi')
    
   useEffect(() => 
   {
       fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(data => setObj(data))
    .then(() => console.log(obj)) 
   });
    

    return (
        <div>
            <p></p>
        </div>
    )
}

export default Output