import React, {Component} from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
} from 'react-native';
import Layout from '../components/suggestion-list-layout';
import Empty from '../components/empty';
import Separator from '../components/vertical-separator';
import Suggestion from '../components/suggestion';
import { connect } from 'react-redux';

function mapStateToProps(state){
    return {
        list: state.suggestionList
    }  
}

class SuggestionList extends Component{
    keyExtractor = (item) => {
        return item.id.toString()
    }
    renderEmpty = () => {
        return <Empty text="No hay sugerencias :("/>
    }
    itemSeparator = () => {
        return <Separator/>
    }

    viewMovie = (item) =>{
        this.props.dispatch({
            type: 'SET_SELECTED_MOVIE',
            payload: {
                movie: item
            }
        })
    }

    renderItem = ({item}) => {
        return(
            <Suggestion 
                {...item} 
                onPress={() => { this.viewMovie(item)}}
            />
        )
    }

    render(){
        return(
            <Layout
                title="Recomendado para ti"
            >
                <FlatList
                    keyExtractor={this.keyExtractor}
                    data={this.props.list}
                    ListEmptyComponent={this.renderEmpty}
                    ItemSeparatorComponent={this.itemSeparator}
                    renderItem={this.renderItem}
                />
            </Layout>
        )
    }
}

export default connect(mapStateToProps)(SuggestionList);

