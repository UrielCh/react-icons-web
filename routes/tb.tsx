
import * as tb from "react-icons/tb";
import IconSet from "IconSet";
import SideBar from "Sidebar";
export default function Page() {
  return (
    <div class="flex h-full">
      <SideBar/>
      <IconSet libId="tb" icons={tb}/>
    </div>
  );
}
