//setup
const root = document.getElementById("root");
let theme = "light";

//Script
const HomeSC = ()=>{
  const place = document.getElementById("RunningText");
  const text1 = "Nongki", text2 = "Ngopi", text3 = "Ngebacot", text4 = "Bertanya", text5 = "Ngegabut";
  let text = text1;
  let lock=false, lnum=0;
  const runTexts = ()=>{
    const runText = setInterval(()=>{
      if (lock){
        lnum--;
        place.innerText = text.substring(0, lnum);
      }else {
        lnum++;
        place.innerText = text.substring(0, lnum);
      }
      if(lnum === text.length){
        lock = true;
        document.getElementById("cursor").classList.add("Ncursor");
        clearInterval(runText);
        setTimeout(() => { runTexts(); document.getElementById("cursor").classList.remove("Ncursor"); }, 1500)
      };
      if (lock&&lnum === 0){
        lock = false;
        if (text === text1){
          text = text2;
        }else if (text === text2){
          text = text3
        }else if (text === text3){
          text = text4
        }else if (text === text4){
          text = text5
        }else if (text === text5){
          text = text1
        };
      };
    }, 100)
  }
  const titles = "Programmer Comunity";
  let ltitle = "";
  const fillTitle = ()=>{
    ltitle++;
    document.getElementById("h1title").innerText = titles.substring(0, ltitle)
    if(ltitle === titles.length){
      setTimeout(()=>{
        document.getElementById("ptitle").style.marginTop = "";
        setTimeout(()=>{
          document.getElementById("ptitle").style.opacity = "1";
          document.getElementById("mouse").style.display = "block";
          setTimeout(()=>{
            document.getElementById("mouse").style.marginTop = "";
            document.getElementById("changemode").style.marginTop = "";
            setTimeout(()=>{
              document.getElementById("mouse").style.opacity = "1";
              document.getElementById("changemode").style.opacity = "1";
              setTimeout(()=>{
                document.getElementById("navs").style.marginBottom = `${(screen.height - 580)}px`;
                runTexts()
                setTimeout(()=>{
                  document.getElementById("homeMenu").style.display = "block";
                }, 200)
              }, 250)
            }, 25)
          },280)
        }, 25)
      },280)
    }else {
      setTimeout(()=>{ fillTitle() }, 50)
    }
  }
  setTimeout(()=>{
    document.getElementById("navs").style.marginTop = "";
    setTimeout(()=>{
      document.getElementById("navs").style.opacity = "1";
      setTimeout(()=>{
        document.getElementById("h1title").style.marginTop = "";
        fillTitle();
        setTimeout(()=>{
          document.getElementById("h1title").style.opacity = "1";
        }, 50)
      }, 280)
    }, 25)
  },1000)

// Create the observer, same as before:
const observers = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.getElementById("prf1").style.opacity = "1"
      document.getElementById("prf4").style.opacity = "1"
      setTimeout(()=>{
        document.getElementById("prf2").style.opacity = "1"
        document.getElementById("prf3").style.opacity = "1"
      }, 200)
      return;
    }

    document.getElementById("prf1").style.opacity = "0"
    document.getElementById("prf2").style.opacity = "0"
    document.getElementById("prf3").style.opacity = "0"
    document.getElementById("prf4").style.opacity = "0"
  });
});

observers.observe(document.querySelector('.staff'));
}

//component
let home, link;
const component = {
  "Navs": (act)=>{
    if (act === "Home"){
      home = "active"
    }else if (act === "Link"){
      link = "active"
    }else {
      console.log("Nav Invalid ACT")
    };
    return `<nav id="navs" style="margin-top: -100px; opacity: 0;" class="navbar navbar-expand-lg ${(theme === "light") ? "bg-light navbar-light" : "bg-dark navbar-dark"}">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
      <img src="./assets/icon.jpg" class="Nicon" alt="Icon">
      Programmer <span class="NtitleComu">Comunity</span></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link ${home}" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link ${link}" href="#" onClick="page.Riverz()">Riverz Chat</a>
          </li>
          <!--<li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>-->
          <li class="nav-item">
            <a class="nav-link disabled">Disabled</a>
          </li>
        </ul>
        <!--<form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>-->
      </div>
    </div>
  </nav>`
  }
}

//Pages
const page = {
  "Home": ()=>{
    let staffRes;
    if(screen.width < 645){
      staffRes = `<tr>
      <td id="prf1"><img src="./assets/yusril.jpg" alt="Yusril Potho"/></td>
      <td id="prf2"><img src="./assets/syeif.jpg" alt="Syeif Potho"/></td>
    </tr>
    <tr>
      <td>Yusril (<span class="owner">Owner</span>)</td>
      <td>Syeif (<span class="admin">Admin</span>)</td>
    </tr>
    <tr>
      <td id="prf3"><img src="./assets/fachriza.png" alt="Fachriza Potho"/></td>
      <td id="prf4"><img src="./assets/dika.jpg" alt="Dika Potho"/></td>
    </tr>
    <tr>
      <td>Fachriza (<span class="admin">Admin</span>)</td>
      <td>Dika (<span class="admin">Admin</span>)</td>
    </tr>`
    }else {
      staffRes = `<tr>
      <td id="prf1"><img src="./assets/yusril.jpg" alt="Yusril Potho"/></td>
      <td id="prf2"><img src="./assets/syeif.jpg" alt="Syeif Potho"/></td>
      <td id="prf3"><img src="./assets/fachriza.png" alt="Fachriza Potho"/></td>
      <td id="prf4"><img src="./assets/dika.jpg" alt="Dika Potho"/></td>
    </tr>
    <tr>
      <td>Yusril (<span class="owner">Owner</span>)</td>
      <td>Syeif (<span class="admin">Admin</span>)</td>
      <td>Fachriza (<span class="admin">Admin</span>)</td>
      <td>Dika (<span class="admin">Admin</span>)</td>
    </tr>`
    }
    root.innerHTML = `
    <!-- changemode -->
    <button style="margin-top: -100px; opacity: 0;" onclick="changeTheme()" class="text-light" id="changemode"><i class="fa-solid fa-sun fa-xl"></i></button>
    <center id="upupc" style="margin-right: 50px;">
      <button class="text-light btn btn-primary" style="opacity: 0;" onclick="window.location.replace('#home')" id="upup"><i class="fa-solid fa-arrow-up fa-xl"></i></button>
    </center>
    ${component.Navs("Home")}
    <center class="Ntitle">
      <h1 id="h1title" style="margin-top: -100px; opacity: 0; z-index: 50;"></h1>
      <p id="ptitle" style="margin-top: -50px; opacity: 0;">Tempat Nya <span id="RunningText"></span><span class="Ncursor" id="cursor">|</span> Para Programmer</p>
      <div style="opacity: 0; margin-top: -50px; display: none;" id="mouse" class="mouse-icon mouse-icon-light"><div class="wheel"></div></div>
    </center>
    <div id="homeMenu" style="display: none;">
    <canvas style="width: 1; height: ${(screen.height - 350)}px;"></canvas>
    <center><h2>Staff</h2>
    <div class="staff">
      <table>
        ${staffRes}
      </table>
    </div></center>
    <center class="comunication"><h2>Comunication</h2>
      <button onclick="window.open('https://chat.whatsapp.com/L3l0NRMLmlj55rNj88LrLQ')" class="btn btn-success"><i class="fa-brands fa-whatsapp fa-xl"></i><canvas height="0" width="5"></canvas>WhatsApp</button>
    </center>
    <center style="margin-top: 25px; margin-bottom: 10px"><p>Copyright ©SGStudio 2023</p></center>
    </div>
    `
    document.body.classList.add("Ndark", "text-light");
    document.getElementById("changemode").innerHTML = `<i class="fa-solid fa-sun fa-xl"></i>`
    document.getElementById("changemode").classList.add("text-light")
    document.getElementById("changemode").classList.remove("text-dark")
    document.getElementById("mouse").classList.add("mouse-icon-light")
    document.getElementById("mouse").classList.remove("mouse-icon-dark")
    document.getElementById("navs").classList.add("bg-dark", "navbar-dark")
    document.getElementById("navs").classList.remove("bg-light")
    HomeSC();
  },
  "Riverz": ()=>{
    root.innerHTML = `<canvas style="width: 1; height: ${(screen.height - 550)}px;"></canvas>
    <center><h1>Cooming Soon</h1>
      <p>Moga Coder nya ngga mager</p>
      <button style="margin-top: 20px;" class="btn btn-primary" onClick="page.Home()">Back</button>
    </center>`
  }
}

//theme
const changeTheme = ()=>{
  if(theme === "light"){
    theme = "dark";
    document.body.classList.add("Ndark", "text-light");
    document.getElementById("changemode").innerHTML = `<i class="fa-solid fa-sun fa-xl"></i>`
    document.getElementById("changemode").classList.add("text-light")
    document.getElementById("changemode").classList.remove("text-dark")
    document.getElementById("mouse").classList.add("mouse-icon-light")
    document.getElementById("mouse").classList.remove("mouse-icon-dark")
    document.getElementById("navs").classList.add("bg-dark", "navbar-dark")
    document.getElementById("navs").classList.remove("bg-light")
  }else {
    theme = "light";
    document.body.classList.remove("Ndark", "text-light");
    document.getElementById("changemode").innerHTML = `<i class="fa-solid fa-moon fa-xl"></i>`
    document.getElementById("changemode").classList.remove("text-light")
    document.getElementById("changemode").classList.add("text-dark")
    document.getElementById("mouse").classList.remove("mouse-icon-light");
    document.getElementById("mouse").classList.add("mouse-icon-dark")
    document.getElementById("navs").classList.remove("bg-dark", "navbar-dark")
    document.getElementById("navs").classList.add("bg-light")
  }
}

//start
page.Home()
changeTheme()
