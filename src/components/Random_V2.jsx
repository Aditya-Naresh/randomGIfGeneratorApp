import React from "react";

import useGif from "../useGif";

const Random = () => {
    const { gif, fetchGif } = useGif()

    return (
        <div className="container" >
                <h1>Random  gif</h1>
                <img src={gif} alt="Random Gif" width="500rem" />
                <button onClick={fetchGif}>New Gif</button>

            
        </div>
    );

}

export default Random;