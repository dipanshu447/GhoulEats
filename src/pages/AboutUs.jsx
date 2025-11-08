import { Link } from "react-router-dom"
import { GiSpiderWeb, GiPumpkinMask } from "react-icons/gi";
import { crew } from "../utils/data";
import kitchen from '../assets/about_page/kitchen.jpg';

export default function AboutUs() {
    return (
        <div className="">
            <div className="bg-[url('./assets/about_page/bg.jpg')] bg-center text-center flex flex-col gap-8 mx-auto z-1 py-30 px-60 relative">
                <div className="absolute inset-0 bg-linear-to-t from-transparent to-[#03031e] z-1"></div>
                <div className="absolute inset-0 bg-linear-to-b from-transparent to-[#03031e] z-1"></div>
                <div className="flex flex-col gap-2 font-[Eater] relative z-1">
                    <h1 className="text-6xl leading-tight">Behind the <span className="text-[#EB5B00]">Cauldron</span></h1>
                    <h2 className="font-light text-[#EB5B00]">Where every recipe is born under moonlight and stirred by mischief.</h2>
                </div>
                <div className="mx-6 relative z-1">
                    Ever wondered who brews the magic behind every bite? Step into the shadows of our kitchen, where madness meets mastery and every flavor whispers a secret.
                </div>
                <div className="flex gap-5 self-center relative z-1">
                    <a href='#Meet-Our-Creepy-Cute-Crew!' className="py-1.5 px-4 border border-transparent bg-[#EB5B00] text-black hover:text-[#EB5B00] hover:bg-transparent hover:border-[#EB5B00] rounded-4xl cursor-pointer transition-all duration-500 ease-in-out">Meet the Crew</a>
                </div>
            </div>
            <div className="px-20 mt-15 relative isolate overflow-hidden">
                <div className="flex flex-col gap-2">
                    <h1 className="text-4xl font-[Eater]">Our <span className="text-[#EB5B00]">Origin</span></h1>
                    <small className="font-light tracking-widest ml-1 ">Cooked in Chaos. Served with Charm.</small>
                </div>
                <p className="font-light ml-1 mt-6">
                    It all began one stormy October night, when a few restless spirits decided to turn their eerie passion into something deliciously daring. What started as a midnight experiment in the haunted kitchens of HollowBite became a full-blown sensation.
                </p>
                <p className="font-light ml-1 mt-6">
                    GhoulEats was never meant to be ordinary, it was meant to haunt your hunger. Every dish, every decoration, and every detail is crafted to keep Halloween alive all year long.
                </p>
                <GiSpiderWeb className="absolute top-10 -right-10 size-40 -z-10 fill-white/15" />
            </div>
            <div className="px-20 mt-15 relative isolate">
                <div className="flex flex-col gap-2">
                    <h1 className="text-4xl font-[Eater]">Our <span className="text-[#EB5B00]">Philosophy</span></h1>
                    <small className="font-light tracking-widest ml-1 ">Eat. Creep. Repeat.</small>
                </div>
                <p className="font-light ml-1 mt-6">
                    We believe food should be an experience, not just a meal. Whether you’re savoring our Zombie Finger Fries or sipping Witch’s Brew Soup, you’re not just tasting flavor, you’re tasting imagination.
                </p>
                <p className="font-light ml-1 mt-6">
                    We mix chills with thrills, adding a dash of cinematic mystery and a sprinkle of mischief to everything we serve. After all, what’s life without a little fright?
                </p>
                <GiPumpkinMask className="absolute top-10 -left-10 size-40 -z-10 fill-white/5"/>
            </div>
            <div className="flex flex-col gap-6 mt-25 px-20 z-1">
                <div className="flex flex-col gap-3 text-center">
                    <h1 id="Meet-Our-Creepy-Cute-Crew!" className="text-3xl font-[Eater]">Meet Our <span className="text-[#EB5B00]">Crew</span></h1>
                    <small className="font-light tracking-widest ml-1">The Ghoulish Minds Behind the Madness</small>
                </div>
                <div className="grid grid-cols-3 grid-rows-2 gap-y-6">
                    {crew.map(c => (
                        <div className="bg-[#0a0a25] p-6 rounded-2xl shadow-lg border border-[#1a1a3a] hover:border-[#ff7b00] hover:shadow-[0_0_20px_#ff7b00] transition-all duration-300 flex flex-col mt-20 w-xs" key={c.title}>
                            <img src={c.img} alt="chef-pfp" className="-mt-20 self-center rounded-full object-cover w-50 mb-6" />
                            <div className="text-xl text-center mb-3 font-bold">{c.title}</div>
                            <div className="text-base text-300 mb-1">Role: {c.role}</div>
                            <p className="text-sm text-gray-300">{c.bio}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="px-20 mt-20 relative flex gap-10 items-center">
                <div className="flex-1">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-4xl font-[Eater]">The Secret <span className="text-[#EB5B00]">Kitchen</span></h1>
                        <small className="font-light tracking-widest ml-1 ">Every Bite Has a Spell</small>
                    </div>
                    <p className="font-light ml-1 mt-6">
                        Our kitchen isn’t powered by gas or electricity, it runs on laughter, lightning, and a little lunacy. Ingredients arrive from mysterious corners of the world (and a few that aren’t on maps).
                    </p>
                    <p className="font-light ml-1 mt-6">
                        Each recipe is whispered by ghostly hands, tested under candlelight, and approved by the spirits of flavor. We don’t just serve food, we serve magic on a plate.
                    </p>
                </div>
                <div className="flex-1 h-72 drop-shadow-lg drop-shadow-[#8400ff5d]">
                    <img src={kitchen} alt="kitchen" className="object-cover w-full h-full rounded-2xl" />
                </div>
            </div>
            <div className="bg-[url('./assets/welcome_page/halloween_theme_bg4.jpg')] bg-center w-full py-32 px-40 relative z-10 mt-5 flex flex-col justify-center">
                <div className="absolute inset-0 bg-linear-to-t from-transparent to-[#03031e] z-1"></div>
                <div className="absolute inset-0 bg-linear-to-b from-transparent to-[#03031e] z-1"></div>
                <div className="flex flex-col text-center z-10 relative">
                    <h1 className="text-6xl font-[Eater]">Join the Feast of <span className="text-[#EB5B00]">Freaks</span></h1>
                    <p className="font-light text-gray-300 mt-10 font-[Jolly_Lodger] text-3xl">Every soul who steps into GhoulEats becomes part of our coven. Whether you’re a chef, a foodie, or a creature of the night, there’s always a seat waiting for you at our haunted table.</p>
                    <p className="font-light text-gray-300 mt-10 font-[Jolly_Lodger] text-3xl">Join the feast, share your screams, and remember - the night never ends at GhoulEats..</p>
                </div>
                <div className="flex gap-4 mt-8 z-10 relative mx-auto font-[Jolly_Lodger] text-2xl">
                    <Link to='/join' className="py-1.5 px-4 border border-transparent bg-[#EB5B00] text-black hover:text-[#EB5B00] hover:bg-transparent hover:border-[#EB5B00] rounded-4xl cursor-pointer transition-all duration-500 ease-in-out">Join the Coven</Link>
                </div>
            </div>
        </div>
    )
}