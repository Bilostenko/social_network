import './App.css';

function App() {
  return (
    <div className="app">
      <header className='header'>
        <img src="https://img.freepik.com/premium-vector/cat-logo_647943-184.jpg?w=2000" alt="logo" />
      </header>
      <nav className='nav'>
        <ul>
          <li><a href="#">Profile</a></li>
          <li><a href="#">Messages</a></li>
          <li><a href="#">News</a></li>
          <li><a href="#">Music</a></li>
          <li><a href="#">Settings</a></li>
        </ul>
      </nav>
      <div className="content">
        <div>
          <img src="https://media.istockphoto.com/id/1460655983/photo/a-ocean-waves-and-beach-top-view-natural-background.webp?b=1&s=170667a&w=0&k=20&c=SQW8xiYa4QH9d7s1R02u9wSrM6C7vjWCTcFzVEyZjaM=" alt="image" />
        </div>
        <div>ava + description</div>
        <div>My posts</div>
        <div>New posts</div>
        <div>
          <div>post1</div>
          <div>post2</div>
        </div>
      </div>
    </div>
  );
}

export default App;
