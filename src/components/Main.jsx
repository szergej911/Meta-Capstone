import React from "react";

export default function Main() {
  return (
    <main>
      <section className="section-header">
        <h1>Little Lemon</h1>
        <p className="section-subtitle">Chicago</p>
        <p className="section-text">
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <button>Reserve a Table</button>
        <img src="./public/restauranfood.jpg" alt="Some fancy food" />
      </section>

      <section className="section-article">
        <h2>This weeks specials!</h2>
        <button>Online Menu</button>
        <article>
          <img src="./public/greek salad.jpg" alt="Greek salad" />
          <p>Greek salad</p>
          <p>$ 12.99</p>
          <p className="article-text">
            The gamous greek salad of crispy lettuce, peppers, olives and our
            Chichago style feta cheese, garnished with crunchy garlic and
            rosemary croutons
          </p>
          <a href="#">Order a delivery</a>
        </article>
        <article>
          <img src="./public/bruchetta.svg" alt="Bruchetta" />
          <p>Bruchetta</p>
          <p>$ 5.99</p>
          <p className="article-text">
            Our Bruschetta is made from grilled bread that has been smeared with
            garlick and seasoned with salt and olive oil.
          </p>
          <a href="#">Order a delivery</a>
        </article>
        <article>
          <img src="./public/lemon dessert.jpg" alt="Lemon Dessert" />
          <p>Lemon Dessert</p>
          <p>$ 5.00</p>
          <p className="article-text">
            This comes straight from grandma's recipe book, every last
            ingredients has been sourced and is as authentic as can be imagined.
          </p>
          <a href="#">Order a delivery</a>
        </article>
      </section>
    </main>
  );
}
