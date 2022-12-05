import { SideBar, Navbar } from "..";

export default function PageContainer({ actualPage }) {
  return (
    <div class="flex min-h-screen bg-white">
      <SideBar />
      <Navbar />
    </div>
  );
}
