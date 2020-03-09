import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Rev from "./rev.js";

function Reviews() {
  return (
    <div className="reviews container">
      <br />
      <p className="title is-4">Recommended Reviews:</p>
      <Rev
        name="Peter Brooks"
        subject="Computer Science"
        rating={96}
        img="http://www.micromind.com/peter2.jpg"
        comment="Gregory can program well, but he lacks consistent performance when writing programs on paper. I guess he simply can't do things right the first time."
      />
      <Rev
        name="Carrie Chu"
        subject="Algebra 2"
        rating={70}
        img="https://lh3.googleusercontent.com/a-/AOh14GjuVsV5HAPJ37DbrW2e0uNCUM-qQnIhysNBMoI=s75-c"
        comment="He should take better notes and prepare more for quizzes. Also, stop complaining about DeltaMath. DeltaMath is perfect, it Gregory who must ascend to the level of DeltaMath."
      />
      <Rev
        name="Lilya Shamazov"
        subject="Music Appreciation"
        rating={20}
        img="https://stuy.enschool.org/ourpages/auto/profiles/210628/STUYHS1574083157301.jpg"
        comment="Does he even know what a note is?"
      />
      <Rev
        name="Allyson Compton"
        subject="Global Studies"
        rating={90}
        img="https://www.nydailynews.com/resizer/_hVUwEQ0-CyBKofgeVijclD7Tqk=/1200x1200/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/TOZ2H3R5OZNICWJTFGN54ZAUDY.jpg"
        comment="He has to read and annotate in advance in order to be prepared for the Harkness seminar!"
      />
      <Rev
        name="Brenda Garcia"
        subject="AP World History"
        rating={70}
        img="https://0.academia-photos.com/18405598/5612217/6387663/s200_brenda.garcia.jpg"
        comment="He does the homework, but he needs to improve his writing skills if he wants to do well on the tests."
      />
      <Rev
        name="Katherine Kincaid"
        subject="Freshman Composition"
        rating={120}
        img="https://images.squarespace-cdn.com/content/5744defc8a65e2b59a625024/1469059134926-TGNE14GFPQEA8XBZKT9S/Kate+Kincaid.JPG?content-type=image%2Fjpeg"
        comment="I love his writing!!! It's great when he takes creative risks!! He should strech to be even more creative!!!"
      />

      <Rev
        name="Gary Rubinstein"
        subject="Math Research"
        rating={80}
        img="https://pbs.twimg.com/profile_images/695380907415343105/lWFeFuls_400x400.jpg"
        comment="It's not always clear if he's awake, but his work is usually coherent."
      />
    </div>
  );
}

export default Reviews;
