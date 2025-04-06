import React from 'react';
import { Mail, Twitter, MessageSquare, Send } from 'lucide-react';

interface ContactMethod {
  name: string;
  value: string;
  icon: React.ComponentType<any>;
  href: string | null;
}

const CONTACT_METHODS: ContactMethod[] = [
  {
    name: "Email",
    value: "mark@benhaimstudios.com",
    icon: Mail,
    href: "mailto:mark@benhaimstudios.com"
  },
  {
    name: "Twitter/X",
    value: "@markbenhaim",
    icon: Twitter,
    href: "https://twitter.com/markbenhaim"
  },
  {
    name: "Discord",
    value: "markbenhaim",
    icon: MessageSquare,
    href: null
  },
  {
    name: "Telegram",
    value: "@markbenhaim",
    icon: Send,
    href: "https://t.me/markbenhaim"
  },
];

const Contact: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Contact Me</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Feel free to reach out through any of the following methods:
      </p>
      <ul>
        {CONTACT_METHODS.map((method) => (
          <li key={method.name} className="flex items-center mb-2">
            {method.icon && React.createElement(method.icon, { className: "mr-2 h-5 w-5 text-gray-500 dark:text-gray-400" })}
            {method.href ? (
              <a href={method.href} className="text-blue-600 hover:underline dark:text-blue-400">
                {method.name}: {method.value}
              </a>
            ) : (
              <span>
                {method.name}: {method.value}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contact;
