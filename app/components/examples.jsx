var React = require('react');

var {Link} = require('react-router');
var Examples = (props) => {
  return(
    <div>
      <h1 className="text-center">Examples Component</h1>
    <p>few more examples</p>
    <ol>
      <li>
        <Link to="/?location=London">London</Link>
      </li>

      <li>
        <Link to="/?location=Rajahmundry">Rajahmundry</Link>
      </li>
    </ol>
  </div>

  )


}

module.exports = Examples;
