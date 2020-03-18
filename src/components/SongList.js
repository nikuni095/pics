import React,{ Component } from 'react';
import { connect } from 'react-redux';

class SongList extends Component{
    render(){
        console.log(this.props.songs)
        return <div>SongList</div>
    }
}
 const mapStateToprops  = state => {

    return {songs:state.songs}
 }

export default connect(mapStateToprops)(SongList);