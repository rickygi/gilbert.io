import Head from 'next/head';
import { GitHubLogo, InstagramLogo, LinkedInLogo } from '../icons';

const Home = () => (
  <>
    <Head>
      <title>gilbert.io</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className="flex justify-center px-4 py-4">
      <div className="max-w-xl rounded overflow-hidden shadow-lg">
        <img className="w-full" src="/images/cover.jpg" alt="Ocean Sunset" />
        <div className="flex justify-left mx-6 -mt-12">
          <img
            className="h-40 w-40 rounded-full border-white border-2 -mt-12 shadow-lg"
            src="/images/avatar.jpg"
            alt="Ricky Gilbert"
          />
        </div>

        <div className="font-sans px-6 py-4">
          <h3 className="font-bold text-2xl mb-2">Ricky Gilbert</h3>
          <p className="text-base text-gray-700">
            Curiosity, passion and empathy. Design, code and technology.
          </p>
        </div>

        <div className="px-6 pb-4">
          <div className="flex justify-start items-center text-gray-500">
            <a
              className="block flex items-center hover:text-gray-700 mr-2"
              href="https://linkedin.com/in/rickygi"
            >
              <LinkedInLogo className="fill-current h-8 w-8" title="LinkedIn" />
            </a>
            <a
              className="block flex items-center hover:text-gray-700 mr-2"
              href="https://github.com/rickygi"
            >
              <GitHubLogo className="fill-current h-8 w-8" title="GitHub" />
            </a>
            <a
              className="block flex items-center hover:text-gray-700"
              href="https://instagram.com/rickygi"
            >
              <InstagramLogo
                className="fill-current h-8 w-8"
                title="Instagram"
              />
            </a>
          </div>
        </div>
      </div>
    </main>
  </>
);

export default Home;
