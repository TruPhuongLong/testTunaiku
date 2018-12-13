import React, { Component } from 'react';

import {gets, get} from './api'

class ListFilm extends Component {

  state = {
    list: [],
    current: {}
  }

  componentDidMount(){
    gets().then(docs => {
      this.setState({
        list: docs
      })
    })
  }

  onDetail = (item) => {
    get(item.id).then(doc => {
      this.setState({
        current: doc
      },
        // push to detail page
        this.props.history.push('/detail')
      )
    })
  }

  render() {
    const {list} = this.state
    console.log('list')
    return (
      <div>
          <button onClick={this.onDetail}>push</button>
        <table>
          <thead>
            <tr>
              <th>title</th>
              <th>director</th>
              <th>producer</th>
              <th>release_date</th>
              <th>opening_crawl</th>
            </tr>
          </thead>
          <tbody>
              {
                list.map((item, index, array) => {
                  return (
                    <tr key={index} onClick={() => this.onDetail(item)}>
                      <td>{item.title}</td>
                      <td>{item.director}</td>
                      <td>{item.director}</td>
                      <td>{item['release_date']}</td>
                      <td>{item['opening_crawl']}</td>
                    </tr>
                  )
                })
              }
          </tbody>
        </table>
      </div>
    );
  }
}

export default ListFilm;
