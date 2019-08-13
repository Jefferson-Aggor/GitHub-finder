import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


const UserItem = (props) => {

    const { login, avatar_url } = props.user
    return (
        <div>
            <div className="card text-center">
                <img src={avatar_url} alt="" className='round-img' style={{ width: '70px' }} />
                <h2 style={{ textTransform: 'capitalize' }}>{login}</h2>
                <div className="my-1">
                    <Link to={`/user/${login}`} className="btn btn-dark">More</Link>
                </div>
            </div>
        </div>
    )

}
UserItem.propTypes = {
    user: PropTypes.object.isRequired
}

export default UserItem
