import React, { useState, useEffect } from 'react';





function Output() {

    const [obj, setObj] = useState('hi')
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true)
    
   useEffect(() => 
   {
    //  Router.get('/')
      fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
        if(response.ok){
          return  response.json()
        }
        throw response;
    })
    .then(data => setObj(data))
    .catch(error => {
        console.error('Error fetching data: ', error)
        setError(error)
    })

    .then(() => console.log(obj)) 
    .finally(() => {
        setLoading(false);
    })
   });
    

    return (
        <div>
            <p>{obj.id}</p>
        </div>
    )
}

export default Output