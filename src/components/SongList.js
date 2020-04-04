import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { selectSong} from '../actions'

class SongList extends Component{
    renderList(){
        return this.props.songs.map((song)=>{
            return (
                <div className='item absolute-center' key={song.title}>
                <div className='container row'>
                    <div className=''>{song.title}</div>
                    <button className='btn-1 btn-primary container right'
                      onClick={()=>this.props.selectSong(song)}
                    >Select</button>
                </div>
                
                </div>
            )

        })
    }
    render(){
       
        return <div className=''>{this.renderList()}</div>
    }
}
 const mapStateToprops  = state => {
     console.log(state)
    return {songs:state.songs}
 }

export default connect(mapStateToprops,{selectSong
})(SongList);