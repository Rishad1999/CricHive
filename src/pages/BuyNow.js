import accessories from "../assets/accessories.png";
import tickets from "../assets/tickets.png";
import bat from "../assets/bat.png";
import shoe from "../assets/shoe.png";
import offer from "../assets/offer.png";
import "tailwindcss/tailwind.css";

import {Footer } from "../components";

export const BuyNow = () => {
  return (
    <>
      <section id="hero">
        <div class="container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:flex-row md:space-y-0">
          <div class="flex flex-col mb-32 space-y-12 md:w-1/2">
            <h1 class="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
              Make a customer, not a sale
            </h1>
            <p class="max-w-sm text-center text-darkGrayisBlue md:text-left">
              Welcome to our international cricket hub, the ultimate destination
              for cricket enthusiasts! Our website offers a wealth of
              information on international cricket matches, teams, and players.
              With live updates and expert analysis, we provide a front-row seat
              to the exciting world of cricket. So, whether you're a hardcore
              cricket fan or just looking for some cricket news and insights,
              our website has got you covered!
            </p>
          </div>
          <div class="mad:w-1">
            <img src={accessories} alt="" />
          </div>
        </div>
      </section>
      <section id="features">
        <div class="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
          <div class="flex flex-col space-y-12 md:w-1/2">
            <h2 class="max-w-md text-red-500 font-bold text-5xl text-center md:text-left">
              50% DISCOUNT
            </h2>
            <div class="bg-white-500">
              <img src={offer} alt="" />
            </div>
          </div>

          <div class="flex flex-col space-y-8 md:w-1/2">
            <div class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              <div class="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                <div class="flex items-center space-x-2">
                  <div class="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                    01
                  </div>
                  <h3 class="text-base font-bold md:mb-4 md:hidden">
                    Tickets for booking
                  </h3>
                </div>
              </div>

              <div>
                <h3 class="hidden mb-4 text-lg font-bold md:block">
                  Tickets for booking
                </h3>
                <img src={tickets} alt="" />
              </div>
            </div>

            <div class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              <div class="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                <div class="flex items-center space-x-2">
                  <div class="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                    02
                  </div>
                  <h3 class="text-base font-bold md:mb-4 md:hidden">
                    Sport Accessories
                  </h3>
                </div>
              </div>

              <div>
                <h3 class="hidden mb-4 text-lg font-bold md:block">
                  Sport Accessories
                </h3>
                <img src={bat} alt="" />
              </div>
            </div>

            <div class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              <div class="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                <div class="flex items-center space-x-2">
                  <div class="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                    03
                  </div>
                  <h3 class="text-base font-bold md:mb-4 md:hidden">
                    Call for advertising
                  </h3>
                </div>
              </div>

              <div>
                <h3 class="hidden mb-4 text-lg font-bold md:block">
                  Call for advertising
                </h3>
                <img src={shoe} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};
