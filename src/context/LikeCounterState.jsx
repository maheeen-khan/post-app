import LikeCounterContext from "./LikeContextContext";
import { useState } from "react";
const LikeCounterState = ({children}) =>{

    const [likeCount, setLikeCount] = useState(0);

    const incrementLike = () => setLikeCount((prev) => prev + 1);
    const decrementLike = () => setLikeCount((prev) => (prev > 0 ? prev - 1 : 0));

    return(
        <LikeCounterContext.Provider value={{ likeCount, incrementLike, decrementLike }}>
            {children}
        </LikeCounterContext.Provider>
    )
}

export default LikeCounterState