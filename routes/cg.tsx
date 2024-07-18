
import * as cg from "@preact-icons/cg";
import IconSet from "IconSet";
import SideBar from "Sidebar";
export default function Page() {
  return (
    <div class="flex h-full">
      <SideBar/>
      <IconSet libId="cg" icons={cg}/>
    </div>
  );
}
