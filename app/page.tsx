import Image from 'next/image';

import cover from '../public/images/cover.jpg';
import profile from '../public/images/profile.jpg';

export default function Home() {
  return (
    <main className="flex justify-center px-4 py-4">
      <div className="max-w-xl rounded overflow-hidden shadow-lg">
        <Image src={cover} alt="Ocean Sunset" className="w-full" />
        <div className="flex justify-left mx-6 -mt-12">
          <Image
            src={profile}
            alt="Ricky Gilbert"
            className="h-40 w-40 rounded-full border-white border-2 -mt-12 shadow-lg"
          />
        </div>

        <div className="px-6 py-4 font-sans">
          <h3 className="font-bold text-2xl mb-2">Ricky Gilbert</h3>
          <p className="text-base text-gray-700">
            Curiosity, passion and empathy. Design, code and technology.
          </p>
        </div>

        <div className="px-6 pb-4">
          <ul className="flex justify-start items-center text-gray-500">
            <li className="flex items-center">
              <a className="mr-2" href="https://linkedin.com/in/rickygi">
                <Image
                  src="/icons/logo-linkedin.svg"
                  alt="LinkedIn"
                  width={32}
                  height={32}
                />
              </a>
            </li>
            <li className="flex items-center">
              <a className="mr-2" href="https://github.com/rickygi">
                <Image
                  src="/icons/logo-github.svg"
                  alt="GitHub"
                  width={32}
                  height={32}
                />
              </a>
            </li>
            <li className="flex items-center">
              <a href="https://instagram.com/rickygi">
                <Image
                  src="/icons/logo-instagram.svg"
                  alt="Instagram"
                  width={32}
                  height={32}
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
