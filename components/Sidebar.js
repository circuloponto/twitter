import Image from "next/image";
import SideBarMenuItem from "./SideBarMenuItem";
import { HomeIcon, UserIcon } from "@heroicons/react/24/solid"
import { BellOutline, Bookmark, Clipboard, DotsCircleHorizontal, DotsCircleHorizontalOutline, HashtagOutline, InboxInOutline, User, UserAddOutline } from "heroicons-react";


export default function Sidebar() {
  return (
    <div className="hidden sm:flex flex-col p-2 xl_items-start fixed h-full">


      {/* twitter logo */}

      <div className="hoverEffect p-0 hover:bg-blue-100 xl:px-1">
        <Image width="50" height="50" src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png" />
      </div>


      {/* Menu */}
      <div className="mt-4 m-2.5 xl:items-start">
        <SideBarMenuItem text="Home" Icon={HomeIcon} active />
        <SideBarMenuItem text="Explore" Icon={HashtagOutline} />
        <SideBarMenuItem text="Notifications" Icon={BellOutline} />
        <SideBarMenuItem text="Messages" Icon={InboxInOutline} />
        <SideBarMenuItem text="Bookmarks" Icon={Bookmark} />
        <SideBarMenuItem text="Lists" Icon={Clipboard} />
        <SideBarMenuItem text="Profile" Icon={UserIcon} />
        <SideBarMenuItem text="More" Icon={DotsCircleHorizontalOutline} />
      </div>


      {/* Button */}

      <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline" >Tweet</button>

      {/* Mini Profile */}

      <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
        <Image

          width="50"
          height="50"
          className="h-10 w-10 rounded-full xl:mr-2"
          src="https://preview.keenthemes.com/metronic-v4/theme/assets/pages/img/avatars/team1.jpg" alt="" />
        <div className="leading-5 hidden xl:inline">
          <h4 className="font-bold">Mathew Brown</h4>
          <p className="text-gray-500">@mathewbrown</p>

        </div>
        <DotsCircleHorizontal className="h-5 xl:ml-8 hidden xl:inline" />
      </div>
    </div>
  )
}
