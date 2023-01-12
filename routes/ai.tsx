
import * as ai from "react-icons/ai";
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
