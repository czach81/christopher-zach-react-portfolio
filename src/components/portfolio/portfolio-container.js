import React, { Component } from "react";
import axios from 'axios';

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    constructor() {
      super();

      this.state = {
          pageTitle: "Welcome to my Portfolio",
          isLoading: false,
          data: []
      };

      this.handleFilter = this.handleFilter.bind(this);

    }
     
    handleFilter(filter) {
        if (filter === "CLEAR FILTERS") {
            this.getPortfolioItems();
        }else
        {
            this.getPortfolioItems(filter);
       
    }
    }


    getPortfolioItems(filter = null) {

        axios.get('https://chriszach.devcamp.space/portfolio/portfolio_items')
      .then(response => {
          if (filter) {
 
        this.setState({
            data:response.data.portfolio_items.filter(item => {
                return item.category === filter;
            })
        });
        } else {
            this.setState({
                data:response.data.portfolio_items
            })
            }
        })        
    
      .catch(error => {
        // handle error
        console.log(error);
      });
    }

    portfolioItems() {
        return this.state.data.map(item => {
            
            return <PortfolioItem key= {item.id} item={item}  />
        })

    }
    
    componentDidMount() {
        this.getPortfolioItems();
    }



    render()   {
        if (this.state.isLoading) {
            return <div>Loading...</div>;
        }
        
        return (
            <div className="homepage-wrapper">
            <div className="filter-links">
                <button className="btn" onClick = {() => this.handleFilter("eCommerce")}>Python</button>
                <button className="btn" onClick = {() => this.handleFilter("Scheduling")}>JavaScript</button>
                <button className="btn" onClick = {() => this.handleFilter("Enterprise")}>React</button>
                <button className="btn" onClick = {() => this.handleFilter("CLEAR_FILTERS")}>All</button>
                </div> 

            <div className="portfolio-items-wrapper"> 
                {this.portfolioItems()}
            </div> 
        </div>  
                           
        );
    }
}


//Class component- // State you need to use class based components 
    // or use life cycle hooks-for events with data-forms for example
//whenever you are extending a class-it has functions you need to bring in ---
//you must use the super key word it tells the constructor to bring it in and gives it access to 
//it(go to parent class component class--bring it all in)
