import React from 'react'
import HeaderLogo from './headjsx/HeaderLogo'
import HeaderNavList from './headjsx/HeaderNavList'
import HeaderIcons from './headjsx/HeaderIcons'

const Header = () => {
    return (
        <header>
            <div className="container mx-auto py-4">
                <div className="flex justify-between items-center">
                    <HeaderLogo />
                    <HeaderNavList />
                    <HeaderIcons />
                </div>
            </div>
        </header>
    )
}

export default Header
