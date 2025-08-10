import Link from "next/link";

export default function SajiPage() {
  return (
    <div className="about">
        <Link className="link" href="/">
            &lt; back
        </Link>
        <br></br><br></br>
        <h2>sharjeel sohail</h2>
        <br></br>
        <div className="about-content">
            <p>hello, i'm sharjeel - from karachi, pakistan. i've been living in australia for the last 7 years, working as a software engineer.  
            </p>
            <br></br>
            <h4>here are some things that describe me</h4>
            <ul>
                <li>huge coffee connoisseur; can't live without it</li>
                <li>like running and working out</li>
                <li>very conscious of what i eat to keep myself healthy</li>
                <li>shows & movies i love: <em>normal people</em>, <em>one day</em>, <em>tick tick boom</em>, <em>rockstar</em> (bollywood), <em>the wolf of wall street</em>, <em>atonement</em>, etc.</li>
                <li>big car guy — old japanese cars, kei, motorcycles, vespas, you name it</li>
                <li>also interested in deep work, digital minimalism, old funky tech, camping, etc.</li>
            </ul>
            <h4>about the love of my life</h4>
            <p>
                i'm marrying this beautiful girl named batrisyia. she's cute, funny, cooks yummy food, and her smile is my favourite.  
                her small round eyes looking up at me melt my heart. she's understanding, emotionally mature, and intelligent.
            </p>
            <br></br>
            <h4>her favourite words of mine</h4>
            <ul>
                <li>haaa and baaa (as in hi and bye)</li>
                <li>you promess (promise)</li>
                <li>i never been here before</li>
                <li>pleaaa (please)</li>
            </ul>
            <p>
                i can't wait to marry my gorgeous girl, and i promise to be with her, love her, and take care of her for the rest of my life :p
            </p>
        </div>
    </div>
  );
}