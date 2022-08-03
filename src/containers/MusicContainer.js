import React, {useState, useEffect} from 'react';
import MusicDetail from '../components/MusicDetail';
// Add more imports here. 




const MusicContainer = () => {
    const [music, setMusic] = useState([]);
    const [selectedMusic, setSelectedMusic] = useState([]);

    useEffect(() => {
        getMusic();
    }, [])

    const getMusic = function(){
        fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
        .then(res => res.json())
        .then(result => setMusic(result.feed.entry))
    }

    const onMusicSelected = function(music){
        setSelectedMusic(music);
    }
    
    

    return(
        <ol className="main-container">
            {music.map(music => <li><MusicDetail selectedMusic={music}/></li> )}
        </ol>
        
    )
    


};

export default MusicContainer;
