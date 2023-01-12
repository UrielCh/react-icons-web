
import * as vsc from "react-icons/vsc";
import IconSet from "IconSet";
import SideBar from "Sidebar";
export default function Page() {
  return (
    <div class="flex h-full">
      <SideBar/>
      <IconSet libId="vsc" icons={vsc}/>
    </div>
  );
}
