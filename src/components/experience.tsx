import React from "react";

export function Experience({}) {
  return (
    <>
      <h2>Erfarenheter</h2>
      <section className="Experience">
        <div className="expDiv">
          <h3>Lia 1 / Praktikplats</h3>
          <h5>Wiberg Meida AB</h5>
          <p>
            - Wordpress <br />
            - Elementor, WooCommerce, Crockoblock
            <br />- Php
          </p>
        </div>
        <div className="expDiv">
          <h3>Personlig Assistent & Undersköterska</h3>
          <h5>
            Höganäs omsorg ab & höganäs kommun 2014 till idag (tjänstledig)
          </h5>
          <p>
            - Omvårdnads hjälp till vårdtagare med förvärvad hjärnskada <br />
            - Samordnare och dokumentationsansvarig <br />- Omvårdnads hjälp
            till äldre på ett vårdboende
          </p>
        </div>
        <div className="expDiv">
          <h3>Djurskötare</h3>
          <h5>Djurambulansen i skåne ab 2013 till 2014</h5>
          <p>
            - Omhändertagande av sjuka, skadade och vanvårdade djur <br />
            - Dagligt skötsel av djuren på kliniken <br />- Jour för upphittade
            djur inom Skåne och angränsande län
          </p>
        </div>
      </section>
    </>
  );
}
