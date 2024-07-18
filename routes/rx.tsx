
import * as rx from "@preact-icons/rx";
import IconSet from "IconSet";
import SideBar from "Sidebar";
export default function Page() {
  return (
    <div class="flex h-full">
      <SideBar/>
      <IconSet libId="rx" icons={rx}/>
    </div>
  );
}
