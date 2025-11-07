import { GiCobweb, GiPumpkinLantern, GiCandyCanes } from "react-icons/gi";
import chefBoo from '../assets/welcome_page/chef-crew/Chef Boo.jpg';
import Frankie from '../assets/welcome_page/chef-crew/Frankie Frycook.jpg';
import Wanda from '../assets/welcome_page/chef-crew/Wanda the Witch.jpg';
import PumpkinBarista from '../assets/welcome_page/chef-crew/Pip the Pumpkin Barista.jpg';
import GhostWaitress from '../assets/welcome_page/chef-crew/Misty the Ghost Waitress.jpg';
import CountCrustula from '../assets/welcome_page/chef-crew/Count Crustula.jpg';
import { FaStar } from "react-icons/fa";

export default function Welcome() {
    const crew = [
        {
            title: "Chef Boo - The Floating Baker",
            role: "Head Baker",
            bio: "Chef Boo has been baking since 1821 (and haunting ovens ever since). He specializes in levitating cupcakes and spectral soufflés that literally float off the plate.No one’s ever seen him angry, though his frosting tends to fly when he’s excited!",
            img: chefBoo
        },
        {
            title: "Frankie Frycook – The Monster Grill Master",
            role: "Head Fry Cook",
            bio: "Once struck by lightning and flavor inspiration, Frankie now runs the grill, sparks and all! He cooks with passion, sometimes literally setting off small fireworks in the kitchen.His specialty: Electrified Burgers with a jolt of excitement in every bite.",
            img: Frankie
        },
        {
            title: "Wanda the Witch - Dessert Sorceress",
            role: "Pastry Magician",
            bio: "Wanda doesn’t bake, she bewitches desserts into existence! With her enchanted whisk and sugary spells, she crafts treats that sparkle and occasionally giggle. Rumor has it, her chocolate mousse can float out of the bowl when you compliment it.",
            img: Wanda
        },
        {
            title: "Pip the Pumpkin Barista",
            role: "Potion & Coffee Maker",
            bio: "Half pumpkin, half caffeine wizard, Pip brews the most spooktacular lattes. From “Witch’s Brew Macchiatos” to “Mocha of the Dead,” every sip comes with a swirl of autumn magic. He’s small, round, and always smells like cinnamon and chaos.",
            img: PumpkinBarista
        },
        {
            title: "Misty the Ghost Waitress",
            role: "Customer Spirit Liaison",
            bio: "Misty glides between tables with a tray full of smiles and spectral sundaes.She’s known for her friendly giggle and ability to deliver ten orders at once, through walls! If you ever hear a faint “boo~ your order’s here!” that’s Misty doing her rounds.",
            img: GhostWaitress
        },
        {
            title: "Count Crustula - The Vampire Pizzaiolo",
            role: "Pizza Specialist",
            bio: "He doesn’t bite… unless it’s pizza! Count Crustula’s midnight pizzas are legendary. He insists on baking only under the full moon, and his garlic-free specials are to die for. Don’t worry - the only thing he drains is mozzarella.",
            img: CountCrustula
        },
    ]

    const testimonials = [
        {
            id: 1,
            name: "Zombie Carl",
            quote:
                "Best brain stew I’ve had since the apocalypse! Juicy, tender, and seasoned with pure terror.",
            rating: 5,
        },
        {
            id: 2,
            name: "Witch Hazel",
            quote:
                "The Witch’s Brew Soup had me cackling with joy! A potion so tasty, I almost turned my broom around for seconds.",
            rating: 5,
        },
        {
            id: 3,
            name: "Count Draconius",
            quote:
                "Ah, the crimson sauces - simply divine! I haven’t tasted such flavor since the 1800s.",
            rating: 3,
        },
        {
            id: 4,
            name: "Ghost Greta",
            quote:
                "Service so fast it’s scary! My plate appeared before I could say ‘boo!’ Perfect for a midnight haunt snack.",
            rating: 4,
        },
    ];


    return (
        <div className="w-full h-auto flex flex-col relative z-10 bg-no-repeat">
            <div className="bg-[url('./assets/welcome_page/halloween_theme_bg11.jpg')] bg-center text-center flex flex-col gap-8  self-center mx-auto z-1 py-30 px-60 relative">
            <div className="absolute inset-0 bg-linear-to-t from-transparent to-[#03031e] z-1"></div>
            <div className="absolute inset-0 bg-linear-to-b from-transparent to-[#03031e] z-1"></div>
                <div className="flex flex-col gap-2 font-[Eater] relative z-1">
                    <h1 className="text-6xl leading-tight">Welcome to Ghoul<span className="text-[#EB5B00]">Eats</span>!</h1>
                    <h2 className="font-light text-[#EB5B00]">Where every bite is frightfully fun!</h2>
                </div>  
                <div className="mx-6 relative z-1">
                    Step into the silliest haunted kitchen in town!
                    Our ghostly chefs and pumpkin waiters are brewing treats that’ll make your taste buds scream with joy!
                    Come in for a bite or a fright.
                </div>
                <div className="flex gap-5 self-center relative z-1">
                    <button className="py-1.5 px-4 border border-transparent bg-[#EB5B00] text-black hover:text-[#EB5B00] hover:bg-transparent hover:border-[#EB5B00] rounded-4xl cursor-pointer transition-all duration-500 ease-in-out">Enter the Haunted Menu</button>
                    <button className="py-1.5 px-4 border border-[#EB5B00] rounded-4xl cursor-pointer transition-all duration-500 ease-in-out hover:text-[#EB5B00] hover:inset-shadow-sm inset-shadow-[#EB5B00]">Meet the Crew</button>
                </div>
            </div>
            <div className="mt-15 z-1 flex flex-col gap-8 px-20">
                <div className="flex flex-col gap-2">
                    <h1 className="text-3xl font-[Eater]">Why Ghoul<span className="text-[#EB5B00]">Eats</span>!</h1>
                    <small className="font-light tracking-widest ml-1">Because even monsters deserve mouth-watering meals!</small>
                </div>
                <div className="ml-1">GhoulEats isn’t your typical restaurant, it’s where spooky meets scrumptious!
                    Our ghoulish chefs whip up Halloween-inspired treats that’ll tickle your taste buds and your funny bone.
                    <span className="text-[#EB5B00]"> Every dish comes with a sprinkle of mischief and a whole lot of charm.</span>
                </div>
                <div className="grid gap-10 grid-cols-3">
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
            <div className="flex flex-col gap-6 mt-25 px-20 z-1">
                <div className="flex flex-col gap-3 text-center">
                    <h1 className="text-3xl font-[Eater]">Meet Our Creepy-Cute <span className="text-[#EB5B00]">Crew</span>!</h1>
                    <small className="font-light tracking-widest ml-1">They’re spooky, they’re sweet and they make sure every meal is a scream come true!!</small>
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
            <div className="mt-20 flex flex-col gap-8 px-20 z-1">
                <div className="flex flex-col gap-2">
                    <h1 className="text-3xl font-[Eater]">Voices from the <span className="text-[#EB5B00]">Afterlife</span>!</h1>
                    <small className="font-light tracking-widest ml-1">Straight from the crypt, here’s what our dearly departed diners are saying!</small>
                </div>
                <div className="grid grid-cols-4 gap-y-6">
                    {testimonials.map(user => (
                        <div className="bg-[#0a0a25] p-6 rounded-2xl shadow-lg border border-[#1a1a3a] hover:border-[#ff7b00] transition-all duration-300 flex flex-col w-3xs gap-4">
                            <div className="flex gap-2">
                                {Array(user.rating).fill(null).map((s, i) => (<FaStar key={i} className="fill-yellow-400" />))}
                            </div>
                            <small className="text-sm italic font-light text-gray-300">{user.quote}</small>
                            <div className="text-xs">~ {user.name}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-[url('./assets/welcome_page/halloween_theme_bg5.jpg')] bg-center w-full py-32 px-40 relative z-10 mt-5 flex flex-col justify-center">
                <div className="absolute inset-0 bg-linear-to-t from-transparent to-[#03031e] z-1"></div>
                <div className="absolute inset-0 bg-linear-to-b from-transparent to-[#03031e] z-1"></div>
                <div className="flex flex-col text-center z-10 relative">
                    <h1 className="text-6xl font-[Eater]">Join the <span className="text-[#EB5B00]">Feast</span>!</h1>
                    <small className="font-light tracking-widest ml-1 mt-8 font-[Jolly_Lodger] text-xl">They’re spooky, they’re sweet and they make sure every meal is a scream come true!!</small>
                    <p className="font-light text-gray-300 mt-10 font-[Jolly_Lodger] text-3xl">GhoulEats welcomes brave souls and hungry spirits. Whether you crave bat wings or ghostly garlic bread, your order awaits in the shadows. One click and the feast begins!</p>
                </div>
                <div className="flex gap-4 mt-8 z-10 relative mx-auto font-[Jolly_Lodger] text-2xl">
                    <button className="py-1.5 px-4 border border-transparent bg-[#EB5B00] text-black hover:text-[#EB5B00] hover:bg-transparent hover:border-[#EB5B00] rounded-4xl cursor-pointer transition-all duration-500 ease-in-out">Join the Coven</button>
                    <button className="py-1.5 px-4 border hover:bg-[#EB5B00] hover:text-black text-[#EB5B00] bg-transparent border-[#EB5B00] rounded-4xl cursor-pointer transition-all duration-500 ease-in-out">Summon a Meal</button>
                </div>
            </div>
        </div>
    )
}