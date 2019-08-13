import React, { useEffect, Fragment, useContext } from 'react'
import Spinner from '../layout/Spinner'
import Repos from '../repos/Repos'

import { Link } from 'react-router-dom'
import GithubContext from '../../context/github/githubContext'



const User = ({ match, repos }) => {
    const githubContext = useContext(GithubContext)

    const { getUser, user, loading, getUserRepos } = githubContext
    useEffect(() => {
        getUser(match.params.login)
        getUserRepos(match.params.login)
    },
        // eslint-disable-next-line
        {})

    const {
        name,
        avatar_url,
        html_url,
        location,
        email,
        hireable,
        company,
        bio,
        followers,
        following,
        public_repos,
        public_gists,
        blog
    } = user;

    if (loading) {
        return <Spinner />
    }
    return (
        <Fragment>
            <Link to='/' className='btn btn-light'>Back</Link>
            Hireable: {' '} {hireable ? <i className='fas fa-check text-success'></i> : <i className='fas fa-times-circle text-danger'></i>}

            <div className="card grid-2">
                <div className='all-center'>
                    <img src={avatar_url} alt={name} className='round-img' style={{ width: '150px' }} />
                    <h1>{name}</h1>
                    <p>Location: {location}</p>
                </div>
                <div>
                    {bio && (<Fragment>
                        <h3 className='large'>Bio</h3>
                        <p>{bio}</p>
                    </Fragment>)}
                    {html_url && <Fragment>
                        <a href={html_url} className="btn btn-dark my-1">View Github Profile</a>
                    </Fragment>}
                    <ul className='list'>
                        <li>
                            {email && (<Fragment>
                                <strong>Email: </strong>{email}
                            </Fragment>)}
                        </li>
                        <li>
                            {company && (<Fragment>
                                <strong>Company: </strong>{company}
                            </Fragment>)}
                        </li>
                        <li>
                            {blog && (<Fragment>
                                <strong>Blog/Website: </strong><a href={blog} className='text-blue'>{blog}</a>
                            </Fragment>)}
                        </li>
                    </ul>
                    <div className="border-bottom"></div>
                    <div className="p-1">
                        <span className='badge bg-primary'>Followers: {followers}</span>
                        <span className='badge bg-light'>Public Gists: {public_gists}</span>
                        <span className='badge bg-success'>Public Repos: {public_repos}</span>
                        <span className='badge bg-blue'>Following: {following}</span>
                    </div>

                </div>
            </div>
            {githubContext.repos.length > 0 ? <h2 className='large my-2'>Repos</h2> : <p className='large all-center' style={{ height: '20vh' }}>No repos yet</p>}

            <Repos repos={githubContext.repos} />
        </Fragment>
    )

}
export default User
