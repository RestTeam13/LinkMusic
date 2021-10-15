import React from "react";
import '../styles.css'


class ReleaseSliderSlide extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {style} = this.props
        return (
            <div style={{...style}} className='block release-slider__slide'>
                <div className="release-slider__slide-content">
                    <p className="release-slider__slide-title">Расскажи <br/> всем о релизе</p>
                    <p className="release-slider__slide-subtitle">Создай уникальную страницу своего <br/> музыкального
                        релиза</p>
                    <button className="release-slider__slide-button">Создать релиз</button>
                </div>
            </div>
        );
    }

}

export default ReleaseSliderSlide;