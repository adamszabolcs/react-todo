import React, {Component} from 'react';

class Search extends Component {

    constructor(props) {
        super(props);

        this.state = {
            searchParam: '',
            searchResult: null,
        }

    }

    handleChange = e => {
        this.setState({
                searchParam: e.target.value,
            }
        );
    };

    onSearchSubmit(text, e) {
        e.preventDefault();
        console.log("here");
        var search = new window.H.places.Search(this.platform.getPlacesService()),
            searchResult, error;

        var params = {
            'q': text,
            'in': this.props.center.lat + ',' + this.props.center.lng
        };

        function onResult(data) {
            searchResult = data;
            this.setState({
                searchResult: data,
            });
        }

        function onError(data) {
            error = data;
            console.log(error);
        }

        search.request(params, {}, onResult, onError);
    };

    getData = (e) => {
        this.onSearchSubmit(this.state.searchParam, e)
    };

    render() {
        return (
            <div>
                <h3>What kind of places do you want to search for?</h3>
                <form>
                    <input type="text" placeholder="hotels, eat, etc." onChange={this.handleChange}></input>
                    <button onSubmit={this.getData}>Search</button>
                </form>
            </div>
        );
    }
}

export default Search;