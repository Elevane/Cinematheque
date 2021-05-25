import React from "react"

class Movie extends React.Component{
    constructor(props){
        super(props)
        
        this.style = {
            display : "flex",
            flexDirection :"column",
            alignItems : "center",
            justifyCenter : "center",
            
            height : "250px",
            width : "180px",
            padding : "10px",
            margin : "1%",
            boxShadow : "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)"
        
        }
    }
 
    render(){
    return(
        <div style={this.style}>
            <img className="img_movie" src="image.png" alt="movie_photo"/>
            <h3 className="movie_title">{this.props.movie.Title}</h3>
        </div>
    )
    }
    
}

export default Movie