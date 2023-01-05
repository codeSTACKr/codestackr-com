import { ChevronRightIcon } from "@heroicons/react/20/solid";

const hero = () => {
  return (
    <main>
      <div className="bg-slate-900 pt-10 sm:pt-16 lg:overflow-hidden lg:pt-8">
        <div className="mx-auto max-w-7xl">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
              <div className="lg:py-16">
                <a
                  href="https://courses.codestackr.com"
                  className="inline-flex items-center rounded-full bg-black p-1 pr-2 text-white hover:text-slate-200 sm:text-base lg:text-sm xl:text-base"
                  target="_blank"
                  rel="noreferrer nofollow"
                >
                  <span className="rounded-full bg-gradient-to-r from-orange-500 to-amber-600 px-3 py-0.5 text-sm font-semibold leading-5 text-white">
                    Learning
                  </span>
                  <span className="ml-4 text-sm">Starts here</span>
                  <ChevronRightIcon
                    className="ml-2 h-5 w-5 text-slate-500"
                    aria-hidden="true"
                  />
                </a>
                <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                  <span className="block">Become a</span>
                  <span className="block bg-gradient-to-r from-orange-200 to-amber-400 bg-clip-text pb-3 text-transparent sm:pb-5">
                    VS Code SuperHero!
                  </span>
                </h1>
                <p className="text-base text-slate-300 sm:text-xl lg:text-lg xl:text-xl">
                  Sign up to get exclusive discounts on this new course and
                  future courses!
                </p>
                <div className="mt-10 sm:mt-12">
                  <form
                    action="https://codestackr.podia.com/email_lists/75636/subscriptions"
                    acceptCharset="UTF-8"
                    method="post"
                    className="sm:mx-auto sm:max-w-xl lg:mx-0"
                  >
                    <div className="sm:flex">
                      <div className="min-w-0 flex-1">
                        <label htmlFor="email" className="sr-only">
                          Email address
                        </label>
                        <input
                          id="email"
                          type="email"
                          required="required"
                          placeholder="Enter your email"
                          className="block w-full rounded-md border-0 px-4 py-3 text-base text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-slate-900"
                        />
                      </div>
                      <div className="mt-3 sm:mt-0 sm:ml-3">
                        <button
                          type="submit"
                          className="block w-full rounded-md bg-gradient-to-r from-orange-500 to-amber-600 py-3 px-4 font-medium text-white shadow hover:from-orange-600 hover:to-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-slate-900"
                        >
                          Sign me up!
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* <div className="mt-12 -mb-40 sm:-mb-64 lg:relative lg:m-0">
              <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0 opacity-70">
                <video
                  className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                  src="./images/test.mp4"
                  autoPlay
                  muted
                  loop
                />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </main>
  );
};

export default hero;
