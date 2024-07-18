
import * as io5 from "@preact-icons/io5";
import IconSet from "IconSet";
import SideBar from "Sidebar";
export default function Page() {
  return (
    <div class="flex h-full">
      <SideBar/>
      <IconSet libId="io5" icons={io5}/>
    </div>
  );
}
