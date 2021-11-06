import React from 'react'
import { Button } from 'react-bootstrap';
import './index.css';

const Blog = ({ title, content }) => {
  return (
    <>
      <div className='blog'>
        <h1 className='question'>
          {title}
        </h1>
        <p>{content}</p>
        <div className="btn-group">
          <Button variant="dark" size='sm' type='button'>Read Blog</Button>
        </div>
      </div>
    </>
  )
}

export default Blog

