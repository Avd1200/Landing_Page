import React from 'react'
import './breadcrumb.css'

const BreadCrumb = () => {

  return (
    <nav>
        <a href='#'>
            UI/UX
        </a>
        <span className="breadcrumb-arrow">&gt;</span>
        <a href='#'>
            Refer & Earn
        </a>
        <span className="breadcrumb-arrow">&gt;</span>
        <a href='#'>
            Friends Referred
        </a>
    </nav>
  )
}

export default BreadCrumb