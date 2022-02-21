import React, { Component } from "react";

export class NewsItem extends Component {
  constructor(){
    super();
    console.log("constructor was triggered");
  }


  render() {
    let {title,content, imgUrl, url}=this.props;
    return (
      <div className="container my-3">
        <div className="card" style={{width: "18rem"}}>
         {imgUrl!=null  ? 
          <img src={imgUrl} className="card-img-top" alt="" />:
          <img src="https://www.clipartmax.com/png/full/449-4492509_lefroy-ice-breakers-minor-hockey-tournament-sorry-no-image-available.png" className="card-img-top" alt="" />
         }
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">
              {content}...
            </p>
            <a href={url} className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
