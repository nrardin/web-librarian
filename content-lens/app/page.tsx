"use client";
import PopUpComponent from "@/components/popup";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Librarian - A powerful web app for searching and highlighting content on webpages."
        />
        <title>Librarian - Search and Highlight Web App</title>

        {/* Tailwind CSS */}
        <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
          rel="stylesheet"
        />

        {/* Material Icons */}
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Head>

      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-4">
          Librarian - Search and Highlight Web App
        </h1>
        <p className="text-xl font-medium mb-8">
          Discover and highlight content on webpages with ease.
        </p>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold mb-4">Features</h2>
          <ul className="space-y-4">
            <li className="flex items-center mb-4">
              <svg
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="shrink w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
              <i className="mr-4">Search</i>
              Powerful Search: Quickly find relevant content within a webpage.
            </li>
            <li className="flex items-center mb-4">
              <svg
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="shrink w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                />
              </svg>
              <i className="material-icons mr-2">Highlight</i>
              Content Highlighting: Highlight important sections for future
              reference.
            </li>
            <li className="flex items-center mb-4">
              <svg
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="shrink w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8.25V18a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 18V8.25m-18 0V6a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6zM7.5 6h.008v.008H7.5V6zm2.25 0h.008v.008H9.75V6z"
                />
              </svg>
              <i className="material-icons mr-2">Preview</i>
              Cross-Page Searching: Seamlessly search and access content from
              other pages on the same domain.
            </li>
          </ul>
        </section>
        <br></br>
        <section>
          <h2 className="text-2xl font-bold mb-4">How it Works</h2>
          <p>
            Librarian is a web app that empowers users to search for specific
            content within a webpage. By entering keywords or phrases, the app
            quickly scans the page's content and displays the relevant sections,
            allowing users to easily find what they're looking for.
          </p>
          <br></br>
          <p>
            In addition to searching, Librarian enables users to highlight
            important sections of a webpage. By selecting the desired text and
            clicking the highlight button, the app will mark the content for
            future reference.
          </p>
          <br></br>
          <p>
            Librarian goes beyond individual pages by providing cross-page
            searching capabilities. Users can search for content not only within
            the current page but also across other pages on the same domain.
            This feature enhances productivity and saves time by allowing users
            to access information from various sources within a single app.
          </p>
        </section>
        <br></br>
        <PopUpComponent></PopUpComponent>
      </div>
      <style jsx>
        {`
          /* Custom styling */
    .container {
      max-width: 800px;
      margin: 0 auto;
      padding: 2rem;
    }

    .section-title {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 1rem;
    }

    .paragraph {
      margin-bottom: 1rem;
    }

    .image {
      max-width: 100%;
      height: auto;
      margin-bottom: 1rem;
    }
        }
    `}
      </style>
    </>
  );
}
