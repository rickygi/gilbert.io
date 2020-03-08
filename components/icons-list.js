import React from 'react';
import { GitHubLogo, InstagramLogo, LinkedInLogo } from './icons';

function IconsList() {
  return (
    <ul className="flex justify-start items-center text-gray-500">
      <li className="flex items-center">
        <a
          className="hover:text-gray-700 mr-2"
          href="https://linkedin.com/in/rickygi"
        >
          <LinkedInLogo className="fill-current h-8 w-8" title="LinkedIn" />
        </a>
      </li>
      <li className="flex items-center">
        <a
          className="hover:text-gray-700 mr-2"
          href="https://github.com/rickygi"
        >
          <GitHubLogo className="fill-current h-8 w-8" title="GitHub" />
        </a>
      </li>
      <li className="flex items-center">
        <a className="hover:text-gray-700" href="https://instagram.com/rickygi">
          <InstagramLogo className="fill-current h-8 w-8" title="Instagram" />
        </a>
      </li>
    </ul>
  );
}

export default IconsList;
