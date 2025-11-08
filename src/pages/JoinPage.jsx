export default function JoinPage() {
    return (
        <div className="py-16">
            <div className="flex flex-col gap-10 px-20">
                <h1 className="font-[Eater] text-center text-6xl">Join the Coven. Become Part of the  <span className="text-[#EB5B00]">Feast</span></h1>
                <small className="text-center text-sm">Every dish. Every delivery. Every shriek of delight it starts with our crew of brave souls. Step behind the cauldron and help us serve fear with flavor!</small>
            </div>
            <div className="mt-16 flex flex-col gap-10 px-20">
                <div className="bg-[#0a0a25] p-6 rounded-2xl border border-[#1a1a3a] hover:border-[#ff7b00] transition-all duration-300 flex flex-col gap-2">
                    <div className="text-xl font-bold">Join as a Chef</div>
                    <p>Bring your creepy culinary creations to the table and serve the souls who dare to taste them.</p>
                    <a href='#join' className="py-1.5 px-4 border hover:bg-[#EB5B00]  text-[#EB5B00] hover:text-black bg-transparent border-[#EB5B00] hover:font-bold rounded-4xl cursor-pointer transition-all duration-500 ease-in-out self-baseline mt-3">Become a Chef</a>
                </div>
                <div className="bg-[#0a0a25] p-6 rounded-2xl border border-[#1a1a3a] hover:border-[#ff7b00] transition-all duration-300 flex flex-col gap-2">
                    <div className="text-xl font-bold">Join as Waiter</div>
                    <p>Serve guests who dine under the candlelight of doom.</p>
                    <a href='#join' className="py-1.5 px-4 border hover:bg-[#EB5B00]  text-[#EB5B00] hover:text-black bg-transparent border-[#EB5B00] hover:font-bold rounded-4xl cursor-pointer transition-all duration-500 ease-in-out self-baseline mt-3">Become a Waiter</a>
                </div>
                <div className="bg-[#0a0a25] p-6 rounded-2xl border border-[#1a1a3a] hover:border-[#ff7b00] transition-all duration-300 flex flex-col gap-2">
                    <div className="text-xl font-bold">Join as Delivery Ghoul</div>
                    <p>Deliver meals from the shadows (on time… or else).</p>
                    <a href='#join' className="py-1.5 px-4 border hover:bg-[#EB5B00]  text-[#EB5B00] hover:text-black bg-transparent border-[#EB5B00] hover:font-bold rounded-4xl cursor-pointer transition-all duration-500 ease-in-out self-baseline mt-3">Become a Delivery Ghoul</a>
                </div>
                <div className="bg-[#0a0a25] p-6 rounded-2xl border border-[#1a1a3a] hover:border-[#ff7b00] transition-all duration-300 flex flex-col gap-2">
                    <div className="text-xl font-bold">Join as Event Staff</div>
                    <p>Host and organize Halloween feasts and food events.</p>
                    <a href='#join' className="py-1.5 px-4 border hover:bg-[#EB5B00]  text-[#EB5B00] hover:text-black bg-transparent border-[#EB5B00] hover:font-bold rounded-4xl cursor-pointer transition-all duration-500 ease-in-out self-baseline mt-3">Become a Event Staff</a>
                </div>
            </div>
            <h2 id="join" className="font-[Eater] text-center text-3xl mt-16 px-20">Join the Ghoul<span className="text-[#EB5B00]">Eats</span></h2>
            <form className="bg-[url(./assets/joinform.jpg)] bg-center mt-4 px-60 pt-10 relative flex flex-col items-center gap-5 text-sm">
                <div className="absolute inset-0 bg-linear-to-t from-transparent to-[#03031e] z-1"></div>
                <div className="absolute inset-0 bg-linear-to-b from-transparent to-[#03031e] z-1"></div>
                <div className="absolute inset-0  bg-[#03031e6e] z-1"></div>
                <label htmlFor="fullName" className="relative z-1 flex flex-col gap-2 w-full">
                    <span className="text-base font-light">Your Mortal Name</span>
                    <input type="text" id="fullName" className="border border-[#EB5B00] rounded-sm px-3 py-1.5 focus-visible:outline-0 focus-visible:shadow-[0px_0px_4px_0px_#EB5B00]" placeholder="Enter the name whispered under moonlight…" />
                </label>
                <label htmlFor="Email" className="relative z-1 flex flex-col gap-2 w-full">
                    <span className="text-base font-light">Summoning Address (Email)</span>
                    <input type="email" id="Email" className="border border-[#EB5B00] rounded-sm px-3 py-1.5 focus-visible:outline-0 focus-visible:shadow-[0px_0px_4px_0px_#EB5B00]" placeholder="you@example.com" />
                </label>
                <label htmlFor="Phone" className="relative z-1 flex flex-col gap-2 w-full">
                    <span className="text-base font-light">Crystal Ball Number (Phone)</span>
                    <input type="tel" id="Phone" className="border border-[#EB5B00] rounded-sm px-3 py-1.5 focus-visible:outline-0 focus-visible:shadow-[0px_0px_4px_0px_#EB5B00]" placeholder="+1 (555) 123-4567" />
                </label>
                <div className="relative z-1 flex flex-col gap-3 w-full">
                    <span className="text-base font-light">Your Desired Role in the Feast</span>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="Chef" className="bg-[#0a0a25] px-4 py-2.5 rounded-lg border border-[#1a1a3a] hover:border-[#ff7b00] transition-all duration-300 flex gap-2 cursor-pointer has-checked:text-[#EB5B00] has-checked:border-[#EB5B00]">
                            <input type="radio" name="role" value="Chef" id="Chef" />
                            Chef
                        </label>
                        <label htmlFor="Waiter" className="bg-[#0a0a25] px-4 py-2.5 rounded-lg border border-[#1a1a3a] hover:border-[#ff7b00] transition-all duration-300 flex gap-2 cursor-pointer has-checked:text-[#EB5B00] has-checked:border-[#EB5B00]">
                            <input type="radio" name="role" value="Waiter" id="Waiter" />
                            Waiter
                        </label>
                        <label htmlFor="DeliveryGhoul" className="bg-[#0a0a25] px-4 py-2.5 rounded-lg border border-[#1a1a3a] hover:border-[#ff7b00] transition-all duration-300 flex gap-2 cursor-pointer has-checked:text-[#EB5B00] has-checked:border-[#EB5B00]">
                            <input type="radio" name="role" value="Delivery Ghoul" id="DeliveryGhoul" />
                            DeliveryGhoul
                        </label>
                        <label htmlFor="EventStaff" className="bg-[#0a0a25] px-4 py-2.5 rounded-lg border border-[#1a1a3a] hover:border-[#ff7b00] transition-all duration-300 flex gap-2 cursor-pointer has-checked:text-[#EB5B00] has-checked:border-[#EB5B00]">
                            <input type="radio" name="role" value="Event Staff" id="EventStaff" />
                            EventStaff
                        </label>
                    </div>
                </div>
                <label htmlFor="bio" className="relative z-1 flex flex-col gap-2 w-full">
                    <span className="text-base font-light">Your Tale of Terror (Why should we summon you?)</span>
                    <textarea type="text" id="bio" className="border border-[#EB5B00] rounded-sm px-3 py-1.5 focus-visible:outline-0 focus-visible:shadow-[0px_0px_4px_0px_#EB5B00]" placeholder="Tell us your story… your skills, your curses, your passions. We’re all ears (and a few missing eyes)." />
                </label>
                <button className="py-1.5 px-4 border border-transparent bg-[#EB5B00] text-black hover:text-[#EB5B00] hover:bg-transparent hover:border-[#EB5B00] rounded-4xl cursor-pointer transition-all duration-500 ease-in-out relative z-1 font-bold mt-3">Submit to the Coven</button>
            </form>
        </div>
    )
}