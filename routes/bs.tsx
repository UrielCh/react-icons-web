
import * as bs from "react-icons/bs";
import IconSet from "IconSet";
import SideBar from "Sidebar";
export default function Page() {
  return (
    <div class="flex h-full">
      <SideBar/>
      <IconSet libId="bs" icons={bs}/>
    </div>
  );
}
