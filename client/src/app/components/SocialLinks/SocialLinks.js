import React from "react";
import './style.css'

function SocialLinks(props) {
    const {className = 'social-links'} = props
    return (
        <div className={className}>
            {
                props.data.map(({link, extraClassName})=>{
                    const className = 'social-links__link-item ' + extraClassName
                    return(
                        <a key={link + Math.floor(Math.random()*25)} href={link} className={className}/>
                    )
                })
            }
        </div>

    );
}

export default SocialLinks;