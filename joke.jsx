
import "./joke.css";

const JokeGenerator = () => {
// TODO 1  Track the joke that will be displayed

  // Function to generate a new joke
//   const generateJoke = () => {
    // TODO 2 Fetch a joke from the API and update the joke state
//   };

// TODO 4 create an event handler for the button that will call the generateJoke function
// when we click the button

// TODO 3 Declare the hooks that will render the joke on first opening the page

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="container header-content">
          <div className="logo">
            <span className="material-symbols-outlined icon">mood</span>
            <h1>Joke Generator</h1>
          </div>
          <nav className="nav">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </nav>
          <button className="menu-btn">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </header>

      {/* Main */}
      <main className="main">
        <div className="container text-center">
          <h2 className="title">Ready for a Laugh?</h2>
          
          {/*TODO 5 Pass the generateJoke handler function here */}
          <button  className="btn">
            Generate Joke
          </button>
          <div className="joke-box">
            Todo
            {/* TODO 6 Display the joke here */}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container text-center">
          <p>© 2024 Joke Generator. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default JokeGenerator;
