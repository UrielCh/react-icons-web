
import * as di from "@preact-icons/di";
import IconSet from "IconSet";
import SideBar from "Sidebar";
export default function Page() {
  return (
    <div class="flex h-full">
      <SideBar/>
      <IconSet libId="di" icons={di}/>
    </div>
  );
}
