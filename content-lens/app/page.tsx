import Head from 'next/head';

const LibrarianPage: React.FC = () => {
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
        <h1 className="text-4xl font-bold mb-4">Librarian - Search and Highlight Web App</h1>
        <p className="text-xl font-medium mb-8">
          Discover and highlight content on webpages with ease.
        </p>

        <section>
          <h2 className="text-2xl font-bold mb-4">Features</h2>
          <ul>
            <li className="flex items-center mb-4">
              <i className="material-icons mr-2">search</i>
              Powerful Search: Quickly find relevant content within a webpage.
            </li>
            <li className="flex items-center mb-4">
              <i className="material-icons mr-2">highlight</i>
              Content Highlighting: Highlight important sections for future reference.
            </li>
            <li className="flex items-center mb-4">
              <i className="material-icons mr-2">open_in_new</i>
              Cross-Page Searching: Seamlessly search and access content from other pages on the same domain.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">How it Works</h2>
          <p>
            Librarian is a web app that empowers users to search for specific content within a webpage. By entering
            keywords or phrases, the app quickly scans the page's content and displays the relevant sections, allowing
            users to easily find what they're looking for.
          </p>
          <p>
            In addition to searching, Librarian enables users to highlight important sections of a webpage. By selecting
            the desired text and clicking the highlight button, the app will mark the content for future reference.
          </p>
          <p>
            Librarian goes beyond individual pages by providing cross-page searching capabilities. Users can search for
            content not only within the current page but also across other pages on the same domain. This feature
            enhances productivity and saves time by allowing users to access information from various sources within a
            single app.
          </p>
        </section>
      </div>
    </>
  );
};

export default LibrarianPage;
