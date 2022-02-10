import React from "react";
import './style.css'

function SocialLinks(props) {
    const {className = 'social-links'} = props
    let i = 0
    return (
        <div className={className}>
            {
                props.data.map(({link, extraClassName}) => {
                    const className = 'social-links__link-item ' + extraClassName
                    i++
                    return (
                        <a key={link + i} href={link} className={className}/>
                    )
                })
            }
        </div>

    );
}

export default SocialLinks;