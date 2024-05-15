AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Cloud Intern-AWS",
    cardImage: "images/experience-page/aws.png",
    place: "Remote",
    time: "(Sep, 2023 - Nov, 2023)",
    desp: "<li>Worked as an cloud intern under Amazon web services(AWS).</li> <li>Worked with Amazon cloud services.</li> <li>Prepared a static website along with the database storing retrival.</li>",
  },
  {
    title: "Introduction to Front End-META",
    cardImage: "images/experience-page/coursera.png",
    place: "virtual",
    time: "(Nov - Dec, 2023)",
    desp: "<li>Completed Introduction to frontend course certified by META, in coursera.</li><li>covers all the basic concepts of HTML,CSS,Bootstrap.</li><li>Distinguish between front-end, back-end, and full-stack developers.</li><li>Create and style a webpage with HTML and CSS.</li><li>The benefits of working with UI frameworks.</li>",
  },
  {
    title: "Python with DSA-NPTEL",
    cardImage: "images/experience-page/nptel.png",
    place: "online",
    time: "(Jan - March, 2023)",
    desp: "<li>Completed Python with DSA course certified by IIT Madras, in NPTEL</li>",
  },
  {
    title: "Programming with JavaScript-META",
    cardImage: "images/experience-page/coursera.png",
    place: "virtual",
    time: "(Nov - Dec, 2023)",
    desp: "<li>Creating simple JavaScript codes.</li><li>Creating and manipulating objects and arrays.</li><li>Writing unit tests using Jest.</li>",
  },
  {
    title: "Database management-NPTEL",
    cardImage: "images/experience-page/nptel.png",
    place: "virtual",
    time: "(Jan - Mar, 2024)",
    desp: "<li>Completed Database management course certified by IIT Kharagpur, in NPTEL.</li><li>covered all the concepts of data retrieving,updating,deleting.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Publications
const publishcards = document.querySelector(".publish-cards");
const pub = [
  {
    title: "Future trends and innovations in natural disaster detection using AI and ML",
    cardImage: "images/experience-page/igi.png",
    place: "Remote",
    time: "(Feb-2024)",
    desp:"I have written a book chapter in the book published by IGI global publishers.",
  },
  {
    title: "IoT-Enabled Bomb Detection and Neutralization: Safeguarding with Smart Technology",
    cardImage: "images/experience-page/ijnrd.png",
    place: "Remote",
    time: "(June-2023)",
    desp:"I have written a review paper in the domain IOT which is published under IJNRD publications.",
  }
]

const showCards3 = () => {
  let output= "";
  pub.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  publishcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
