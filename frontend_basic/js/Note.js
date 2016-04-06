

var Note = React.createClass({
    getInitialState: function() {
        return {editing: false}
    },
    edit: function() {
        this.setState({editing: true});
    },
    save: function() {
        this.props.onChange(this.refs.newText.getDOMNode().value, this.props.index);
        this.setState({editing: false});
    },
    remove: function() {
        this.props.onRemove(this.props.index);
    },
    renderDisplay: function() {
        return (
            <div className="note">
                <p>{this.props.children}</p>
                <span>
                    <button onClick={this.edit}
                            className="btn btn-primary glyphicon glyphicon-pencil"/>
                    <button onClick={this.remove}
                            className="btn btn-danger glyphicon glyphicon-trash"/>
                </span>
            </div>
            );
    },
    renderForm: function() {
        return (
            <div className="note">
            <textarea ref="newText" defaultValue={this.props.children}
            className="form-control"></textarea>
            <button onClick={this.save} className="btn btn-success btn-sm glyphicon glyphicon-floppy-disk" />
            </div>
            )
    },
    render: function() {
        if (this.state.editing) {
            return this.renderForm();
        }
        else {
            return this.renderDisplay();
        }
    }
});

var Board = React.createClass({
    propTypes: {
        count: function(props, propName) {
            if (typeof props[propName] !== "number"){
                return new Error('The count property must be a number');
            }
            if (props[propName] > 100) {
                return new Error("Creating " + props[propName] + " notes is ridiculous");
            }
        }
    },
    getInitialState: function() {
        return {
            notes: []
        };
    },
    update: function(newText, i) {
        var arr = this.state.notes;
        arr[i] = newText;
        this.setState({notes:arr});
    },
    remove: function(i) {
        var arr = this.state.notes;
        arr.splice(i, 1);
        this.setState({notes: arr});
    },
    add: function(text){
        var query = this.refs.searchBar.getDOMNode().value;
        var arr = this.state.notes;
        var errcnt = 0;
        this.props.data.forEach(function(person){
            if (query == person.name){
                alert("Person Found!")
                arr.push(person.name+ " is the name and  " +person.roll+ " is the roll no.");
            }
            else{
                errcnt = errcnt + 1;
            }
        })
        this.setState({notes:arr});
        if (errcnt > 2){
            alert("This person does not exist")
        }
    },
    eachNote: function(note, i) {
        return (
                <Note key={i}
                    index={i}
                    onChange={this.update}
                    onRemove={this.remove}
                >{note}</Note>
            );
    },
    render: function() {
        return (
            <div className="board">
                    {this.state.notes.map(this.eachNote)}
                    <input type="text" ref="searchBar" />
                    <button className="button button1"
                    onClick={this.add.bind(null, "Click the Pencil to edit")}>
                    Search</button>
            </div>
        );
    }
});

var tableData=[
{
    name:'Miranda Butler',
    roll: '001'
},
{
    name:'Simon Hewett',
    roll: '002'
},
{
    name:'Rishabh Raghavendran',
    roll: '003'
}];


React.render(<Board data={tableData}/>,
    document.getElementById('react-container'));
