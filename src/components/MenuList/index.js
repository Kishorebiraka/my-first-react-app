import {Component} from  'react'

import ShowingItem from './ShowingItem/index'

import './index.css'


class MenuList extends Component{

    state = {searchInput: ''}

    dishItemsWithNames = (event) => {
        
        this.setState({searchInput: event.target.value})

    }
    render(){

        const {itemsList} = this.props

        

        const {searchInput} = this.state

        const searchResults = itemsList.filter((eachItem) => (eachItem.nameofdish.toLowerCase().includes(searchInput.toLowerCase())))


        
        

        return (
            <div className='bg-container'>
                <div className='card-container'>
                    <h1 className='heading-main'>Welcome to Kishore Restaurant</h1>
                    <p className='para'>Discover the best foods and drinks </p>
                    <div className='search-bar-container'>
                    <input type = "search"  className = "input" onChange = {this.dishItemsWithNames}/>
                    <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ8XbSiFzVcwP6-L4fyr2FkfwOcjq74uHkFg&usqp=CAU.png" className='search-icon' alt = "search icon"/>
                    </div>
                </div>

                <ul className='ul-container'>{
                searchResults.map((eachItem) => (  
                            <ShowingItem itemsList = {eachItem} key = {eachItem.id}/>
                            ))
                    }
                </ul>

            </div>

            
        )
    }
}

export default MenuList