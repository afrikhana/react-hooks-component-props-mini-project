import React from "react";
import blogData from "../data/blog";

console.log(blogData);

function Header (prop){
return <header>
  <h1>{prop.name}</h1>
</header>
}

function About (prop){
  return (
    <div id="about">
        <aside id="aside">
          <img id="logo" src={prop.image} placeholder={prop.name} alt={prop.aName}></img>
          <p>{prop.text}<br></br>{prop.text1}</p>
        </aside>
    </div>
  );
}

function ArticleList (prop){

     return (
      <main key={prop.id}>
              <h3>{prop.title}</h3>
              <small>{prop.date}</small>
              <p>{prop.preview}</p>
      </main>
     );
}
function Article (){
  return (
    <div>
      <main id="1">
      <h3><ArticleList title="Components 101"/></h3>
      <small><ArticleList date="December 15, 2020"/></small>
      <p><ArticleList preview="Setting up the building blocks of your site"/></p>
      </main>

      <main id="2">
      <h3><ArticleList title="React Data Flow"/></h3>
      <small><ArticleList date="December 11, 2020"/></small>
      <p><ArticleList preview="Passing props is never passé"/></p>
      </main>

      <main id="3">
      <h3><ArticleList title="Function vs Class Components"/></h3>
      <small><ArticleList date="January 1, 1970"/></small>
      <p><ArticleList preview="React, meet OOJS."/></p>
      </main>
      
    </div>
    
  );
}


function App() {
  return (
    <div className="App">
     
     <Header name="Overreacted"/>
      <About 
image="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg" name="https://via.placeholder.com/215" aName="blog logo" 
      text="personal blog by Dan Abramov." text1="I explain with words and code"/>
      <ArticleList/>
      <Article/>
    </div>
  );
}

export default App;
