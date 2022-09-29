import React, { useState } from 'react'
import './Card.css'

function Card() {
  const [ name, setName]=useState('SAADAOUI SAMIA');
  const [ job, setJob]=useState('STUDENT AT GOMYCODE');
  const [ about, setAbout]=useState('But I must explain to you how all this mistaken idea of denouncing pleasure and  praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.No one rejects, dislikes, or avoids pleasure itself, because it is pleasure');
  
  return (
    <div className='Card'>
       <div className='upper-container'>
          <div className='image-container'>
                <img src="https://scontent.ftun9-1.fna.fbcdn.net/v/t1.6435-9/152810614_2163366843795163_2887042984423914421_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=174925&_nc_ohc=6b1EVmT2RAgAX8J1MS_&_nc_ht=scontent.ftun9-1.fna&oh=00_AT-1V6RufdkRZpzqn5sLc1xnBAfcBrEYEMQJxKQjOYqPNg&oe=6347A40D " alt='' height="100px" width="100px" />
          </div>
        </div>
        <div className="lower-container">
        <h3> {name}</h3>
        <h4>{job}</h4>
        <p>{about}</p>   
        
        </div>
    <div/>
    </div>
  )
}

export default Card