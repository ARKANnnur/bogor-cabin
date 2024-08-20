import SideNavigation from "@/app/_components/SideNavigation";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col lg:flex-row gap-5 p-5 sm:p-10 mb-20">
      <SideNavigation />
      {children}
    </div>
  );
}
