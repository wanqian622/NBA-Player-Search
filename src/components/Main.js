import React from 'react'
import {DataViewContainer} from "./DataViewContainer"
import nba from 'nba';
import {Profile} from "./Profile"
import {SearchBar} from "./SearchBar";

export class Main extends React.Component{
    state = {
        playerInfo: {
            playerId: nba.findPlayer('Stephen Curry').playerId,
            teamAbbreviation: 'GSW',
        },
    }

    componentDidMount() {
        this.loadPlayerInfo('Stephen Curry');

    }

    loadPlayerInfo = (playerName) =>{
        nba.stats.playerInfo({ PlayerID: nba.findPlayer(playerName).playerId }).then((info) => {
            const playerInfo = Object.assign(info.commonPlayerInfo[0], info.playerHeadlineStats[0]);
            this.setState({
                playerInfo: playerInfo,
            });
        });
    }
    render(){
        return(
            <div className='main'>
                <SearchBar loadPlayerInfo = {this.loadPlayerInfo}/>
                <div className='player'>
                    <Profile playerInfo={this.state.playerInfo}/>
                    <DataViewContainer playerId = {this.state.playerInfo.playerId} />
                </div>
            </div>

        )
    }
}