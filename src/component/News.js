import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {
    
    constructor(){
        super();
        console.log("hello i am a constructor from newscomponent")
        this.state= {
            articles: [],
            loading: false
        }
    }
    async componentDidMount(){
        let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=276cf2d9876b48fdab5586695e399413";
        let data= await fetch(url);
        let parsedData= await data.json()
        console.log(parsedData);
        this.setState({articles: parsedData.articles})
    }
  render() {
    return (
      <div className='container my-3'>
        <h2>newsbyme - top headlines</h2>
        <div className='row'>
            {this.state.articles.map((element)=>{
                return <div className='col-md-3' key={element.url}>
                <Newsitem  title={element.title} description ={element.description  } imageUrl={element.urlToImage} newsUrl={element.url}/>
                </div>
            })}
            
            
        </div>

      </div>
    )
  }
}

export default News
