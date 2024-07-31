import "./cv.css"
function CurriculumVitae() {

  return (
    <div className="all">
      <div className = "welcome_box">
        <h1 className="main_title">My Curriculum Vitae</h1>
        <p className="small_comment">aka "Ridiculum Vital"</p>
      </div>
      <div className="main_box">
        <div className="personal_info">
          <h1>Personal information</h1>
          <div className="personal_info_desc">
            <p>Name: Lucas Maragaño</p>
            <p>Age: Around 20 idk</p>
            <p>Sexual orientation: I like women</p>
            <p>Peeing position: Standing up</p>
            <p>Favorite hobbies: Reading, gaming, and... gymning (?)</p>
            <br></br><p>I have a diary and a personal encyclopedia for IT stuff</p>
            <p>Social anxiety too ig</p>
          </div>
        </div>
        <div className="achievement_info">
          <h1>Achievements</h1>
          <div className="achievement_info_desc">
            <p>School: Lincoln International Academy</p>
            <p>University experience:</p>
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
                <li>Rust</li>
                <li>Spanish</li>    
            </ul>
            </ul>
            <p>Created a bot using the serenity crate in rust</p>
            <p>Discord admin (extremely important information)</p>
          </div>
        </div>
      </div>
      <div className="bottom_box">
        <h1>Contact information</h1>
        <div className= "social_media_box">
          <div className="social_media_info">
            <img className="social_media_icon" src="https://cdn-icons-png.flaticon.com/128/1384/1384023.png"></img>
            <br></br><a>+56 9 1234 1234</a>
          </div>
          <div className="social_media_info">
            <img className="social_media_icon "src="https://cdn-icons-png.flaticon.com/128/2111/2111432.png"></img>
            <br></br><a href="https://github.com/Lucrecio24">Lucrecio24</a>
          </div>
          <div className="social_media_info">
            <img className="social_media_icon" src="https://cdn-icons-png.flaticon.com/128/5968/5968968.png"></img>
            <br></br><a>lucrecio</a>
          </div>
          <div className="social_media_info">
            <img className="social_media_icon" src="https://cdn-icons-png.flaticon.com/128/717/717392.png"></img>
            <br></br><a>lucrecio24</a>
          </div>
            <div className="social_media_info">
            <img className="social_media_icon" src="https://cdn-icons-png.flaticon.com/128/5968/5968958.png"></img>
          <br></br><a>I refuse to join</a>
          </div>
          <div className="social_media_info">
            <img className="social_media_icon" src="https://cdn-icons-png.flaticon.com/128/1946/1946488.png"></img>
            <br></br><a>Not telling you</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CurriculumVitae
