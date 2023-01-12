
import * as gi from "react-icons/gi";
import IconSet from "IconSet";
import SideBar from "Sidebar";
export default function Page() {
  return (
    <div class="flex h-full">
      <SideBar/>
      <IconSet libId="gi" icons={gi}/>
    </div>
  );
}
