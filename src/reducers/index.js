import { combineReducers } from 'redux';

const songsReducer =()=>{
    return[
        {title:'Dil chahta h',duration:'4:05'},
        {title:'malang',duration:'4:36'},
        {title:'humnava',duration:'3:05'},
        {title:'hum sath sath h',duration:'2:55'}
    ]
}

 const selectedSongReducer=(selectedSong=null,action)=>{
    if(action.type==='Song-Selected'){
        return action.payload
    }
    return selectedSong
};
export default combineReducers({
    songs:songsReducer,
    selectedSong:selectedSongReducer
});



