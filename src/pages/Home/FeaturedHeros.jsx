import React from 'react'
import featured1 from '../../assets/banner/featured1.webp';
import featured2 from '../../assets/banner/featured2.webp';

const FeaturedHeros = () => {
  return (
    <section className=" dark:text-gray-100">
      <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
        <div>
          <h2 className="md:text-3xl font-bold tracking-tight text-center sm:text-5xl dark:text-gray-50">
            Learn About Our Featured Heros
          </h2>
          <p className="max-w-3xl mx-auto mt-4 md:text-xl text-lg text-center dark:text-gray-400">
            The savior of the Universe
          </p>
        </div>
        <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h3 className="md:text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-50">
              Who are these Marvel Heroes ?
            </h3>
            <p className="mt-3 md:text-lg dark:text-gray-400">
              Marvel heroes are beloved worldwide, captivating audiences with
              their extraordinary powers and compelling stories. From the iconic
              Avengers to the diverse X-Men,
            </p>
            <div className="mt-12 space-y-12">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-7 h-7"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="md:text-lg font-medium leading-6 dark:text-gray-50">
                    "Assemble: The Epic Journey of the Avengers"
                  </h4>
                  <p className="mt-2 dark:text-gray-400">
                    The Epic Journey of the Avengers" chronicles the
                    extraordinary team of Earth's mightiest heroes as they join
                    forces to defend the world against doom.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-7 h-7"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="md:text-lg font-medium leading-6 dark:text-gray-50">
                    "Unleashed: The Incredible Power of Hulk"
                  </h4>
                  <p className="mt-2 dark:text-gray-400">
                    The Incredible Power of Hulk" explores the tumultuous and
                    incredible transformation of Bruce Banner into the
                    unstoppable green behemoth,
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-7 h-7"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="md:text-lg font-medium leading-6 dark:text-gray-50">
                    "Web-Slinging Adventures: The Spectacular Spider-Man"
                  </h4>
                  <p className="mt-2 dark:text-gray-400">
                    The Spectacular Spider-Man" takes us on a thrilling ride
                    through the life of Peter Parker, a high school student
                    turned web-slinging superhero.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="mt-10 lg:mt-0">
            <img
              src={featured1}
              alt=""
              className="mx-auto rounded-lg shadow-lg dark:bg-gray-500"
            />
          </div>
        </div>
        <div>
          <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
            <div className="lg:col-start-2">
              <h3 className="md:text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-50">
                "Guardians of the Galaxy: Cosmic Conquerors"
              </h3>
              <p className="mt-3 md:text-lg dark:text-gray-400">
                Guardians of the Galaxy introduces a ragtag group of misfits who
                come together, defying odds and cosmic dangers, to protect the
                galaxy from interstellar villains .
              </p>
              <div className="mt-12 space-y-12">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="md:text-lg font-medium leading-6 dark:text-gray-50">
                      "Mystical Heroes: Doctor Strange and the Multiverse"
                    </h4>
                    <p className="mt-2 dark:text-gray-400">
                      Doctor Strange and the Multiverse" invites us to journey
                      alongside the brilliant and arrogant
                      neurosurgeon-turned-sorcerer supreme, Dr. Stephen Strange,
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="md:text-lg font-medium leading-6 dark:text-gray-50">
                      "Captain Marvel: The Heroine of the Stars"
                    </h4>
                    <p className="mt-2 dark:text-gray-400">
                      The Heroine of the Stars" explores the empowering origin
                      story of Carol Danvers, a fearless Air Force pilot turned
                      cosmic-powered superhero,
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="md:text-lg font-medium leading-6 dark:text-gray-50">
                      "Iron Man: Genius, Billionaire, Superhero"
                    </h4>
                    <p className="mt-2 dark:text-gray-400">
                      Genius, Billionaire, Superhero" showcases the charismatic
                      Tony Stark, an ingenious billionaire industrialist who
                      dons his high-tech suit of armor to become Iron Man,
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
              <img
                src={featured2}
                alt=""
                className="mx-auto rounded-lg shadow-lg dark:bg-gray-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedHeros