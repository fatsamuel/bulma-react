import 'bulma/css/bulma.min.css';
 /*import Container from "./components/uiElements/Container";

function App () {
  return (
    <div className="App">
      <Container />
    </div>
  )
} */





const App = () => {
      return (

<div classname="main"> 
         

<section class="hero is-primary is-fullheight ">
   Hero head: will stick at the top 
  <div class="hero-head">
    <header class="navbar">
      <div class="container">
        <div class="navbar-brand">
          
          <span class="navbar-burger" data-target="navbarMenuHeroC">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroC" class="navbar-menu">
          <div class="navbar-end">
            <a class="navbar-item is-active">
             Start
            </a>
            <a class="navbar-item">
              Info
            </a>
            <a class="navbar-item">
              Termine
            </a>
            <a class="navbar-item">
              Über uns
            </a>
          </div>
        </div>
      </div>
    </header>
  </div>

 





   Hero content: will be in the middle 
  <div class="hero-body">


    <div class="container has-text-centered">
      <p class="title">
        Title
      </p>
      <p class="subtitle">
        Subtitle
      </p>
    </div>
  </div>

   Hero footer: will stick at the bottom 
  <div class="hero-foot">
    <nav class="tabs is-boxed is-fullwidth">
      <div class="container">
        <ul>
          <li class="is-active"><a>Overview</a></li>
          <li><a>Modifiers</a></li>
          <li><a>Grid</a></li>
          <li><a>Elements</a></li>
          <li><a>Components</a></li>
          <li><a>Layout</a></li>
        </ul>
      </div>
    </nav>
  </div>
</section>








        </div>






      )
  }  
  
export default App;