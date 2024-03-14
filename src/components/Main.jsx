export default function Main() {
  return (
    <main>
      <section className="section-header">
        <div className="section-container">
          <h1>Little Lemon</h1>
          <p className="section-subtitle">Chicago</p>
          <p className="section-text">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <button className="button-reserve">Reserve a Table</button>
        </div>
        <img
          src="./public/restauranfood.jpg"
          alt="Some fancy food"
          className="restaurant-food"
        />
      </section>

      <section className="section-article">
        <div className="article-container">
          <h2>This weeks specials!</h2>
          <button>Online Menu</button>
          <div className="article-flex">
            <div className="article-piece">
              <article>
                <img
                  src="./public/greek salad.jpg"
                  alt="Greek salad"
                  className="greek-salad"
                />
                <p className="article-title">Greek salad</p>
                <p className="price">$ 12.99</p>
                <p className="article-text">
                  The gamous greek salad of crispy lettuce, peppers, olives and
                  our Chichago style feta cheese, garnished with crunchy garlic
                  and rosemary croutons
                </p>
                <a href="#" className="order">
                  Order a delivery
                </a>
              </article>
            </div>
            <div className="article-piece">
              <article>
                <img
                  src="./public/bruchetta.svg"
                  alt="Bruchetta"
                  className="bruchetta"
                />
                <p className="article-title">Bruchetta</p>
                <p className="price">$ 5.99</p>
                <p className="article-text">
                  Our Bruschetta is made from grilled bread that has been
                  smeared with garlick and seasoned with salt and olive oil.
                </p>
                <a href="#" className="order">
                  Order a delivery
                </a>
              </article>
            </div>
            <div className="article-piece">
              <article>
                <img src="./public/lemon dessert.jpg" alt="Lemon Dessert" />
                <p className="article-title">Lemon Dessert</p>
                <p className="price">$ 5.00</p>
                <p className="article-text">
                  This comes straight from grandmas recipe book, every last
                  ingredients has been sourced and is as authentic as can be
                  imagined.
                </p>
                <a href="#" className="order">
                  Order a delivery
                </a>
              </article>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
