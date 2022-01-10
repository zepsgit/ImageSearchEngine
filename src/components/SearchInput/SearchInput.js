import React from "react";

export default class SearchInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchMsg: ""
        }
    }

    onInputChange = (event) => {
        this.setState(
            { searchMsg: event.target.value }
        )
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.searchMsg);
    }
    render() {
        return (
            <div className="ui segment">
                <form
                    onSubmit={this.onFormSubmit}
                    className="ui form">
                    <div class="ui input massive icon focus">
                        <input
                            onChange={this.onInputChange}
                            value={this.state.searchMsg}
                            type="text"
                            placeholder="Search image..."
                        />
                        <i class="search icon" />
                    </div>
                </form>
            </div>
        )
    }

}