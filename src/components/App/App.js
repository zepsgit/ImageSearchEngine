import React from "react";
import SearchInput from "../SearchInput/SearchInput";
import SingleImage from "../SingleImage/SingleImage";
import axios from "axios";
import "./app.css"
export default class App extends React.Component{
    state={
        images:[]
    }
    submitHandler=async (searchMsg)=>{
        const response=await axios.get(`https://pixabay.com/api/?key=25165672-bd536f8a2641681413fc2b1a5&q=${searchMsg}&image_type=photo`)
        this.setState(
            {
                images:response.data.hits
            }
        )
        console.log(response.data.hits)
    }
    render(){
        console.log("fetching data....")
        console.log(this.state.images)
        return(
            <div className="app">
                <SearchInput onSubmit={this.submitHandler}/>
                <p>we have {this.state.images.length} images</p>
                {
                    this.state.images.map(
                        ({id, webformatURL, ...other})=><SingleImage key={id} imgUrl={webformatURL} {...other}/>
                    )
                }
            </div>
        )   
    }
}
