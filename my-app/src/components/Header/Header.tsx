import React from "react"
import { IconLogo } from "../../common/svg/svg"
import s from "./Header.module.scss"

const Header: React.FC = () => {
    return (
        <nav className={s.header}>
            <div className={s.header__links}>
                <a href="">
                    <IconLogo />
                </a>
                <div>
                    <a href="">Swap</a>
                    <a href="">Tokens</a>
                    <a href="">Pool</a>
                </div>

            </div>
            <div className={s.header__search}></div>
            <div className={s.header__menu}></div>

        </nav>
    )
}

export default Header