/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { AiOutlineShopping, AiOutlineSearch, AiFillHeart } from 'react-icons/ai'
const HeaderIcons = () => {
    return (
        <div className="navigation_end">
            <div className="flex justify-items-center">
                <HeadIcons icons={<AiOutlineSearch fontSize="30" />} />
                <HeadIcons icons={<AiFillHeart fontSize="30" fill="red" />} />
                <HeadIcons icons={<AiOutlineShopping fontSize="30" />} />
            </div>
        </div>
    )
}

const HeadIcons = ({ icons }) => {
    return <div className="icons mr-4 cursor-pointer">{icons}</div>
}

export default HeaderIcons
