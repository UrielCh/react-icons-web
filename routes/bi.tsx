
import * as bi from "react-icons/bi";
import IconSet from "IconSet";
import SideBar from "Sidebar";
export default function Page() {
  return (
    <div class="flex h-full">
      <SideBar/>
      <IconSet libId="bi" icons={bi}/>
    </div>
  );
}
