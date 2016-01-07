// first thing, require react
var React = require('react')
var ReactDOM = require('react-dom')

// React.createClass makes a react component
var Main = React.createClass({
  render: function(){
    return (
      <div>
        Hello World
      </div>
    )
  }
})

ReactDOM.render(<Main />, document.getElementById('app'))
