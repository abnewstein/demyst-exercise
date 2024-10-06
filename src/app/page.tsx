export default async function Home() {
  const anchorStyle =
    "shadow-lg rounded-full border border-solid border-black/[.08] transition-colors flex items-center justify-center hover:shadow-xl hover:bg-sky-300 hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44";
  return (
    <>
      <h1 className="text-xl font-bold">Demyst Balance sheet exercise</h1>
      <div className="flex gap-4 items-center flex-col sm:flex-row">
        <a className={anchorStyle} href="/balance-sheet-csr">
          Go to the BalanceSheet (Client side rendered)
        </a>
        <a className={anchorStyle} href="/balance-sheet-ssr">
          Go to the BalanceSheet (Server side rendered)
        </a>
      </div>
    </>
  );
}
