import React from "react";
import './styles.css'


function BlockCatalog() {
    return (
        <div className="block block-catalog">
            <div className="content">
                <div className="catalog-title__part">
                    <h2 className="catalog-title">
                        В нашем каталоге
                    </h2>
                    <div className="catalog-title__numbers">
                        <p>5000+</p>
                        <span>Релизов</span>
                    </div>
                    <div className="catalog-title__numbers">
                        <p>300+</p>
                        <span>Артистов</span>
                    </div>
                </div>
            </div>
            <div className="content_slider">
                <div className="catalog-row">
                    <div className="catalog-row__item">
                        <div className="catalog-row__item-img">
                            <img src="images/catalog-row__item-1.png" alt=""/>
                        </div>
                        <p className="catalog-row__item-name">
                            Малиновский
                        </p>
                        
                    </div>
                    <div className="catalog-row__item">
                        <div className="catalog-row__item-img">
                            <img src="images/catalog-row__item-2.png" alt=""/>
                        </div>
                        <p className="catalog-row__item-name">
                            Николай Басков
                        </p>
                        
                    </div>
                    <div className="catalog-row__item">
                        <div className="catalog-row__item-img">
                            <img src="images/catalog-row__item-3.png" alt=""/>
                        </div>
                        <p className="catalog-row__item-name">
                            BARINOV
                        </p>
                        
                    </div>
                    <div className="catalog-row__item">
                        <div className="catalog-row__item-img">
                            <img src="images/catalog-row__item-4.png" alt=""/>
                        </div>
                        <p className="catalog-row__item-name">
                            Kevin McCoy
                        </p>
                        
                    </div>
                    <div className="catalog-row__item">
                        <div className="catalog-row__item-img">
                            <img src="images/catalog-row__item-5.png" alt=""/>
                        </div>
                        <p className="catalog-row__item-name">
                            Элджей
                        </p>
                        
                    </div>
                </div>
                <div className="catalog-row">
                    <div className="catalog-row__item">
                        <div className="catalog-row__item-img">
                            <img src="images/catalog-row2__item-1.png" alt=""/>
                        </div>
                        <p className="catalog-row__item-name">
                            Забери меня
                        </p>
                        <p className="catalog-row__item-subtext">
                            Малиновский
                        </p>
                    </div>
                    <div className="catalog-row__item">
                        <div className="catalog-row__item-img">
                            <img src="images/catalog-row2__item-2.png" alt=""/>
                        </div>
                        <p className="catalog-row__item-name">
                            Просто позвони
                        </p>
                        <p className="catalog-row__item-subtext">
                            Малиновский
                        </p>
                    </div>
                    <div className="catalog-row__item">
                        <div className="catalog-row__item-img">
                            <img src="images/catalog-row2__item-3.png" alt=""/>
                        </div>
                        <p className="catalog-row__item-name">
                            Ты красивая
                        </p>
                        <p className="catalog-row__item-subtext">
                            Николай Басков
                        </p>
                    </div>
                    <div className="catalog-row__item">
                        <div className="catalog-row__item-img">
                            <img src="images/catalog-row2__item-4.png" alt=""/>
                        </div>
                        <p className="catalog-row__item-name">
                            Забывай
                        </p>
                        <p className="catalog-row__item-subtext">
                            Николай Басков
                        </p>
                    </div>
                    <div className="catalog-row__item">
                        <div className="catalog-row__item-img">
                            <img src="images/catalog-row2__item-5.png" alt=""/>
                        </div>
                        <p className="catalog-row__item-name">
                            Kevin McCoy
                        </p>
                        <p className="catalog-row__item-subtext">
                            Kevin McCoy
                        </p>
                    </div>
                </div>
            </div>
            <div className="content">
                <div className="catalog-videos">
                    <div className="catalog-videos__item">
                        <div className="catalog-videos__img">
                            <img src="images/catalog-videos__img-1.png" alt=""/>
                            <div className="catalog-videos__youtube">
                                <img src="images/youtube.svg" alt=""/>
                            </div>
                        </div>
                        <div className="catalog-videos__name">Небесные розы</div>
                    </div>
                    <div className="catalog-videos__item">
                        <div className="catalog-videos__img">
                            <img src="images/catalog-videos__img-2.png" alt=""/>
                            <div className="catalog-videos__youtube">
                                <img src="images/youtube.svg" alt=""/>
                            </div>
                        </div>
                        <div className="catalog-videos__name">Parasitic Metamorphosis Manifestation</div>
                    </div>
                    <div className="catalog-videos__item">
                        <div className="catalog-videos__img">
                            <img src="images/catalog-videos__img-3.png" alt=""/>
                            <div className="catalog-videos__youtube">
                                <img src="images/youtube.svg" alt=""/>
                            </div>
                        </div>
                        <div className="catalog-videos__name">Manifestation</div>

                    </div>
                </div>
            </div>
            <div className="vector__bg vector__bg_1">
                <img src="images/vector-bg_left.svg" alt=""/>
            </div>
        </div>
    );
}

export default BlockCatalog;
