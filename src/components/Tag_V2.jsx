import React, { useState } from "react";

import useGif from "../useGif";

const Tag = () => {
    const [tag, setTag] = useState('cat');
    const { gif, fetchGif } = useGif(tag)

    return (
        <div className="container" >
            <h1>Random {tag} gif</h1>
            <img src={gif} alt="Random Gif" width="500rem" />
            <input type="text" value={tag} onChange={(e) => setTag(e.target.value)} />
            <button onClick={() => fetchGif(tag)} >New Gif</button>

        </div>
    )

}

export default Tag