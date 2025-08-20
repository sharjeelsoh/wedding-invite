import Link from "next/link";

import { GiCoffeeMug } from "react-icons/gi";
import { IoFastFoodOutline } from "react-icons/io5";

export default function IsyaPage() {
  return (
    <div className="about">
        <Link className="link" href="/">
            &lt; back
        </Link>
        <br></br><br></br>
        <h2>nur amira batrisyia</h2>
        <div className="icon-line"><GiCoffeeMug /><IoFastFoodOutline /></div>
        <br></br>
        <div className="about-content">
            <p>hello reader! i&apos;m batrisyia, i&apos;m from brunei and some of you may know me as isya. i recently graduated with a bachelor of speech pathology from uon where i met the loveliest boy.</p>
            <br></br>
            <h4>here are some things that describe me</h4>
            <ul>
                <li>i love matcha and coffee </li>
                <li>i like everything pink</li>
                <li>i&apos;m happiest when i&apos;m thrifting or shopping on depop, in a pilates class, watching gilmore girls or hunting down a new dish to try from tiktok (lol)</li>
                <li>my forever favourite artist is lana del rey, so much so that i have planned to walk down the aisle to one of her songs.</li>
                <li>i also like trying new things and adventures</li>
            </ul>
            <h4>a little about my love</h4>
            <p>
              i&apos;m marrying the cutest brown guy i have ever seen in my life. he&apos;s got this perfect little dimple on his cheek which is my absolute favourite thing about him. 
              he&apos;s generous, caring, responsible, punctual, honest and incredibly disciplined. he also reminds me to be unapologetically myself (i am a big people pleaser and tend to forget about my own needs). 
              he&apos;s also the biggest romantic and has always surprised me with thoughtful dates, gifts, and gestures. 
            </p>
            <br></br>
            <h4>his favourite words of mine</h4>
            <ul>
              <li>hey! how are ya?</li>
              <li>mate...</li>
              <li>no timeeeee!!!!!</li>
              <li>brother..</li>
            </ul>
            <p> 
              i&apos;m grateful to allah for bringing him into my life and guiding our hearts to each other. baaa
            </p>
        </div>
    </div>
  );
}