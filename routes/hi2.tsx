
import * as hi2 from "@preact-icons/hi2";
import IconSet from "IconSet";
import SideBar from "Sidebar";
export default function Page() {
  return (
    <div class="flex h-full">
      <SideBar/>
      <IconSet libId="hi2" icons={hi2}/>
    </div>
  );
}
