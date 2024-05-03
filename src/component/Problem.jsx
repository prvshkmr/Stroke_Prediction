import React from 'react'
import movielen from '../Image/img1.png'
function Problem() {
  return (
    <div>
      <p className='header_Problem'>Healthcare dataset stroke data</p>
      <img src={movielen} alt=""  className='pro_imag'/>
      <p>
      The Health Care Statset Stroke Data offers vital demographic, medical, and lifestyle information on individuals affected by stroke. It serves as a cornerstone for predictive modeling, aiding in the identification of stroke risk factors and the development of targeted prevention strategies. This dataset enables researchers and healthcare professionals to enhance stroke prediction accuracy and personalize patient care, ultimately mitigating the impact of stroke-related morbidity and mortality.
      </p>
    </div>
  )
}

export default Problem
