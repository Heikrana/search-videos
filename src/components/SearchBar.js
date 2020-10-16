import React from "react";


class SearchBar extends React.Component {

   state = {
      query: ""
   };

   onInputChange = (event) => {
      this.setState({
         query: event.target.value
      });
   };

   onFormSubmit = (event) => {
      event.preventDefault();
      this.props.onSubmit(this.state.query);
   };

   render() {
      return (
         <div className="search-bar ui segment" style={{marginTop: "10px"}} >
            <form className="ui form" onSubmit={this.onFormSubmit} >
               <div className="field" >
                  <div className="ui icon input" >
                     <input type="text" placeholder="Search Videos..." value={this.state.query}
                        onChange={this.onInputChange} />
                     <i className="search icon" ></i>
                  </div>
               </div>
            </form>
         </div>
      );
   };
}

export default SearchBar;