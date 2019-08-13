import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


class Navbar extends Component {


    static defaultProps = {
        title: 'Github Finder',
        icon: 'fab fa-github'
    }
    static propTypes = {
        title: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired
    }
    render() {

        return (
            <div>
                <nav className='bg-primary navbar'>
                    <h1> <i className={this.props.icon}></i> {this.props.title}</h1>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Navbar
