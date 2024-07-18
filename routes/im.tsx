
import * as im from "@preact-icons/im";
import IconSet from "IconSet";
import SideBar from "Sidebar";
export default function Page() {
  return (
    <div class="flex h-full">
      <SideBar/>
      <IconSet libId="im" icons={im}/>
    </div>
  );
}
