import React, { useState, useContext } from 'react'
import GithubContext from '../../context/github/githubContext'
import AlertContext from '../../context/alert/alertContext'


const Search = () => {
    // initialize github context
    const githubContext = useContext(GithubContext)
    const alertContext = useContext(AlertContext)
    const [text, setText] = useState('')
    const onChange = (e) => {
        setText(e.target.value)
    }
    const onSubmit = (e) => {
        if (text === '') {
            alertContext.setAlert('Please Enter Something', 'light')
        } else {
            githubContext.searchUsers(text)
            setText('')
        }

        e.preventDefault()

    }



    return (
        <div>
            <form className="form" onSubmit={onSubmit}>
                <input type="text" name="text" value={text} onChange={onChange} placeholder='Search Users' />

                <input type="submit" className='btn btn-block btn-dark' name="submit" placeholder='Search' />
            </form>
            {githubContext.users.length > 0 && <button className="btn btn-light btn-block" onClick={githubContext.clearUsers}>Clear All</button>}


        </div>
    )

}

export default Search
