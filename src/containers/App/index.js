import React,{Component} from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

import "./index.css";

export default class App extends Component{
	render(){
		return (
            <div className="bg">
                <Footer/>
                <Header/>
            </div>
 	);
	}
}