import React from 'react'
import PropTypes from 'prop-types'


const RepoItem = ({ repo }) => {

    return (

        <div className='card'>
            <div className="grid-2">
                <div>
                    <h3 style={{ fontWeight: '200' }}>
                        <a href={repo.html_url} style={{ color: 'text-blue' }}>{repo.name}</a>
                    </h3>
                </div>
                <div>
                    <span className='badge bg-dark'>Stars: {repo.stargazers_count}</span>
                    <span className='badge  bg-dark'>Forks: {repo.forks_count}</span>
                    <span className='badge bg-dark'>Watchers: {repo.watchers}</span>
                </div>
            </div>

        </div>

    )
}
RepoItem.propTypes = {
    repo: PropTypes.object.isRequired,
}
export default RepoItem
