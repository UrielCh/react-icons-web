
import * as fa from "react-icons/fa";
import IconSet from "IconSet";
import SideBar from "Sidebar";
export default function Page() {
  return (
    <div class="flex h-full">
      <SideBar/>
      <IconSet libId="fa" icons={fa}/>
    </div>
  );
}
