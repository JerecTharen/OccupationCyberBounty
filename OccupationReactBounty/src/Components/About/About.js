import React, {useEffect} from "react";

const About = (props) =>{

    useEffect(()=>{
        //props.setTitle("About");
        return;
    });

    return(
        <div id="About">
            <p>
                Have you ever wanted to be a bounty hunter? Or perhaps you know this one specific player or npc in a 
                game you play, that you just really want to die? Then Occupation Cyber Bounty is for you! Our
                application will allow players to put out bounties on npc's or other players, in the game of their
                choice, which can then be picked up and completed. Best of all, you will not have to worry about
                either the Client or the Hunter being banned or otherwise punished by the company that runs your game.
                This is all because of our policy on not trading anything with out of game value. Payments will
                strictly be through in-game currency or in game favors. Staying complient with Terms of Use is
                important.
            </p>
            <p>
                So welcome! Sign up today and begin your career as a Bounty Hunter, or get revenge on that pesky enemy.
            </p>
        </div>
    );
}

export default About;