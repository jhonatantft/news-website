import React, { Component } from 'react';
import { Link } from "react-router-dom";

class NewsCard extends Component {
    render() {
        return (
            <div className={`column col-${this.props.type}`}>
              <div className="news">
                <div className="topic">
                  {this.props.data.categories.name}
                </div>
                <div className="news-card">
                    <div className="news-image-wrapper">
                        <img className="image" src={this.props.data.imageUrl} alt="news image"/>
                    </div>
                  <div className="news-text">
                    <h2 className="title">
                      {this.props.data.title}
                    </h2>
                    <span className="author">
                      <svg className="svg-icon svg-author" viewBox="0 0 20 20">
                        <path d="M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812 M6.761,6.775c0-2.162,1.773-3.778,3.358-3.778s3.359,1.616,3.359,3.778c0,2.162-1.774,3.778-3.359,3.778S6.761,8.937,6.761,6.775 M3.415,17.69c0.218-3.51,3.142-6.297,6.704-6.297c3.562,0,6.486,2.787,6.705,6.297H3.415z"></path>
                      </svg>
                      by {this.props.data.author}
                    </span>
                    <a href={this.props.data.url} target="_blank">
                    <p className="description">
                        {this.props.data.description}
                      {/* <a className="url" href='{this.state.url}' target="_blank">
                        read more
                      </a> */}
                    </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
        )
    }
}

export default NewsCard
