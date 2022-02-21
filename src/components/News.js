import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = []

  constructor() {
    super();
    console.log("constructor from news component");
    this.state = { articles: []};
  }
async componentDidMount(){
let url="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=722a2fb074284e2abb07b3da650e8fdf";
let data= await fetch(url);
let parsedData=await data.json();
console.log(parsedData);
this.setState({articles:parsedData.articles});
}

  render() {
    return (
      <div className="container my-3">
        <h1>Breaking News</h1>
        <div className="row">
          {this.state.articles.map((element) => {
            console.log(element);
            
            return <div className="col-md-4" key={element.url}>
              { element.content!=null && element.title!=null ?
            <NewsItem imgUrl={element.urlToImage} title={element.title.slice(0,45)} content={element.content.slice(0,88)} url={element.url}  />:
            <NewsItem/>
          }
          </div>
          })}

          
        
        </div>
      </div>
    );
  }
}

export default News;
