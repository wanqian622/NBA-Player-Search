import { AutoComplete, Input, Icon} from 'antd';
import React from 'react';



export class SearchBar extends React.Component {
    state = {
        dataSource: [],
    }

    onSelect = (value) => {
        console.log('onSelect', value);
    }

    handleSearch = (value) => {
        this.setState({
            dataSource: !value ? [] : [
                value,
                value + value,
                value + value + value,
            ],
        });
    }

    render() {
        const { dataSource } = this.state;
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
