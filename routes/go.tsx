
import * as go from "@preact-icons/go";
import IconSet from "IconSet";
import SideBar from "Sidebar";
export default function Page() {
  return (
    <div class="flex h-full">
      <SideBar/>
      <IconSet libId="go" icons={go}/>
    </div>
  );
}
