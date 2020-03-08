import Head from 'next/head';
import IconsList from '../components/icons-list';

function Home() {
  return (
    <>
      <Head>
        <title>gilbert.io</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="author" content="Ricky Gilbert" />
        <meta
          name="description"
          content="Curiosity, passion and empathy. Design, code and technology."
        />
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

          <div className="px-6 py-4 font-sans">
            <h3 className="font-bold text-2xl mb-2">Ricky Gilbert</h3>
            <p className="text-base text-gray-700">
              Curiosity, passion and empathy. Design, code and technology.
            </p>
          </div>

          <div className="px-6 pb-4">
            <IconsList />
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
