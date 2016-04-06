var Search = React.createClass({
    searchQuery: function(){
        var query = this.refs.searchBar.getDOMNode().value;
        alert("We need to query this: "+query);
    },
    renderForm:function(){
        return(
            <div className="note">
            <textarea ref="noteText" value={}
            className="form-control"></textarea>
            </div>
        );
    },
    render: function(){
        return(
            <div>
                <input type="text" ref="searchBar" />
                <button className="btn btn-primary glyphicon glyphicon-pencil"
                onClick={this.renderForm()} />
            </div>
        );
    }
});

React.render(<Search />, document.getElementById("react-container"));
