
import * as sl from "react-icons/sl";
import IconSet from "IconSet";
import SideBar from "Sidebar";
export default function Page() {
  return (
    <div class="flex h-full">
      <SideBar/>
      <IconSet libId="sl" icons={sl}/>
    </div>
  );
}
