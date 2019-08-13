import React, { Fragment, useContext } from 'react'
import RepoItem from './RepoItem'
import GithubContext from '../../context/github/githubContext'

const Repos = () => {
    const githubContext = useContext(GithubContext)
    return githubContext.repos.map(repo => (
        <Fragment>
            <RepoItem key={repo.id} repo={repo} />
        </Fragment>

    ))
}


export default Repos
