import React from "react";
import './style.css'


class AlbumItem extends React.Component{

    constructor(props) {
        super(props);
        this.state={
            isOpen: false
        }
    }
    openItem=()=>{
        this.setState(preState=>({
            isOpen:!preState.isOpen

        }))
    }


    render() {
        let allClasses = "albums-row",
            {isOpen}=this.state
        if (isOpen){
            allClasses += " active"
        }
        return (
            <div className={allClasses} onClick={this.openItem}>
                <div className="albums-row__name">
                    <p><span></span> Название альбома  (single / album)</p>
                </div>
                <div className="albums-row__content">
                    <div className="albums-row__img">
                        <img src="images/artist-list-6.png" alt=""/>
                    </div>
                    <div className="albums-row__block-btns">
                        <button className="albums-row__btn tl_btn albums-row__btn_blue">Сводка по релизу</button>
                        <button className="albums-row__btn tl_btn albums-row__btn_red">Предпросмотр</button>
                        <button className="albums-row__btn tl_btn albums-row__btn_purple">Копировать ссылку</button>
                        <button className="albums-row__btn tl_btn albums-row__btn_orange">Редактировать</button>
                    </div>
                </div>
                <div className="albums-row__arrow">
                    <svg width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 2L10 10L18 2" stroke="#0000FF" stroke-width="3"/>
                    </svg>
                </div>

            </div>
        );
    }



}

export default AlbumItem;

