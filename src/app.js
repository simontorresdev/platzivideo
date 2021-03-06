import React, {Component} from 'react';

import Home from './screens/containers/home';
import Header from './sections/components/header';
import SuggestionList from './videos/containers/suggestion-list';
import API from '../utils/api';
import CategoryList from './videos/containers/category-list';
import {connect} from 'react-redux';
import Movie from './screens/containers/movie';
import Search from './sections/containers/search';

import {
    Text,
} from 'react-native';

class AppLayout extends Component {
    
    async componentDidMount() {
        const categoryList = await API.getMovies();
        this.props.dispatch({
          type: 'SET_CATEGORY_LIST',
          payload: {
            categoryList
          }
        })
        
        const suggestionList = await API.getSuggestion(19);
        this.props.dispatch({
          type: 'SET_SUGGESTION_LIST',
          payload: {
            suggestionList
          }
        })
    }

    render(){
        if(this.props.selectedMovie){
          return <Movie />
        }else{
          return(
              <Home>
                  <Header/>
                  <Search />
                  <CategoryList/>
                  <SuggestionList/>
              </Home> 
          )
        }
    }
}

function mapStateToProps(state){
  return {
    selectedMovie: state.selectedMovie
  }
}

export default connect(mapStateToProps)(AppLayout);