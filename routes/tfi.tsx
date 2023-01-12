
import * as tfi from "react-icons/tfi";
import IconSet from "IconSet";
import SideBar from "Sidebar";
export default function Page() {
  return (
    <div class="flex h-full">
      <SideBar/>
      <IconSet libId="tfi" icons={tfi}/>
    </div>
  );
}
