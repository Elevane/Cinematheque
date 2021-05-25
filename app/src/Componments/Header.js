import React from "react"
import NavItem from "./NavItem"
class Header extends React.Component{

   
    getNavItem(){
        const items = [
            {
                name: "Director(s)",
                link : "Director"
            },
            {
                name: "Actor(s)",
                link : "Actor"
            },
            {
                name: "Movie(s)",
                link : "Movie"
            },
            {
                name: "Genre(s)",
                link : "Genre"
            }

        ]

        const navitems = items.map((nav, index)=>{
            return  <NavItem key={index} link={nav.link} name={nav.name}/>
        })


        return navitems
    }
    getTitleStyle(){
        return{
            padding :"1%"
        }
    }

    getHeaderStlye(){
        return{
            width : "100%",
            display : "flex",
            alignItems : "center",
            justifyContent : "space-between",
            boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)"
        }
    }

    getStyle(){
        return {
            listStyle : "none",
            display : "flex",
            justifyContent: "space-around",
            width : "30%"
        }
    }

    render(){
        return(
            <nav style={this.getHeaderStlye()}>
                <h1 style={this.getTitleStyle()} >Cinematheque</h1>
                <ul style={this.getStyle()}>
                    {this.getNavItem()}
                </ul>
            </nav>
        )
    }
        
}

export default Header