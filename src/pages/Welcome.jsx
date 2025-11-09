import { GiCobweb, GiPumpkinLantern, GiCandyCanes } from "react-icons/gi";
import { crew } from "../utils/data";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { testimonials } from "../utils/data";

export default function Welcome() {
    return (
        <div className="w-full h-auto flex flex-col relative z-10 bg-no-repeat">
            <div className="bg-[url('./assets/welcome_page/halloween_theme_bg11.jpg')] bg-center text-center flex flex-col gap-8 self-center mx-auto z-1 py-20 sm:py-30 px-6 md:px-40 lg:px-60 relative">
            <div className="absolute inset-0 bg-linear-to-t from-transparent to-[#03031e] z-1"></div>
            <div className="absolute inset-0 bg-linear-to-b from-transparent to-[#03031e] z-1"></div>
                <div className="flex flex-col gap-2 font-[Eater] relative z-1">
                    <h1 className="text-4xl md:text-6xl leading-tight">Welcome to Ghoul<span className="text-[#EB5B00]">Eats</span>!</h1>
                    <h2 className="font-light text-[#EB5B00]">Where every bite is frightfully fun!</h2>
                </div>  
                <div className="mx-6 relative z-1 md:text-base text-[10px] sm:text-sm">
                    Step into the silliest haunted kitchen in town!
                    Our ghostly chefs and pumpkin waiters are brewing treats that’ll make your taste buds scream with joy!
                    Come in for a bite or a fright.
                </div>
                <div className="flex gap-2 sm:gap-5 self-center relative z-1 text-xs sm:text-base">
                    <Link to='/menu' className="py-1.5 px-4 border border-transparent bg-[#EB5B00] text-black hover:text-[#EB5B00] hover:bg-transparent hover:border-[#EB5B00] rounded-4xl cursor-pointer transition-all duration-500 ease-in-out">Enter the Haunted Menu</Link>
                    <a href='#Meet-Our-Creepy-Cute-Crew!' className="py-1.5 px-4 border border-[#EB5B00] rounded-4xl cursor-pointer transition-all duration-500 ease-in-out hover:text-[#EB5B00] hover:inset-shadow-sm inset-shadow-[#EB5B00]">Meet the Crew</a>
                </div>
            </div>
            <div className="mt-8 sm:mt-15 z-1 flex flex-col gap-4 md:gap-8 px-6 md:px-20">
                <div className="flex flex-col gap-2">
                    <h1 className="text-xl sm:text-3xl font-[Eater]">Why Ghoul<span className="text-[#EB5B00]">Eats</span>!</h1>
                    <small className="font-light tracking-widest ml-1">Because even monsters deserve mouth-watering meals!</small>
                </div>
                <div className="ml-1 md:text-base text-xs sm:text-sm">GhoulEats isn’t your typical restaurant, it’s where spooky meets scrumptious!
                    Our ghoulish chefs whip up Halloween-inspired treats that’ll tickle your taste buds and your funny bone.
                    <span className="text-[#EB5B00]"> Every dish comes with a sprinkle of mischief and a whole lot of charm.</span>
                </div>
                <div className="grid gap-6 md:gap-10 md:grid-cols-3 mt-2">
                    <div className="bg-[#0a0a25] p-6 rounded-2xl shadow-lg border border-[#1a1a3a] hover:border-[#ff7b00] hover:shadow-[0_0_20px_#ff7b00] transition-all duration-300">
                        <GiPumpkinLantern className="text-[#ff7b00] text-3xl mb-3 drop-shadow-[0_0_10px_#ff7b00]" />
                        <div className="flex items-center gap-3 mb-3">
                            <h3 className="text-xl font-semibold text-white">Frightfully Delicious Menu</h3>
                        </div>
                        <p className="text-gray-300 text-sm">
                            Pumpkin pies, bat-wing brownies, and ghostly shakes, every bite make our customer feels like Halloween night.
                        </p>
                    </div>
                    <div className="bg-[#0a0a25] p-6 rounded-2xl shadow-lg border border-[#1a1a3a] hover:border-[#ff7b00] hover:shadow-[0_0_20px_#ff7b00] transition-all duration-300">
                        <GiCobweb className="text-[#ff7b00] text-3xl mb-3 drop-shadow-[0_0_10px_#ff7b00]" />
                        <div className="flex items-center gap-3 mb-3">
                            <h3 className="text-xl font-semibold text-white">Spooktacular Vibes</h3>
                        </div>
                        <p className="text-gray-300 text-sm">
                            Floating candles, glowing pumpkins, and laughter echoing through haunted halls, dine if you dare!
                        </p>
                    </div>
                    <div className="bg-[#0a0a25] p-6 rounded-2xl shadow-lg border border-[#1a1a3a] hover:border-[#ff7b00] hover:shadow-[0_0_20px_#ff7b00] transition-all duration-300">
                        <GiCandyCanes className="text-[#ff7b00] text-3xl mb-3 drop-shadow-[0_0_10px_#ff7b00]" />
                        <div className="flex items-center gap-3 mb-3">
                            <h3 className="text-xl font-semibold text-white">Trick-or-Treat Rewards</h3>
                        </div>
                        <p className="text-gray-300 text-sm">
                            Earn creepy-cool rewards with every visit! Surprise treats, secret codes, and mystery dishes await.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-6 mt-8 sm:mt-15 md:mt-25 px-6 md:px-20 z-1">
                <div className="flex flex-col gap-5 text-center">
                    <h1 id="Meet-Our-Creepy-Cute-Crew!" className="text-xl sm:text-3xl font-[Eater]">Meet Our Creepy-Cute <span className="text-[#EB5B00]">Crew</span>!</h1>
                    <small className="font-light tracking-widest ml-1 sm:text-sm text-xs">They’re spooky, they’re sweet and they make sure every meal is a scream come true!!</small>
                </div>
                <div className="grid md:grid-cols-3 gap-6 md:gap-10 justify-center">
                    {crew.map(c => (
                        <div className="bg-[#0a0a25] p-6 rounded-2xl shadow-lg border border-[#1a1a3a] hover:border-[#ff7b00] hover:shadow-[0_0_20px_#ff7b00] transition-all duration-300 flex flex-col mt-20" key={c.title}>
                            <img src={c.img} alt="chef-pfp" className="-mt-20 self-center rounded-full object-cover w-50 mb-6" />
                            <div className="text-xl text-center mb-3 font-bold">{c.title}</div>
                            <div className="text-base text-300 mb-1">Role: {c.role}</div>
                            <p className="text-sm text-gray-300">{c.bio}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-20 flex flex-col gap-8 px-6 md:px-20 z-1">
                <div className="flex flex-col gap-2">
                    <h1 className="text-xl sm:text-3xl font-[Eater]">Voices from the <span className="text-[#EB5B00]">Afterlife</span>!</h1>
                    <small className="font-light tracking-widest ml-1 sm:text-sm text-xs">Straight from the crypt, here’s what our dearly departed diners are saying!</small>
                </div>
                <div className="grid md:grid-cols-4 gap-6 justify-center">
                    {testimonials.map(user => (
                        <div key={user.id} className="bg-[#0a0a25] p-6 rounded-2xl shadow-lg border border-[#1a1a3a] hover:border-[#ff7b00] transition-all duration-300 flex flex-col gap-4">
                            <div className="flex gap-2">
                                {Array(user.rating).fill(null).map((s, i) => (<FaStar key={i} className="fill-yellow-400" />))}
                            </div>
                            <small className="text-sm italic font-light text-gray-300">{user.quote}</small>
                            <div className="text-xs">~ {user.name}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-[url('./assets/welcome_page/halloween_theme_bg5.jpg')] bg-center w-full py-32 px-6 sm:px-15 md:px-40 relative z-10 mt-5 flex flex-col justify-center">
                <div className="absolute inset-0 bg-linear-to-t from-transparent to-[#03031e] z-1"></div>
                <div className="absolute inset-0 bg-linear-to-b from-transparent to-[#03031e] z-1"></div>
                <div className="flex flex-col text-center z-10 relative">
                    <h1 className="text-5xl md:text-6xl font-[Eater]">Join the <span className="text-[#EB5B00]">Feast</span>!</h1>
                    <small className="font-light tracking-widest ml-1 mt-8 font-[Jolly_Lodger] text-base sm:text-xl">They’re spooky, they’re sweet and they make sure every meal is a scream come true!!</small>
                    <p className="font-light text-gray-300 mt-6 sm:mt-10 font-[Jolly_Lodger] text-base sm:text-3xl">GhoulEats welcomes brave souls and hungry spirits. Whether you crave bat wings or ghostly garlic bread, your order awaits in the shadows. One click and the feast begins!</p>
                </div>
                <div className="flex gap-4 mt-8 z-10 relative mx-auto font-[Jolly_Lodger] text-xl sm:text-2xl">
                    <Link to='/join' className="py-1.5 px-4 border border-transparent bg-[#EB5B00] text-black hover:text-[#EB5B00] hover:bg-transparent hover:border-[#EB5B00] rounded-4xl cursor-pointer transition-all duration-500 ease-in-out">Join the Coven</Link>
                    <Link to='/menu' className="py-1.5 px-4 border hover:bg-[#EB5B00] hover:text-black text-[#EB5B00] bg-transparent border-[#EB5B00] rounded-4xl cursor-pointer transition-all duration-500 ease-in-out">Summon a Meal</Link>
                </div>
            </div>
        </div>
    )
}