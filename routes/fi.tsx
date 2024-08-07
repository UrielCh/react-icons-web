
import * as fi from "@preact-icons/fi";
import IconSet from "IconSet";
import SideBar from "Sidebar";
export default function Page() {
  return (
    <div class="flex h-full">
      <SideBar/>
      <IconSet libId="fi" icons={fi}/>
    </div>
  );
}
