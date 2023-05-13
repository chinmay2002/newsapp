import { getByTitle } from '@testing-library/react'
import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl}= this.props;
    return (
      <div className= "my-3">
        <div className="card" style={{width: "18rem"}}>
            <img src={!imageUrl? "https://images.indianexpress.com/2023/02/PTI02_01_2023_000183B.jpg" :imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <a href={newsUrl} target= "blank" className="btn btn-sn btn-primary">Read More</a>
            </div>
            </div>
      </div>
    )
  }
}

export default Newsitem
