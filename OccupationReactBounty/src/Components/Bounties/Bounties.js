import React, {useEffect} from "react";
import Bounty from "./Bounty";
import "./Bounties.css";

const Bounties = (props) => {

    //ToDo: Have function that will add bounties to the system.
    createBounty = () => {
        return [];
    };

    return(
        <div id="Bounties">
            <h1>Bounties</h1>
            <p>Here are the listed bounties to accept.</p>
            <button>NEW</button>
            <ul id="BountyList">
                <li>
                    <Bounty></Bounty>
                </li>
            </ul>
        </div>
    );
};

export default Bounties;