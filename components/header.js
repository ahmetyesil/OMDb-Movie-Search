import React from 'react'
import "../styles/components/header.scss"
import Link from "next/link";

export default class Header extends React.Component {


    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header>
                <div className="menu">
                    <div className="container">
                        <ul>
                            <li>
                                <Link href="/"><a>Home</a></Link>
                            </li>
                            <li className="ml-2">
                                <Link href="/favorites"><a>Favorites</a></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        )
    }
}



