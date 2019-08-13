import React from 'react'
import { Link } from 'react-router-dom'

const Notfound = () => {
    return (
        <div>
            <h1>Not Found</h1>
            <p className="lead">This page does not exist</p>

            <Link to='/' className='btn btn-light'>Back to Home</Link>
        </div>
    )
}

export default Notfound
