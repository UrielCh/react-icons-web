
import * as lu from "react-icons/lu";
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
