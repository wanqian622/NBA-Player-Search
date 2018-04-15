import { AutoComplete, Input, Icon} from 'antd';
import React from 'react';
import nba from 'nba';



export class SearchBar extends React.Component {
    state = {
        dataSource: [],
    }

    onSelect = (value) => {
        console.log('onSelect', value);
    }

    handleSearch = (value) => {
        this.setState({
            dataSource: !value ? [] : nba.searchPlayers(value).map(player=>player.fullName)
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
            >
                <Input suffix={<Icon type="search" className="certain-category-icon" />} />
            </AutoComplete>
        );
    }
}
