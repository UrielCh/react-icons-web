
import * as io from "@preact-icons/io";
import IconSet from "IconSet";
import SideBar from "Sidebar";
export default function Page() {
  return (
    <div class="flex h-full">
      <SideBar/>
      <IconSet libId="io" icons={io}/>
    </div>
  );
}
