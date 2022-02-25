import './App.css'

function App() {
  return (
    <div className="Body" >
        <div className="Container">
            <h2>Login From</h2>
            
            <div className='btnLoginorSingup'>
                <button>Login</button>
                <button>Singup</button>
            </div>

            <div className='input'>
              <input type='text' name='email' placeholder='Email address' />
              <input type='text' name='password' placeholder='Password' />
            </div>

            <div className='footer'>
              <button>Login</button>
              <p>Not a member
                  <a href='#'>Signup now</a>
              </p>
            </div>
        </div>
      
    </div>
  );
}

export default App;
