/** @jsx React.DOM */

var Main = React.createClass({
    getInitialState: function() {
        return {output: 'hello<br />world<br />'};
      },
    render: function() {
        return (
            <div dangerouslySetInnerHTML={{__html: this.state.output}} />
        );
        }
});
