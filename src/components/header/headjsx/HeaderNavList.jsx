/* eslint-disable react/react-in-jsx-scope */
import { navigationItems } from './head-data'
const HeaderNavList = () => {
    return (
        <div className="navigation_middle">
            <div className="flex ">
                {navigationItems.map((navigationLists, index) => {
                    const { title, url, navList } = navigationLists

                    return (
                        <li
                            key={index}
                            className="list-none ml-4 font-sans text-lg font-medium"
                        >
                            <a href={url} className={(navList, 'text-lg')}>
                                {title}
                            </a>
                        </li>
                    )
                })}
            </div>
        </div>
    )
}

export default HeaderNavList
