import React from 'react';

const Home = () => {
  document.title = `Welcome to The Telerik R3 2019 Demo`;
  return (
    <div className="view-home">
      <h1>Welcome to The Telerik R3 2019 Demo</h1>
      <p>
        Get the <span className="link"><a rel="noreferrer noopener”" href="https://github.com/httpJunkie/r3-19-kendoreact">source code<i className="k-icon k-i-hyperlink-open-sm"></i></a></span> for this demo.
      </p>
    </div>
  )
}

export default Home;