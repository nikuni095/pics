import React from 'react'
import {connect} from 'react-redux'

const SongDeatils=({mySelectedSong})=>{
    if (!mySelectedSong){
      return <div>Please select a song</div>
    }
    return (<div>
          <div>
           <h3>Details for:</h3>
           <p>
               Title:  {mySelectedSong.title} <br />
               Duration: {mySelectedSong.duration}
           </p>
          </div>
    </div>)
}

const mapStateToProps=(state)=>{
    return {mySelectedSong:state.selectedSong}
}
export default connect(mapStateToProps)(SongDeatils)