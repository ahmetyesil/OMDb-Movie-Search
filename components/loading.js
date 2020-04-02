import React from 'react'
import {string} from 'prop-types'
import {observer} from "mobx-react";
import "../styles/components/loading.scss"

@observer
export default class Loading extends React.Component {


    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="loading"/>
        )
    }
}



