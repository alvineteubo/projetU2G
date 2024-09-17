const data = [
  {
    id: 1,
    title: "My 2024 MacBook Setup for Software Development",
    subtitle:
      "Here's an insight into my setup, workflow and tools to build software",
    author: "Anthony Gordon",
    readTime: "5 min read",
    readDate: "Jun 21, 2024",
    claps: 0,
  },

  {
    id: 2,
    title: "Git + Bit: Code  ",
    subtitle:
      "Keeping Git Branches and Bit Lanes in sync for seamless Development",
    author: "Ashan Fernando",
    readTime: "6 min read",
    date: "Aug 29, 2024",
    claps: 0,
  },

  {
    id: 3,
    title: "Average Manager vs. Great Manager",
    subtitle: "Explaned  in 10 sketches",
    author: "Julie Zhuo",
    readTime: "2 min read",
    date: "Aug 29, 2024",
    claps: 0,
  },
];

function App() {
  //App.state.posts = data;
  return `
     <div class="container">
     ${data.map((item) => Post(item)).join("")}
    </div>
    `;
}

/**App.state = {
  posts: undefined,
  addClaps: (id) => {
    const post = App.state.posts.find((item) => item.id === id);
    post.claps = post.claps + 1;
    document.getElementById(`claps-counter-${id}`).innerHTML = post.claps;
  },
};**/

const hooks = [];
let hookPointer = 0;
let eventhandlers = [];

function useState(initialValue) {
  const currentIndex = hookPointer;

  if (!hooks[currentIndex]) {
    hooks[currentIndex] = initialValue;
  }
  const setState = (newState) => {
    if (typeof newState == "function") {
      hooks[currentIndex] = newState(hooks[currentIndex]);
    } else {
      hooks[currentIndex] = newState;
    }

    render();
  };

  hookPointer++;
  return [hooks[currentIndex], setState];
}

function Post(props) {
  //const[clap, setClap]=useState(posts.clap)

  const [posts, setposts] = useState(props);

  const handler = () => {
    //setposts({ ...posts, claps: posts.claps + 1 });

    setposts((prevState) => {
      return { ...prevState, claps: prevState.claps + 1 };
    });
  };

  eventhandlers.push({
    id: `click-on-me-${props.id}`,
    type: "click",
    handler,
  });

  /**<button id="click-on-me-${props.id}">clik me! </button>
             <div>${message}</div>**/
  return `
           <div class="post-header">
           
                <div class="title">${props.title}</div>
                <div class="subtitle">${props.subtitle}</div>

                <div class="author-card">
                    <div class="avatar">
                        <img src="assets/images/profile-picture.jpg" alt="">
                    </div>
                    <div class="column">
                        <div class="row">
                            <div>${props.author}</div>
                            <div>.</div>
                            <div class="follow-button">Follow</div>
                        </div>
                        <div class="row secondary">
                            <div>${props.readTime}</div>
                            <div>.</div>
                            <div>${props.readDate}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="actions">
                <div class="claps">
                    <div class="claps-button" id="click-on-me-${props.id}">
                        <img src="assets/icons/hands-clapping-thin.svg" height="24px" width="24px"/>
                    </div>
                    <div id="claps-counter-${props.id}" class="claps-counter">${posts.claps}</div>
                </div>
            </div>
        
    `;
}

function render() {
  eventhandlers = [];
  hookPointer = 0;

  document.getElementById("post-header").innerHTML = App();

  eventhandlers.forEach((item) => {
    document.getElementById(item.id).addEventListener(item.type, item.handler);
  });
}
render();
