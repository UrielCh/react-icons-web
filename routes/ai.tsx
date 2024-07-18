
import * as ai from "@preact-icons/ai";
import IconSet from "IconSet";
import SideBar from "Sidebar";
export default function Page() {
  return (
    <div class="flex h-full">
      <SideBar/>
      <IconSet libId="ai" icons={ai}/>
    </div>
  );
}
