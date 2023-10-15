import "./Card.scss";

function Card() {
  return (
    <>
      <article className="card">
        <header className="card__header">
          <img
            className="card-image"
            src="https://cdn.pixabay.com/photo/2019/10/28/21/21/halloween-4585684_640.jpg"
            alt="spooky pumpking"
          />
          <div className="card__date">
            <span className="card__date__day">31</span>
            <span className="card__date__month"> oct</span>
          </div>
        </header>
        <div className="card__body">
          <div className="card__category">Pictures</div>
          <h2 className="card__title">Happy Halloween</h2>
          <p className="card__description">
            Trick or treat!
            <br />
            It's that spooky time of year, Ghosts and goblins, whispers you may hear. With costumes and candies, let's
            all play a part, In this haunted celebration, let's fill every heart. <br />
            So, whether you're a witch, a vampire, or a ghoul, Let's make this night magical, let's make it cool. With
            pumpkins and spells, under the moon's soft gleam, Happy Halloween to all, may it be a hauntingly good
            dream!"
          </p>
        </div>
      </article>
    </>
  );
}

export default Card;
