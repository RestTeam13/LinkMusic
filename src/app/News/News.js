import React from "react";
import './style.css'


class News extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSlide: 0
        }
    }


    render() {
        return (
            <div className='block news'>
                <div className="content">
                    <div className="vinyl-record">
                        <svg className='vinyl-record__center' viewBox="0 0 226 226">
                            <path d="M113,113m-100,0a100,100 0 1,1 200,0a100,100 0 1,1 -200,0" fill="#fff" id="tophalf"/>
                            <text>
                                <textPath xlinkHref="#tophalf" startOffset="0%">Стань частью Link Music - </textPath>
                                <textPath xlinkHref="#tophalf" startOffset="56%">Стань частью Link Music - </textPath>
                            </text>
                        </svg>
                    </div>
                </div>
            </div>
        )
    }

}


export default News;
