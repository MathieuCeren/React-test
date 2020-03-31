import React from "react";
import Planets from "./Planets"

function Home () {
    return (
        <React.Fragment>
            <div className="body" >
                Home Content
                <Planets></Planets>
            </div>
        </React.Fragment>
    );
}

export default Home;