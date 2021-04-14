import * as React from 'react'
import './style.scss'

const Header: React.FC = (props) => <header className="header">{props.children}</header>

export default Header