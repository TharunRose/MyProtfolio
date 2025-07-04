import React from 'react'

const Info = () => {
  return (
    <div className="about_info grid">
        <div className="about_box">
          <i className="bx bx-award about_icon"></i>
            <h3 className='about_title'>
                Experience
            </h3>
            <span className="about_subtitle">
                1.8 Years Working
            </span>
        </div>

        <div className="about_box">
          <i className="bx bx-briefcase-alt about_icon"></i>
            <h3 className='about_title'>
                Completed
            </h3>
            <span className="about_subtitle">
                Three Projects
            </span>
        </div>

    </div>
  )
}

export default Info
