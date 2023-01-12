
import * as gr from "react-icons/gr";
import IconSet from "IconSet";
import SideBar from "Sidebar";
export default function Page() {
  return (
    <div class="flex h-full">
      <SideBar/>
      <IconSet libId="gr" icons={gr}/>
    </div>
  );
}
