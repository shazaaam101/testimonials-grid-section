import "./App.css";
import Card from "./Card";
import imgDaniel from "./images/image-daniel.jpg";
import imgJeanette from "./images/image-jeanette.jpg";
import imgJonathan from "./images/image-jonathan.jpg";
import imgKira from "./images/image-kira.jpg";
import imgPatrick from "./images/image-patrick.jpg";
function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="grid">
          <Card
            imgSrc={imgDaniel}
            name="Daniel Clifford"
            title="I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny's worth."
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam ullam libero officia ab quasi similique molestias eaque inventore quo blanditiis quia, necessitatibus labore facilis ducimus fugiat commodi tempora iure veritatis deleniti, nihil maiores corrupti? Debitis facere saepe quasi ab libero omnis adipisci, exercitationem totam explicabo eligendi cumque ducimus."
          />
          <Card
            imgSrc={imgJonathan}
            name="Jonathan Walters"
            title="The team was very supportive and kept me motivated"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis qui laborum omnis hic repellendus quia nesciunt? Facilis esse culpa, vitae sequi animi rem ullam nesciunt aliquid cupiditate officia amet beatae."
          />

          <Card
            imgSrc={imgJeanette}
            name="Jeanette Harmon"
            title="An overall wonderful and rewarding experience"
            description="Lorem ipsum consectetur esse autem dolorem vero harum. Repellendus quis fugiat corrupti aliquam dolores id veritatis dolore obcaecati reiciendis ad."
          />

          <Card
            imgSrc={imgPatrick}
            name="Patrick Abrams"
            title="Awesome teaching support from TAs who did the bootcamp themeselves. Getting guidence from them and learning from their experiences was easy."
            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. vel libero porro reprehenderit qui, vero amet vitae doloremque minus ipsa, cupiditate, veritatis odio laboriosam? Maxime nam culpa quam recusandae ipsum id natus nam rem at. voluptatum illo, ab, veritatis repudiandae dolorem aliquid numquam."
          />

          <Card
            imgSrc={imgKira}
            name="Kira Whittle"
            title="Such a life-changing experience. Highly recommended!"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe pariatur assumenda quia porro veritatis consequuntur enim repellat ex ipsam eius nihil facilis obcaecati sequi reprehenderit minus veniam possimus voluptates accusantium corrupti, voluptate rerum in exercitationem? Exercitationem, sequi temporibus saepe ut, esse sed perferendis nisi dignissimos id consequatur, harum quas laboriosam necessitatibus. Et itaque tempora distinctio qui inventore soluta, deserunt eveniet velit maiores quaerat molestias iusto eaque! Similique assumenda alias in facere molestias cumque, ea recusandae vel deserunt odio adipisci possimus quibusdam eligendi nostrum dicta facilis quas. Atque tenetur repudiandae voluptate doloribus quae totam recusandae quis officiis quisquam iure aliquam dolorum nesciunt laudantium, quasi assumenda! Est molestias odio vero, at corrupti accusamus magnam atque dolores, maxime blanditiis animi in, molestiae commodi!"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
