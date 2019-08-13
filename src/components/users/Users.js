import React, { useContext, Fragment } from 'react'
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/github/githubContext'


const Users = () => {
    const githubContext = useContext(GithubContext)
    if (githubContext.loading) {
        return <Spinner />

    } else {
        return (
            <Fragment>
                {githubContext.users.length === 0 ? <h2 className='all-center' style={{ height: '40vh' }}>Oops! No User Yet</h2> : <div className='grid-3'>
                    {githubContext.users.map(user => (
                        <UserItem key={user.id} user={user} />
                    ))}
                </div>}
            </Fragment>
        )
    }

}

export default Users
