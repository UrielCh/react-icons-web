
import * as ci from "react-icons/ci";
import IconSet from "IconSet";
import SideBar from "Sidebar";
export default function Page() {
  return (
    <div class="flex h-full">
      <SideBar/>
      <IconSet libId="ci" icons={ci}/>
    </div>
  );
}
