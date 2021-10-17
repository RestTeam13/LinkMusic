import React from "react";
import './style.css'
import NewsArticle from "./NewsArticle";


const newsArticles = [
    {
        img: 'images/news-article1.png',
        imgAlt: 'test',
        date: '29.09.2021',
        title: 'Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.'
    },
    {
        img: 'images/news-article2.png',
        imgAlt: 'test',
        date: '29.09.2021',
        title: 'Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.'
    }
]

class News extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className='block news'>
                <div className="content">
                    <div className="vinyl-record"/>
                    <div className="news__article-list">
                        {newsArticles.map(({img, imgAlt, date, title}) => {
                            return (<NewsArticle img={img} imgAlt={imgAlt} date={date} title={title}/>)
                        })}
                    </div>
                </div>


                <div className="vector__bg vector__bg_8">
                    <svg width="530" height="732" viewBox="0 0 530 732" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M439.086 71.9201C439.086 71.9201 301.349 67.8329 263.339 204.329C226.16 337.828 123.703 306.71 77.8451 370.282C31.9868 433.854 54.3268 549.624 171.756 560.341C276.512 569.904 272.904 633.5 294.556 669.794C316.208 706.088 367.904 730 367.904 730" stroke="#FC6338" stroke-width="3" stroke-miterlimit="10"/>
                        <path d="M371.906 601.5C371.906 601.5 274.898 513.4 185.742 505.619C96.5859 497.838 102.416 432.697 118.747 410.268C152.633 363.761 266.209 381.92 294.595 300.124C315.909 238.645 294.32 143.263 403.154 123.18" stroke="#FC6338" stroke-width="3" stroke-miterlimit="10"/>
                        <path d="M367.904 533C367.904 533 231.824 514.155 263.189 456.374C299.101 390.161 341.113 401.949 323.854 302.258C317.655 266.834 345.994 137.329 417.745 183.029" stroke="#FC6338" stroke-width="3" stroke-miterlimit="10"/>
                    </svg>
                </div>
            </div>
        )
    }

}


export default News;
