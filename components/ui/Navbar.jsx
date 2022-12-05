export default function Navbar() {
  return (
    <main class="flex-1 pl-96">
      <nav class="flex border-b-[1px] p-6">
        <div class="right flex w-full gap-5">
          <span class="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </span>
          <input
            type="text"
            class="w-[500px] placeholder-gray-700 outline-none"
            placeholder="Search..."
          />
        </div>
      </nav>
    </main>
  );
}
