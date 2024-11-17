# In the main branch:

First, intall the dependencies
```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The objective of this test is to implement a server side component with dynamically generated metadata by calling an endpoint that will last 2 seconds (https://postman-echo.com/delay/2)

The dynamic metadata is generated using Next.js's special function generateMetadata(). Both this function and the page need to fetch data from the same API endpoint, so the requests are made in parallel.

The expected behavior is that the `loading fallback` should render immediately, and after 2 seconds, the final page should render with the data loaded from the API. However, this is not working as expected. Currently, the request gets blocked, nothing is displayed in the browser, and after 2 seconds, the page renders directly with the fetched data, completely skipping the loading fallback.

When the generateMetadata function is commented out, the <Suspense> block works correctly as expected. This behavior without generateMetadata can be observed in the `nogm` branch by running the following command:
```bash
git checkout nogm
```

This is a major issue because it prevents the use of server components while providing both a good user experience and good SEO.