import React from 'react'

const Blog = () => {
  return (
    <div className="px-10 mt-8">
      <div>
        <p className="font-bold text-xl mb-4">
          What is an access token and refresh token? How do they work and where
          should we store them on the client-side ?
        </p>
        <p className="my-3">
          Access Token: An access token is a credential that grants the client
          (such as a user's device or application) permission to access specific
          resources on a server. It is usually issued after successful
          authentication and is used to authenticate subsequent requests to
          protected endpoints. Access tokens have a limited lifespan and
          typically expire after a certain period.
        </p>
        <p className="my-3">
          Refresh Token: A refresh token is a credential that is used to obtain
          a new access token when the current one expires. It is usually
          longer-lived compared to access tokens and is used to refresh the
          access token without requiring the user to re-authenticate. Refresh
          tokens are more sensitive and need to be stored securely.
        </p>
        <p className="my-3">
          Access Token: Access tokens are generally short-lived, so they can be
          stored in memory or a short-lived storage mechanism like a session
          cookie. This way, they can be easily accessed by the client to include
          them in subsequent API requests.
        </p>
        <p className="my-3">
          Refresh Token: Refresh tokens should be stored securely on the
          client-side to prevent unauthorized access. One common approach is to
          store them in an HTTP-only cookie, which helps mitigate cross-site
          scripting (XSS) attacks. Another option is to store them securely in a
          local storage mechanism with appropriate encryption and access
          controls.
        </p>
      </div>
      <div className="my-8">
        <p className="font-bold text-xl mb-4">
          Compare SQL and NoSQL databases?
        </p>
        <p>
          SQL and NoSQL are two different types of database systems, each with
          its own strengths and use cases. Here's a brief comparison between SQL
          and NoSQL databases:
        </p>
        <p className="my-4 font-bold text-lg">SQL Databases:</p>
        <ol className="list-decimal">
          <li className="my-3">
            Structure: SQL databases are based on a structured, tabular format
            with predefined schemas. They use SQL (Structured Query Language)
            for defining and manipulating data.
          </li>
          <li className="my-3">
            Data Integrity: SQL databases enforce strict data integrity rules,
            such as primary keys, foreign keys, and constraints, ensuring data
            consistency and accuracy.
          </li>
          <li className="my-3">
            ACID Transactions: SQL databases support ACID (Atomicity,
            Consistency, Isolation, Durability) transactions, which ensure
            reliable and consistent data operations.
          </li>
          <li className="my-3">
            Scalability: SQL databases are vertically scalable, meaning they
            perform well when handling complex queries and large datasets. They
            are generally not as easily scalable horizontally across multiple
            servers.
          </li>
        </ol>
        <p className="font-bold text-lg ">NoSQL Databases:</p>
        <ol className="list-decimal">
          <li className="my-3">
            Flexibility: NoSQL databases offer a flexible schema design,
            allowing for dynamic and unstructured data. They do not require a
            predefined schema, making them suitable for handling evolving or
            rapidly changing data.
          </li>
          <li className="my-3">
            Scalability: NoSQL databases excel at horizontal scalability,
            allowing them to handle large amounts of data and high traffic loads
            across multiple servers or clusters.
          </li>
          <li className="my-3">
            Performance: NoSQL databases can offer high performance and low
            latency for specific use cases by optimizing for specific data
            models and distribution strategies.
          </li>
          <li className="my-3">
            Data Variety: NoSQL databases support various data models, including
            key-value, document, columnar, and graph databases, catering to
            different data structures a font-bold text-lgnd access patterns.
          </li>
        </ol>
      </div>
      <div className="mb-8">
        <p className="font-bold text-xl mb-4">
          What is express js? What is Nest JS ?
        </p>
        <p className='my-3'>
          Express.js is a popular web application framework for Node.js. It
          provides a simple and minimalist approach to building web servers and
          APIs. With Express.js, developers can easily handle HTTP requests,
          define routes, manage middleware, and render dynamic HTML pages.
        </p>
        <p className='my-3'>
          NestJS, on the other hand, is a framework for building scalable and
          efficient server-side applications. It is built on top of Node.js and
          uses TypeScript as its primary language. NestJS follows the modular
          architecture pattern and provides a structured way to develop backend
          applications. It incorporates many design principles from Angular,
          making it familiar for developers coming from the Angular ecosystem.
        </p>
      </div>
      <div className="my-4 pb-4">
        <p className="font-bold text-xl mb-4">
          What is MongoDB aggregate and how does it work
        </p>
        <p className='my-4 className="my-3"'>
         In MongoDB, the
          aggregate function is used to perform advanced operations on
          collections of documents. It works by using a series of steps called
          stages that process the data in a specific order.
        </p>
        <ol className="list-decimal">
          <li className="my-3">
            Input Stage: You start by specifying which documents to work with.
            You can filter the documents based on certain criteria, like
            matching specific values or conditions.
          </li>
          <li className="my-3">
            Transformation Stages: Next, you can modify the documents or extract
            specific information from them. For example, you can select only
            certain fields, calculate new values, or sort the documents based on
            a field.
          </li>
          <li className="my-3">
            Data Manipulation Stages: You can further modify the documents by
            adding new fields, removing existing fields, or changing their
            values. These stages allow you to shape the data to fit your needs.
          </li>
          <li className="my-3">
            Data Aggregation Stages: Here, you can perform more advanced
            operations like grouping documents together based on a common value,
            dividing them into groups (called buckets), or combining data from
            different collections.
          </li>
          <li className="my-3">
            Output Stage: Finally, you can specify how you want the results to
            be presented. You can choose to include or exclude certain fields,
            format the data, or store the results in a new collection
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Blog