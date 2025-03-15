export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        <h1 className="text-5xl font-bold">gilbert.io</h1>
        <p>ricky@gilbert.io</p>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a href="https://twitter.com/rickygilbe" className="flex items-center gap-2 hover:underline hover:underline-offset-4">
            x
          </a>
          <a href="https://www.instagram.com/rickygi/" className="flex items-center gap-2 hover:underline hover:underline-offset-4">
            instagram
          </a>
          <a href="https://github.com/rickygi" className="flex items-center gap-2 hover:underline hover:underline-offset-4">
            github
          </a>
          <a href="https://www.linkedin.com/in/rickygi/" className="flex items-center gap-2 hover:underline hover:underline-offset-4">
            linkedin
          </a>
        </div>
      </main>
    </div>
  )
}
