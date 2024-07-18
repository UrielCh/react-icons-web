
import * as fc from "@preact-icons/fc";
import IconSet from "IconSet";
import SideBar from "Sidebar";
export default function Page() {
  return (
    <div class="flex h-full">
      <SideBar/>
      <IconSet libId="fc" icons={fc}/>
    </div>
  );
}
