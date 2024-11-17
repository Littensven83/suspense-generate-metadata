import { Suspense } from "react"

export async function generateMetadata() {
    const results = await fetch('https://postman-echo.com/delay/2');
    await results.json();
    return {
        title: 'Test',
        description: 'Test',
    }
}

async function PageContent() {
    const results = await fetch('https://postman-echo.com/delay/2');
    await results.json();
    return  <h1>Test</h1>
}

export default async function Page() {
    return (
        <Suspense fallback={<div>loading running 2 seconds later</div>} key={Math.random()}>
            <PageContent />
        </Suspense>
    )
}