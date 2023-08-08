import "./App.css";
import bitterCaramel from "./imgs/bitterCaramel.jpg";
import wattpad from "./imgs/wattpad.png";
import insta from "./imgs/insta.png";
import facebook from "./imgs/facebook.png";
import React ,{useState , useEffect} from 'react';
import book from './imgs/book gif.gif';

function scroll(event, id) {
  event.preventDefault();
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  } , []);
  return (
    <div className="App">
      {loading ? (
        <div className="loading">
          <img src={book} className="book"></img>
        </div>
      ) : ( 
    <>    
      <div className="nav">
        <div className="nav-title">
          <h1>Naly</h1>
        </div>
        <ul className="nav-contents">
          <li>
            <a href="#about" onClick={(event) => scroll(event, "about")}>
              about
            </a>
          </li>
          <li>
            <a href="#mywork" onClick={(event) => scroll(event, "mywork")}>
              my work
            </a>
          </li>
          <li>
            <a href="#socials" onClick={(event) => scroll(event, "socials")}>
              socials
            </a>
          </li>
        </ul>
      </div>
      <div className="about" id="about">
        <h1>Hey!</h1>
        <p>I am known as Naly,21 years old,I love drawing buildings so I am an architect now<br></br>
          ,I love writing so much and I will keep writing and writing and writing forever</p>
        <hr className="hr1"></hr>
      </div>
      <div className="mywork" id='mywork'>
        <div className="bitterCaramel">
          <a
            href="https://www.wattpad.com/story/320257019?utm_source=android&utm_medium=link&utm_content=story_info&wp_page=story_details_button&wp_uname=EleanoraNaly&wp_originator=rm8F%2BbARyoA5Hs7s6fvDWciAW0iD9x6GiiaQ2Ffs2trat4qnH9cnCKi2VvSaJnJYtK7RB1%2FoPY5YeQby%2B3nsMFm%2FoiVHGyTqm7bQPm%2BG3qFKwxnF9N0675MLMu2ks%2BTj"
            target="_blank"
          >
            <img
              src={bitterCaramel}
              className="pic1"
              alt="bitterCaramel Cover"
            ></img>
            <hr></hr>
          </a>
        </div>
      </div>
      <div className='socials' id='socials'>
        <h2>Like that? check my socials:
        </h2>
        <div className='socials_pics'></div>
        <a href='https://www.wattpad.com/user/EleanoraNaly' target='_blank' className='wattpad'><img src={wattpad} alt='wattpad'></img></a>
        <a href='https://instagram.com/lil_naly7?igshid=OGQ2MjdiOTE=' target='_blank' className='insta'><img src={insta} alt='insta'></img></a>
      </div>
    </>
      )}
    </div>
  );
}

export default App;
