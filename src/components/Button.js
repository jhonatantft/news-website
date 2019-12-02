import React, { Component } from 'react';
import { Link } from "react-router-dom";

/**
 * Builds buttons according to params
 *
 * @param {String} color will choose specific css class
 * @param {String} variant will differentiate the size
 * @param {String} text inside button
 * @param {String} link path location
 */
const buildButton = (color, variant, text, link) => {
    const buttonClass = `btn btn-${color} btn-cons btn-${variant}`
    if (link) {
        return (
            <Link to={link}>
                <button className={buttonClass}>
                    {text}
                </button>
            </Link>
        )
    }
    return (
        <button className={buttonClass}>
            {text}
        </button>
    )
}
class Button extends Component {
    render() {
        const { color, variant, text, link } = this.props;
        return buildButton(color, variant, text, link);
    }
}

export default Button