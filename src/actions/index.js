//action creater
export const selectSong=(song)=>{
    //return action
    return {
        type:'Song-Selected',
        payload:song

    };
}