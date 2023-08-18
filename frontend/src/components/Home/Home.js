import React from 'react'
import "./home.css"
import textloading from "../guid.png"
function Home() {
  return (
    <div className='home'>
      <p className='deschome'>
        Say goodbye to complex interfaces.
        FormEase offers a clean and minimalist
        form builder that allows you to build a
        form by simple filling a Form. Which act
        as template form generation.
      </p>
      <div className='withimg'>
        <div >
          <h5>Here a quick guid to create simple form</h5>
          <lu>
            <li>
              give a name to your form
            </li>
            <li>
              write a description and details for form
            </li>
            <li>
              write all label that are require, seperated by comma
            </li>
          </lu>
        </div>
        <div >
        <img className='img' src={textloading} alt='alt'/>
        </div>
      </div>
    </div>
  )
}

export default Home