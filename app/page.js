'use client';

import Link from "next/link";
import { TfiAlarmClock } from "react-icons/tfi";
import { MdOutlineLocationOn } from "react-icons/md";
import { BsCalendarHeart } from "react-icons/bs";


export default function Home() {

  return (
    <div className="main-page">
      <div className="invite-wrapper">

        <div className="gif-wrapper">
          <Link href='/saji' prefetch={true}>
            <img src="/assets/sajistick.gif" alt="saji" />
          </Link>
        </div>

        <div className="invite-content">
          <h2 className="m-0 p-0">sharjeel & isya</h2>
          <p>two buddies are getting married</p><br></br>
          <p><BsCalendarHeart /> friday, september 12th, 2025</p>
          <p><TfiAlarmClock /> 19:00 - 22:00 bnt</p>
          <p><MdOutlineLocationOn /> mahligai al-barakah, salambigar, brunei.</p>
        </div>

        <div className="gif-wrapper">
          <Link href='/isya' prefetch={true}>
            <img src="/assets/isyastick.gif" alt="isya" />
          </Link>
        </div>

      </div>

      <p className="footer"><em>(click us to find more)</em></p>
    </div>
  );
}
