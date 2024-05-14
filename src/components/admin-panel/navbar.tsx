import { PageTitle } from "@/src/components/admin-panel/page-title";
import { SheetMenu } from "@/src/components/admin-panel/sheet-menu";
import { UserNav } from "@/src/components/admin-panel/user-nav";
import { ModeToggle } from "@/src/components/mode-toggle";
import { useFullScreen } from "../dashboard/tiptap/fullScreen.store";

export function Navbar() {
  const { isFullScreen, setIsFullScreen } = useFullScreen();
  return (
    <header
      className={`supports-backdrop-blur:bg-background/60 sticky top-0 w-full border-b bg-background/95 backdrop-blur ${
        isFullScreen ? "z-30" : "z-[4000]"
      }`}
    >
      <div className="mx-4 sm:mx-8 flex h-14 items-center">
        <div className="flex items-center space-x-4 lg:space-x-0">
          <SheetMenu />
          <PageTitle />
        </div>
        <div className="flex flex-1 items-center space-x-2 justify-end">
          <ModeToggle />
          <UserNav />
        </div>
      </div>
    </header>
  );
}
