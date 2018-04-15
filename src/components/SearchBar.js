import { AutoComplete, Input, Icon} from 'antd';
import React from 'react';
import nba from 'nba';
import {PROFILE_PIC_URL_PREFIX} from "../constants"

const Option = AutoComplete.Option;



export class SearchBar extends React.Component {
    state = {
        dataSource: [],
    }

    onSelect = (playerName) => {
        this.props.loadPlayerInfo(playerName);
    }

    handleSearch = (value) => {
        this.setState({
            dataSource: !value ? [] : nba.searchPlayers(value).map(({fullName, playerId})=><Option key = {playerId} value = {fullName}>
                <img src = {`${PROFILE_PIC_URL_PREFIX}/${playerId}.png`} />
                <span>{fullName}</span>
            </Option>)
        });
    }


    render() {
        const { dataSource } = this.state;
        window.nba = nba;
        return (
            <AutoComplete
                className="search-bar"
                size = "large"
                dataSource={dataSource}
                onSelect={this.onSelect}
                onSearch={this.handleSearch}
                placeholder="Search NBA Player"
                optionLabelProp="value"
            >
                <Input suffix={<Icon type="search" className="certain-category-icon" />} />
            </AutoComplete>
        );
    }
}
