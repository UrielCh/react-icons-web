
import * as si from "@preact-icons/si";
import IconSet from "IconSet";
import SideBar from "Sidebar";
export default function Page() {
  return (
    <div class="flex h-full">
      <SideBar/>
      <IconSet libId="si" icons={si}/>
    </div>
  );
}
