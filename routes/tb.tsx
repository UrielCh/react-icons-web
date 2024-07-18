
import * as tb from "@preact-icons/tb";
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
