
import * as ti from "react-icons/ti";
import IconSet from "IconSet";
import SideBar from "Sidebar";
export default function Page() {
  return (
    <div class="flex h-full">
      <SideBar/>
      <IconSet libId="ti" icons={ti}/>
    </div>
  );
}
