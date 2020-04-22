import React, {useEffect} from "react";

const Home = (props) => {
    
    useEffect(()=>{
        props.setTitle("Home");
    });

    return(
        <div id="Home">
            <h1>Test</h1>
        </div>
    );
};

export default Home;