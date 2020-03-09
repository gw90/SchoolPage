import React from "react";
import logo from "./logo.svg";
import "./App.css";

function MainInfo() {
  return (
    <div className="maininfo container">
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img
              src="https://lh3.googleusercontent.com/YFuW4ZI1XJEED0L97ekNz-eVy3EP2y_vNCp7qgIRUQyg4rMrS5Q1rnxWDXq8FMBOlL-rUdTaK6hiARIiKR9a2l8PLx5WMZsncDeUuZ7IvBLsE26uF5Gj0a-DnBFkeneK6NBKuawUVerRu10Fj4SprWEjK9cfmEvtrQzHW3OUzy0ckO0blq9n4V_eiWTv_FpWjdFfSA6w_7QjymgAKk8ApHLa-ENbDjJr1MqQf3BN_6eXyyomIa0dBlCqSQXd1D-EjdRxp_Ypopf3zWqPqbkzYOeT1VFyK2hfBYToLzOy7BoPMFVz-zkd6ooN3eYFQNVBRW_4ssBlOjo88prhdukmXmKn4dFvRpCJAPZPg5YqIQ-dfWnUrCO-oQuqpjU1U3iMiMub5y5uGpMaKyckgHiXPT7eQz2k90fmUT-yLG6qQ4h4z-bBKB9hFssfa5S90FpQGmeHDKsn4RpmBOoJdYLcBaImgIpbHyBnqOvq13Rzpg324Y_6JPnI4EQBAiLFmm53HWtIYXVRl9a8tI30mQbP0GZGokMnfUs13dd4t4WcQfjg-hAI7zBe2LjKxCrAZuwXEeN_owFjxgQhWlr3iBr-MlmrfRgqwe7DthcA5av-y4NjApL2NUETE_1tvlyRnH_SpjfymNJEwVafHzaQRkYgt1chU_4KldhjlPqeMdlUzreBbYXx23E18fk=w999-h749-no"
              alt="Placeholder image"
            />
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img
                  src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-1/p160x160/14522802_163678717417498_8906686415202650609_n.jpg?_nc_cat=103&_nc_sid=dbb9e7&_nc_ohc=GgIZMW04aRcAX8pm5rP&_nc_ht=scontent-lga3-1.xx&_nc_tp=6&oh=f05084de8a1957ea7492bf62b339fe90&oe=5E911192"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-4">Gregory C. Wickham</p>
              <p class="subtitle is-6">10th grader</p>
            </div>
          </div>

          <div class="content">
            Gregory Wickham is an unusually truculent and contrary student who
            seems to enjoy contradicting his teachers more than trying to
            understand and absorb what we have to say. If he ends up in your
            class, try to avoid calling on him at all costs! <a>#knowitall</a>
            <a href="#">#annoying</a>
            <a href="#">#gotluckyontheshsat</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainInfo;
