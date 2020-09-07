import React, {Component} from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
} from 'react-native';
import Layout from '../components/category-list-layout';
import Empty from '../components/empty';
import Separator from '../../sections/components/horizontal-separator';
import Category from '../components/category';
import { connect } from 'react-redux';

function mapStateToProps(state){
    return {
        list: state.categoryList
    }  
}

class CategoryList extends Component{
    keyExtractor = (item) => {
        return item.id.toString()
    }
    renderEmpty = () => {
        return <Empty text="No hay sugerencias :("/>
    }
    itemSeparator = () => {
        return <Separator/>
    }
    renderItem = ({item}) => {
        return(
            <Category {...item} />
        )
    }
    render(){
        return(
            <Layout
                title="Categorías"
            >
                <FlatList
                    horizontal
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

export default connect(mapStateToProps)(CategoryList);