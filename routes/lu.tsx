
import * as lu from "@preact-icons/lu";
import IconSet from "IconSet";
import SideBar from "Sidebar";
export default function Page() {
  return (
    <div class="flex h-full">
      <SideBar/>
      <IconSet libId="lu" icons={lu}/>
    </div>
  );
}
