
import * as hi from "@preact-icons/hi";
import IconSet from "IconSet";
import SideBar from "Sidebar";
export default function Page() {
  return (
    <div class="flex h-full">
      <SideBar/>
      <IconSet libId="hi" icons={hi}/>
    </div>
  );
}
