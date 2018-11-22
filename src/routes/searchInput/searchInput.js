import React, { Component } from 'react';

class SearchInput extends Component {
    render() {
        return (
            <div class="btn-search-box input-group">
                <input type="text" class="form-control"></input>
                <span class="input-group-btn">
                    <button class="btn btn-default btn-search" type="button">Search!</button>
                </span>
            </div>
        );
    }
}

export default SearchInput;
