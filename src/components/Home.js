import React from 'react'
import NewsCardList from './NewsCardList'
import MenuLinkList from '../utils'

class Home extends React.Component {
  componentDidMount() {
    const self = this
    let { match: { path } } = this.props;
    path = path && path.replace('/', '')
    let categoryId = MenuLinkList.find(category => category.name.toLowerCase() === path)
    categoryId = categoryId && categoryId.id
    const url = categoryId ? `https://cklbackend.herokuapp.com/news/?categories=${categoryId}` : 'https://cklbackend.herokuapp.com/news/'
    fetch(url)
      .then(response => response.json())
      .then(data => self.setState({ data: data }))
  }
  render() {
      const list = this.state && this.state.data
      return (
        <div className="container">
          <NewsCardList list={list} />
        </div >
      )
  }
}

export default Home;