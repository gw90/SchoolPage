import React from "react";
import StarRatingComponent from "react-star-rating-component";

function Rev(props) {
  return (
    <div className="rev">
      <article class="media">
        <figure class="media-left">
          <p class="image is-64x64">
            <img height="128px" width="128px" src={props.img} />
          </p>
        </figure>
        <div class="media-content">
          <div class="content">
            <StarRatingComponent
              name="rate2"
              editing={false}
              starCount={5}
              value={props.rating / 20}
            />
            <br />
            <strong>{props.name}</strong> <small>{props.subject}</small>
            <br />
            {props.comment}
          </div>

          <nav class="level is-mobile">
            <div class="level-left">
              <a class="level-item">
                <span class="icon is-small">
                  <i class="fas fa-reply"></i>
                </span>
              </a>
              <a class="level-item">
                <span class="icon is-small">
                  <i class="fas fa-retweet"></i>
                </span>
              </a>
              <a class="level-item">
                <span class="icon is-small">
                  <i class="fas fa-heart"></i>
                </span>
              </a>
            </div>
          </nav>
        </div>
      </article>
      <hr />
    </div>
  );
}

const stylin = {
  date: {
    paddingLeft: "1em"
  }
};

export default Rev;
