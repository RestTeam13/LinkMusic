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
                    <div className="news__article-list"> {/*Todo Сделать через wrap*/}
                        {newsArticles.map(({img, imgAlt, date, title}) => {
                            return (<NewsArticle img={img} imgAlt={imgAlt} date={date} title={title}/>)
                        })}
                    </div>
                </div>
            </div>
        )
    }

}


export default News;
