import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <div style={{marginTop : '40vh'}} className='text-center' >
            <h1>404</h1>
            <h3>Page not found</h3>
            <Link to='/'>Back to Home</Link>
        </div>
    )
}

export default NotFound
