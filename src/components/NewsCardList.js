import React, { Component } from 'react';
import NewsCard from './NewsCard'

class NewsCardList extends Component {
    render() {
        const list = this.props && this.props.list
        let items = Array.isArray(list) &&
            list.map((news, index) => {
                const carType = index === 0 ? '6': (index === 1) || (index === 2) ? '3' : '4'
            return <NewsCard type={carType} data={news} key={index}/>
            })
        return (
            <div className="row">
                {items}
            </div>
        )
    }
};

export default NewsCardList