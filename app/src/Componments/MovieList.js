import React from "react"
import Movie from "./Movie"
import AddButton from "./AddButton"
import movies from "../data/movies"

class MoveList extends React.Component{
    constructor(){
        super()
        this.style = {
            width : "80%",
            margin : "auto",
            marginTop : "5%"
        }
        this.state ={
           movie_list : movies
        }
        this.state.liste = movies
        this.moviesObj = this.state.movie_list.map((movie, index)=> <Movie key={index} movie={movie}/>)
    }

    getTitleStyle(){
        return{
            margin : "5px",
            display : "flex",
            justifyContent: "space-between"
        }
    }

    
        
        
        
    

    
    render(){
        
        
        return(
           <article style={this.style}>
                <div style={this.getTitleStyle()}><h2 >liste de films</h2> <AddButton /></div>
                <div className="movieList">
                    {this.moviesObj}
                </div>
           </article>
        )
    }
}

export default MoveList