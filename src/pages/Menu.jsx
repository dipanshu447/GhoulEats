import { Link } from "react-router-dom"
import { GiCauldron, GiMeat, GiCandyCanes, GiMagicPotion } from "react-icons/gi";
import { useSearchParams } from "react-router-dom";
import { menuItems } from "../utils/data";

export default function Menu() {
    const menuCategories = [
        {
            title: "Spooky appetizers",
            icon: <GiCauldron className="text-[#ff7b00] drop-shadow-[0_0_1px_#ff7b00] hidden sm:block" />,
            category: "Starters"
        },
        {
            title: "Hauntingly hearty meals",
            icon: <GiMeat className="text-[#ff7b00] drop-shadow-[0_0_1px_#ff7b00] hidden sm:block" />,
            category: "MainCource"
        },
        {
            title: "Sweet curses",
            icon: <GiCandyCanes className="text-[#ff7b00] drop-shadow-[0_0_1px_#ff7b00] hidden sm:block" />,
            category: "Desserts"
        },
        {
            title: "Potion brews",
            icon: <GiMagicPotion className="text-[#ff7b00] drop-shadow-[0_0_1px_#ff7b00] hidden sm:block" />,
            category: "Drinks"
        }
    ]
    const [searchParams, setSearchParams] = useSearchParams();
    const category = searchParams.get("category");
    const clearCatgory = () => setSearchParams("");

    const filterMenu = category ? menuItems.filter(item => item.category == category) : menuItems;

    return (
        <div className="py-10">
            <div className="mt-0 z-1 flex flex-col gap-8 px-6 sm:px-10 md:px-20">
                <div className="flex flex-col gap-2">
                    <h1 className="text-3xl font-[Eater]">Our Sinisterly Delicious <span className="text-[#EB5B00]">Menu</span></h1>
                    <small className="font-light tracking-widest ml-1">Beware... every bite might haunt your cravings forever.</small>
                </div>
                <div className="mt-0 flex gap-3 overflow-x-auto overflow-y-hidden">
                    <div className="bg-[#0a0a25] p-2 sm:py-2.5 sm:px-4 rounded-lg shadow-lg border border-[#1a1a3a] hover:border-[#ff7b00] transition-all duration-300 text-[10px] sm:text-xs" onClick={clearCatgory}>All</div>
                    {menuCategories.map(cat => (
                        <Link key={cat.title} to={`?category=${cat.category}`} className={category == cat.category ? "bg-[#0a0a25] p-2 sm:py-2.5 sm:px-4 rounded-lg shadow-lg border border-[#ff7b00] transition-all duration-300 text-[10px] sm:text-xs flex items-center gap-1.5 shrink-0" :"bg-[#0a0a25] p-2 sm:py-2.5 sm:px-4 rounded-lg shadow-lg border border-[#1a1a3a] hover:border-[#ff7b00] transition-all duration-300 text-[10px] sm:text-xs flex items-center gap-1.5 shrink-0"}>
                            {cat.icon}
                            {cat.title}
                        </Link>
                    ))}
                </div>
                <div className="grid gap-4 sm:gap-x-10 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mt-20 sm:mt-14 gap-y-25">
                    {filterMenu.map(item => (
                        <div key={item.id} className="bg-[#0a0a25] p-2 sm:p-4 md:p-6 rounded-2xl shadow-lg border border-[#1a1a3a] hover:border-[#ff7b00] transition-all duration-300">
                            <img src={item.image} alt="soup" className="-mt-25" />
                            <div className="flex items-center gap-2 mb-3 justify-center flex-col">
                                <h3 className="text-sm md:text-lg font-semibold text-white text-center">{item.name}</h3>
                                <small className="text-[#ff6200]">{item.price}</small>
                            </div>
                            <p className="text-gray-300 text-[10px] sm:text-xs md:text-sm">{item.description}</p>
                            <button className="sm:text-sm text-xs py-1 sm:py-1.5 px-4 border border-transparent bg-[#EB5B00] text-black hover:text-[#EB5B00] hover:bg-transparent hover:border-[#EB5B00] rounded-4xl cursor-pointer transition-all duration-500 ease-in-out relative z-1 font-bold mt-5 w-full">Add to Cart</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}