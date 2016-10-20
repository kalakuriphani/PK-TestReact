var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage=require('WeatherMessage');
var OpenWeatherMap= require('OpenWeatherMap');

var Weather = React.createClass({

  getInitialState: function(){
  return{
    isLoading:false

  }
  },


   handleSearch: function(location){
     debugger;
    this.setState({isLoading : true});
     var that = this;
     OpenWeatherMap.getTemp(location).then(function(temp){
       that.setState({
          location:location,
           temp:temp,
           isLoading:false
        });
     }, function(err){
        that.setState({isLoading:false});
        alert("Error "+err);
     });

    //

   },

    render : function(){
      var{isLoading,location,temp} = this.state;
       function renderMessage(){
         if(isLoading){
         return   <h1>Fetching weather details...</h1>;
         }else if(location && temp){
        return   <WeatherMessage location={location} temp={temp} />;
         }
       }
    return(
          <div>
            <h2>Weather Component</h2>
            <WeatherForm onSearch={this.handleSearch}/>
            {renderMessage()}
            </div>
        )

    }
});

module.exports = Weather;
