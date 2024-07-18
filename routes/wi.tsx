
import * as wi from "@preact-icons/wi";
import IconSet from "IconSet";
import SideBar from "Sidebar";
export default function Page() {
  return (
    <div class="flex h-full">
      <SideBar/>
      <IconSet libId="wi" icons={wi}/>
    </div>
  );
}
