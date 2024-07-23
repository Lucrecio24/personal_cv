import './App.css'

function App() {

  return (
    <div className="App">
      <div className = "welcome">
        <h1 className='main_title'>My Curriculum Vitae</h1>
        <p className="small_comment">aka 'Ridiculum Vitae'</p>
      </div>
      <div className='main_info'>
        <div className="personal_info">
          <h1>Personal information</h1>
          <div className="personal_info_desc">
            <p>Name: Lucas Maragaño</p>
            <p>Age: Around 20 idk</p>
            <p>Sexual orientation: I like women</p>
            <p>Peeing position: Standing up</p>
            <p>Favorite hobbies: Reading, gaming, and... gymning (?)</p>    
          </div>
        </div>
        <div className="achievement_info">
          <h1>Achievements</h1>
            <div className="achievement_info_desc">
              <p>School: Lincoln International Academy</p>
              <p>University experiences:</p>
              <ul>
                <li>Universidad Diego Portales Ingeniería informatica (didn't finish)</li>
                <li>Inacap Analista programador (in progress)</li>
              </ul>
              <p>Languages:</p>
              <ul>
                <li>Mother tongue: Spanish</li>
                <li>Fluent in:</li>
                <ul>
                  <li>English</li>
              </ul>
              </ul>
            </div>
          </div>
      </div>
      
    </div>
  )
}

export default App
