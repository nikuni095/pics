import React from 'react';
//import {selectSong} from '../actions';
import SongList from './SongList';
import SongDetails from './SongDetails'

const App=()=>{
    return( <div>
        <div className="text-danger">
            <SongList />
        </div>
        <div className='col-8 half-width'>
        <SongDetails />
        </div>
        </div>
    )
}

export default App;