import chefBoo from '../assets/welcome_page/chef-crew/Chef Boo.jpg';
import Frankie from '../assets/welcome_page/chef-crew/Frankie Frycook.jpg';
import Wanda from '../assets/welcome_page/chef-crew/Wanda the Witch.jpg';
import PumpkinBarista from '../assets/welcome_page/chef-crew/Pip the Pumpkin Barista.jpg';
import GhostWaitress from '../assets/welcome_page/chef-crew/Misty the Ghost Waitress.jpg';
import CountCrustula from '../assets/welcome_page/chef-crew/Count Crustula.jpg';
import ZombieFingersFries from '../assets/menu/zombie_fingers_fries.png';
import batwingbites from '../assets/menu/bat_wing_bites.png';
import ghostlygarlicbread from '../assets/menu/Ghostly_Garlic_Bread.png';
import witchbrewsoup from '../assets/menu/witch’s_brew_soup.png';
import pumpkingutsdip from '../assets/menu/roasted_pumpkin_dip.png';
import bloodysteakdeluxe from '../assets/menu/bloody_steak_deluxe.png';
import soulramen from '../assets/menu/halloween_soul_ramen.png';
import coffincrustpizza from '../assets/menu/coffin_crust_pizza.png';
import graveyardlasagna from '../assets/menu/halloween_lasagna.png';
import werewolfburger from '../assets/menu/werewolf_burger.png';
import pumpkingutspie from '../assets/menu/halloween_pumpkin_pie.png';
import eyeballcustard from '../assets/menu/halloween_custard.png';
import brainmousse from '../assets/menu/halloween_brain_mousse.png';
import spiderwebcake from '../assets/menu/halloween_spider_cake.png';
import graveyardparfait from '../assets/menu/halloween_parfait_dessert.png';
import vampireskisslatte from '../assets/menu/halloween_latte.png';
import ToxicShake from '../assets/menu/Toxic_Shake.png';
import blackcatmocha from '../assets/menu/black_cat_mocha.png';
import witchelixir from '../assets/menu/witch’s_elixir.png';
import soulscreamsoda from '../assets/menu/Soul_Scream_Soda.png';

export const crew = [
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

export const events = [
    {
        id: 1,
        title: "Midnight Feast",
        date: "October 28, 7:00 PM",
        location: "GhoulEats Downtown",
        description:
            "Join our eerie banquet under flickering candlelight. Expect ghostly tunes, cursed courses, and a few... uninvited guests.",
        buttonText: "Reserve a Spot",
    },
    {
        id: 2,
        title: "Witch’s Brew Party",
        date: "October 30, 8:00 PM",
        location: "GhoulEats Rooftop Lounge",
        description:
            "Sip on potions and elixirs while our resident witch hosts a mysterious brew-tasting night. Costumes are *highly* encouraged.",
        buttonText: "Join the Party",
    },
    {
        id: 3,
        title: "Pumpkin Carving Contest",
        date: "October 26, 5:00 PM",
        location: "GhoulEats Courtyard",
        description:
            "Bring your carving tools and your creepiest ideas. The best pumpkin wins a free haunted dinner for two!",
        buttonText: "Sign Up Now",
    },
    {
        id: 4,
        title: "The Haunted Dinner",
        date: "October 31, 9:00 PM",
        location: "GhoulEats Main Hall",
        description:
            "A five-course meal served by the undead. Dine to the sound of ghostly whispers and violin strings that play themselves.",
        buttonText: "Book Your Seat",
    },
    {
        id: 5,
        title: "GhoulFest Live Music Night",
        date: "November 1, 7:30 PM",
        location: "GhoulEats Basement Stage",
        description:
            "Live performances by local bands dressed as monsters. Eat, dance, and howl with us as we close the Halloween season in style.",
        buttonText: "Get Tickets",
    },
    {
        id: 6,
        title: "Candlelight Tales",
        date: "October 29, 6:00 PM",
        location: "GhoulEats Library Room",
        description:
            "Gather around as our storytellers whisper bone-chilling tales from the dark corners of the GhoulEats archives.",
        buttonText: "Reserve a Seat",
    },
];

export const menuItems = [
    // 🧠 Appetizers & Starters
    {
        id: 1,
        name: "Zombie Fingers Fries",
        price: "$ 6.99",
        description: "Crispy severed delights served with blood-red ketchup.",
        category: "Starters",
        image: ZombieFingersFries,
    },
    {
        id: 2,
        name: "Bat Wing Bites",
        price: "$ 7.49",
        description: "Fried bat wings tossed in dark garlic glaze.",
        category: "Starters",
        image: batwingbites,
    },
    {
        id: 3,
        name: "Ghostly Garlic Bread",
        price: "$ 5.99",
        description: "Toasted to perfection, disappears soon as you touch.",
        category: "Starters",
        image: ghostlygarlicbread,
    },
    {
        id: 4,
        name: "Witch’s Brew Soup",
        price: "$ 8.49",
        description: "Bubbling cauldron mix of herbs and mystery eyes.",
        category: "Starters",
        image: witchbrewsoup,
    },
    {
        id: 5,
        name: "Pumpkin Guts Dip",
        price: "$ 6.29",
        description: "Roasted pumpkin puree with cinnamon and haunted spices.",
        category: "Starters",
        image: pumpkingutsdip,
    },

    // 🍕 Main Course
    {
        id: 6,
        name: "Bloody Steak Deluxe",
        price: "$ 14.99",
        description: "Rare cut served dripping with crimson sauce.",
        category: "MainCource",
        image: bloodysteakdeluxe,
    },
    {
        id: 7,
        name: "Soul Ramen",
        price: "$ 12.99",
        description: "Hot broth infused with lost souls and cursed noodles.",
        category: "MainCource",
        image: soulramen,
    },
    {
        id: 8,
        name: "Coffin Crust Pizza",
        price: "$ 11.99",
        description: "Black charcoal dough with cheese and bat pepperoni.",
        category: "MainCource",
        image: coffincrustpizza,
    },
    {
        id: 9,
        name: "Graveyard Lasagna",
        price: "$ 13.99",
        description: "Layered pasta with tombstone-shaped parmesan crisps.",
        category: "MainCource",
        image: graveyardlasagna,
    },
    {
        id: 10,
        name: "Werewolf Burger",
        price: "$ 10.99",
        description: "Double meat, full-moon special, hair optional.",
        category: "MainCource",
        image: werewolfburger,
    },

    // 🍰 Desserts
    {
        id: 11,
        name: "Pumpkin Guts Pie",
        price: "$ 6.49",
        description: "Classic Halloween treat, served with spooky whipped cream.",
        category: "Desserts",
        image: pumpkingutspie,
    },
    {
        id: 12,
        name: "Eyeball Custard",
        price: "$ 5.99",
        description: "Sweet, creamy pudding with floating candy eyes.",
        category: "Desserts",
        image: eyeballcustard,
    },
    {
        id: 13,
        name: "Brain Mousse",
        price: "$ 6.99",
        description: "Strawberry mousse shaped like a brain, dangerously good.",
        category: "Desserts",
        image: brainmousse,
    },
    {
        id: 14,
        name: "Spider Web Cake",
        price: "$ 7.49",
        description: "Dark chocolate sponge covered in spun sugar web.",
        category: "Desserts",
        image: spiderwebcake,
    },
    {
        id: 15,
        name: "Graveyard Parfait",
        price: "$ 5.99",
        description: "Layers of cookie and gummy worms rising from dead.",
        category: "Desserts",
        image: graveyardparfait,
    },

    // 🧃 Drinks & Potions
    {
        id: 16,
        name: "Vampire’s Kiss Latte",
        price: "$ 4.99",
        description: "Espresso with a swirl of crimson syrup and cocoa dust.",
        category: "Drinks",
        image: vampireskisslatte,
    },
    {
        id: 17,
        name: "Toxic Shake",
        price: "$ 5.49",
        description: "Neon green mint shake that glows under moonlight.",
        category: "Drinks",
        image: ToxicShake,
    },
    {
        id: 18,
        name: "Black Cat Mocha",
        price: "$ 4.79",
        description: "Smooth mocha with shadowy whipped cream art.",
        category: "Drinks",
        image: blackcatmocha,
    },
    {
        id: 19,
        name: "Witch’s Elixir",
        price: "$ 5.99",
        description: "Sparkling purple potion with hints of berry and chaos.",
        category: "Drinks",
        image: witchelixir,
    },
    {
        id: 20,
        name: "Soul Scream Soda",
        price: "$ 4.59",
        description: "Fizzing citrus drink that lets out a faint shriek when opened.",
        category: "Drinks",
        image: soulscreamsoda,
    },
];

export const testimonials = [
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