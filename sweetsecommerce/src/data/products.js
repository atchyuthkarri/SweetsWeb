import MotichoorLaddu from '../assets/MotichoorLaddu_71f863af-f3ea-456d-97e6-57f687fce71e.webp'
import KajuKatli from '../assets/KajuKatli.webp'
import AjmeriKalakand from '../assets/Ajmerikalakand.webp'
import Baklava from '../assets/Baklava.webp'
import BandarLaddu from '../assets/Bandar_ladoo.webp'
import BadamKatli from '../assets/BadamKatli.webp'
import Ariselu from '../assets/Ariselu.webp'
import Badusha from '../assets/Badusha.webp'
import BadushaAlt from '../assets/Badusha (1).webp'
import DryFruitLaddu from '../assets/Dry-Fruitladdu.webp'
import DryFruitBoondiLaddu from '../assets/DryFruitBoondiladdu1_d33d3de6-6834-49c9-a301-e0551a898490.webp'
import DryFruitGujiya from '../assets/DryFruitGujiya_ccbd69f3-0da3-47b5-ae3b-df040daac24b.webp'
import GPRS5982 from '../assets/GPRS5982.webp'
import KajuSweet2 from '../assets/KajuSweet2_1_1.webp'
import MysorePak from '../assets/MysorePak.webp'
import PaperSweetDryFruit from '../assets/PaperSweet-DryFruit.webp'
import CakeAndCookieTreats from '../assets/cake_and_cookie_treats.webp'
import ClassicBaklawa from '../assets/classic_baklawa.webp'
import DryFruitSweets from '../assets/dry_fruit_sweets.webp'
import JaggerySweets from '../assets/jaggery_sweets.webp'
import KharaSnacks from '../assets/khara_snacks.webp'
import Pickles from '../assets/pickles.webp'
import SignatureSpecialities from '../assets/signature_specialities.webp'
import SpicyPowders from '../assets/spicy_powders.webp'

export const CATEGORY_OPTIONS = [
  'Cake and Cookie Treats',
  'Classic Baklavas',
  'Crunchy Treats',
  'Dry Fruit Sweets',
  'Gift Hampers',
  'Jaggery Sweets',
  'Khara & Snacks',
  'Signature Specialities',
  'Spicy Powders',
  'Sugar Free Sweets',
  'Telugu Traditionals',
  'Traditional Pickles',
]

export const PRODUCTS = [
  {
    id: 'motichoor-laddu',
    slug: 'motichoor-laddu',
    name: 'Motichur Laddu',
    price: 'Rs.260.00',
    badge: 'Best Seller',
    image: MotichoorLaddu,
    category: 'Telugu Traditionals',
    available: true,
    shortDescription:
      'Crafted with precision and care, a classic festive sweet with rich aroma and texture.',
    weights: ['250gm', '400gm', '1kg'],
  },
  {
    id: 'kaju-katli',
    slug: 'kaju-katli',
    name: 'Kaju Katli',
    price: 'Rs.550.00',
    badge: 'Best Seller',
    image: KajuKatli,
    category: 'Dry Fruit Sweets',
    available: true,
    shortDescription:
      'Classic cashew delight with a smooth melt-in-mouth bite and premium ingredients.',
    weights: ['250gm', '400gm', '1kg'],
  },
  {
    id: 'ajmeri-kalakand',
    slug: 'ajmeri-kalakand',
    name: 'Ajmeri Kalakand',
    price: 'Rs.280.00',
    badge: null,
    image: AjmeriKalakand,
    category: 'Signature Specialities',
    available: true,
    shortDescription:
      'Soft, milky and indulgent—made for celebrations and gifting.',
    weights: ['250gm', '400gm', '1kg'],
  },
  {
    id: 'baklava-box',
    slug: 'baklava-box',
    name: 'Baklava 5 piece Box',
    price: 'Rs.300.00',
    badge: null,
    image: Baklava,
    category: 'Classic Baklavas',
    available: true,
    shortDescription:
      'Flaky layers with rich nutty sweetness—perfect with chai or coffee.',
    weights: ['5 piece', '10 piece'],
  },
  {
    id: 'bandar-laddu-sugar-free',
    slug: 'bandar-laddu-sugar-free',
    name: 'Bandar Laddu Sugar Free',
    price: 'Rs.340.00',
    badge: null,
    image: BandarLaddu,
    category: 'Sugar Free Sweets',
    available: true,
    shortDescription:
      'A lighter take on a beloved sweet—balanced taste without added sugar.',
    weights: ['250gm', '400gm'],
  },
  {
    id: 'spl-badam-halwa',
    slug: 'spl-badam-halwa',
    name: 'Spl Badam Halwa',
    price: 'Rs.970.00',
    badge: null,
    image: BadamKatli,
    category: 'Dry Fruit Sweets',
    available: false,
    shortDescription:
      'Rich almond goodness slow-cooked for a deep, luxurious flavour.',
    weights: ['250gm', '400gm'],
  },
  {
    id: 'ariselu',
    slug: 'ariselu',
    name: 'Ariselu',
    price: 'Rs.450.00',
    badge: 'Best Seller',
    image: Ariselu,
    category: 'Telugu Traditionals',
    available: true,
    shortDescription:
      'A traditional delicacy made during festivals—crispy edges with soft centre.',
    weights: ['250gm', '400gm', '1kg'],
  },
  {
    id: 'badusha',
    slug: 'badusha',
    name: 'Badusha',
    price: 'Rs.950.00',
    badge: null,
    image: Badusha,
    category: 'Signature Specialities',
    available: true,
    shortDescription:
      'Buttery, flaky and sweet—made with a traditional recipe for the perfect bite.',
    weights: ['250gm', '400gm', '1kg'],
  },
  {
    id: 'badusha-premium',
    slug: 'badusha-premium',
    name: 'Badusha Premium',
    price: 'Rs.990.00',
    badge: null,
    image: BadushaAlt,
    category: 'Signature Specialities',
    available: false,
    shortDescription:
      'A premium take on Badusha with extra richness and a refined finish.',
    weights: ['250gm', '400gm'],
  },
  {
    id: 'dry-fruit-laddu',
    slug: 'dry-fruit-laddu',
    name: 'Dry Fruit Laddu',
    price: 'Rs.300.00',
    badge: null,
    image: DryFruitLaddu,
    category: 'Dry Fruit Sweets',
    available: true,
    shortDescription:
      'Energy-packed laddu with wholesome dry fruits—great for a quick treat.',
    weights: ['250gm', '400gm', '1kg'],
  },
  {
    id: 'dry-fruit-boondi-laddu',
    slug: 'dry-fruit-boondi-laddu',
    name: 'Dry Fruit Boondi Laddu',
    price: 'Rs.520.00',
    badge: 'Best Seller',
    image: DryFruitBoondiLaddu,
    category: 'Dry Fruit Sweets',
    available: true,
    shortDescription:
      'A festive favourite enhanced with dry fruits for extra richness.',
    weights: ['250gm', '400gm', '1kg'],
  },
  {
    id: 'dry-fruit-gujiya',
    slug: 'dry-fruit-gujiya',
    name: 'Dry Fruit Gujiya',
    price: 'Rs.620.00',
    badge: null,
    image: DryFruitGujiya,
    category: 'Dry Fruit Sweets',
    available: true,
    shortDescription:
      'Crisp shell filled with dry fruit goodness—perfect for gifting.',
    weights: ['250gm', '400gm'],
  },
  {
    id: 'gprs-special-sweet',
    slug: 'gprs-special-sweet',
    name: 'G Pulla Reddy Special Sweet',
    price: 'Rs.780.00',
    badge: null,
    image: GPRS5982,
    category: 'Signature Specialities',
    available: true,
    shortDescription:
      'A signature sweet selection crafted for celebrations and special moments.',
    weights: ['250gm', '400gm'],
  },
  {
    id: 'kaju-sweet-2',
    slug: 'kaju-sweet-2',
    name: 'Kaju Sweet',
    price: 'Rs.560.00',
    badge: null,
    image: KajuSweet2,
    category: 'Dry Fruit Sweets',
    available: true,
    shortDescription:
      'Cashew-based sweet with a soft texture and a delightful nutty finish.',
    weights: ['250gm', '400gm'],
  },
  {
    id: 'mysore-pak',
    slug: 'mysore-pak',
    name: 'Mysore Pak',
    price: 'Rs.420.00',
    badge: 'Best Seller',
    image: MysorePak,
    category: 'Telugu Traditionals',
    available: true,
    shortDescription:
      'Ghee-rich classic with a crumbly melt and a sweet aroma.',
    weights: ['250gm', '400gm', '1kg'],
  },
  {
    id: 'paper-sweet-dry-fruit',
    slug: 'paper-sweet-dry-fruit',
    name: 'Paper Sweet Dry Fruit',
    price: 'Rs.680.00',
    badge: null,
    image: PaperSweetDryFruit,
    category: 'Dry Fruit Sweets',
    available: true,
    shortDescription:
      'Thin, layered sweet with dry fruits—light yet indulgent.',
    weights: ['250gm', '400gm'],
  },
  {
    id: 'cookie-treats-assorted',
    slug: 'cookie-treats-assorted',
    name: 'Assorted Cookie Treats',
    price: 'Rs.350.00',
    badge: null,
    image: CakeAndCookieTreats,
    category: 'Cake and Cookie Treats',
    available: true,
    shortDescription:
      'Assorted baked treats with a soft crumb and balanced sweetness.',
    weights: ['1 box'],
  },
  {
    id: 'cake-treats-special',
    slug: 'cake-treats-special',
    name: 'Cake Treats Special',
    price: 'Rs.420.00',
    badge: null,
    image: CakeAndCookieTreats,
    category: 'Cake and Cookie Treats',
    available: false,
    shortDescription:
      'A special selection of cake treats—perfect for gifting and sharing.',
    weights: ['1 box'],
  },
  {
    id: 'classic-baklava-assorted',
    slug: 'classic-baklava-assorted',
    name: 'Classic Baklava Assorted',
    price: 'Rs.760.00',
    badge: null,
    image: ClassicBaklawa,
    category: 'Classic Baklavas',
    available: true,
    shortDescription:
      'Assorted baklava with flaky layers and nutty richness.',
    weights: ['1 box'],
  },
  {
    id: 'classic-baklava-nut',
    slug: 'classic-baklava-nut',
    name: 'Classic Baklava Nut',
    price: 'Rs.820.00',
    badge: null,
    image: ClassicBaklawa,
    category: 'Classic Baklavas',
    available: true,
    shortDescription:
      'Nut-forward baklava for a richer, crunchier bite.',
    weights: ['1 box'],
  },
  {
    id: 'dry-fruit-sweets-box',
    slug: 'dry-fruit-sweets-box',
    name: 'Dry Fruit Sweets Box',
    price: 'Rs.990.00',
    badge: null,
    image: DryFruitSweets,
    category: 'Dry Fruit Sweets',
    available: true,
    shortDescription:
      'A premium box of dry fruit sweets for gifting and celebrations.',
    weights: ['1 box'],
  },
  {
    id: 'dry-fruit-sweets-premium',
    slug: 'dry-fruit-sweets-premium',
    name: 'Dry Fruit Sweets Premium',
    price: 'Rs.1190.00',
    badge: null,
    image: DryFruitSweets,
    category: 'Dry Fruit Sweets',
    available: false,
    shortDescription:
      'Premium assortment crafted with handpicked dry fruits.',
    weights: ['1 box'],
  },
  {
    id: 'jaggery-sweets-mix',
    slug: 'jaggery-sweets-mix',
    name: 'Jaggery Sweets Mix',
    price: 'Rs.520.00',
    badge: null,
    image: JaggerySweets,
    category: 'Jaggery Sweets',
    available: true,
    shortDescription:
      'Naturally sweetened with jaggery for a deeper traditional flavour.',
    weights: ['250gm', '400gm'],
  },
  {
    id: 'jaggery-sweets-special',
    slug: 'jaggery-sweets-special',
    name: 'Jaggery Sweets Special',
    price: 'Rs.560.00',
    badge: null,
    image: JaggerySweets,
    category: 'Jaggery Sweets',
    available: true,
    shortDescription:
      'Jaggery-based sweets prepared with traditional ingredients and care.',
    weights: ['250gm', '400gm'],
  },
  {
    id: 'khara-snacks-combo',
    slug: 'khara-snacks-combo',
    name: 'Khara & Snacks Combo',
    price: 'Rs.480.00',
    badge: null,
    image: KharaSnacks,
    category: 'Khara & Snacks',
    available: true,
    shortDescription:
      'Crunchy, savoury and satisfying—perfect snack-time combo.',
    weights: ['1 box'],
  },
  {
    id: 'khara-snacks-premium',
    slug: 'khara-snacks-premium',
    name: 'Khara & Snacks Premium',
    price: 'Rs.540.00',
    badge: null,
    image: KharaSnacks,
    category: 'Khara & Snacks',
    available: false,
    shortDescription:
      'Premium savoury bites crafted for a bold, crunchy experience.',
    weights: ['1 box'],
  },
  {
    id: 'traditional-pickles-combo',
    slug: 'traditional-pickles-combo',
    name: 'Traditional Pickles Combo',
    price: 'Rs.620.00',
    badge: null,
    image: Pickles,
    category: 'Traditional Pickles',
    available: true,
    shortDescription:
      'Classic pickles combo with authentic spice and tang.',
    weights: ['2 jars'],
  },
  {
    id: 'traditional-pickles-spicy',
    slug: 'traditional-pickles-spicy',
    name: 'Traditional Pickles Spicy',
    price: 'Rs.680.00',
    badge: null,
    image: Pickles,
    category: 'Traditional Pickles',
    available: true,
    shortDescription:
      'Spicy traditional pickle made with careful seasoning and time-tested method.',
    weights: ['1 jar'],
  },
  {
    id: 'signature-specialities-box',
    slug: 'signature-specialities-box',
    name: 'Signature Specialities Box',
    price: 'Rs.840.00',
    badge: null,
    image: SignatureSpecialities,
    category: 'Signature Specialities',
    available: true,
    shortDescription:
      'A curated box of signature favourites—ideal for gifting.',
    weights: ['1 box'],
  },
  {
    id: 'signature-specialities-premium',
    slug: 'signature-specialities-premium',
    name: 'Signature Specialities Premium',
    price: 'Rs.990.00',
    badge: null,
    image: SignatureSpecialities,
    category: 'Signature Specialities',
    available: false,
    shortDescription:
      'Premium box with richer selections and premium ingredients.',
    weights: ['1 box'],
  },
  {
    id: 'spicy-powders-box',
    slug: 'spicy-powders-box',
    name: 'Spicy Powders Box',
    price: 'Rs.320.00',
    badge: null,
    image: SpicyPowders,
    category: 'Spicy Powders',
    available: true,
    shortDescription:
      'Everyday spice powders made from carefully sourced ingredients.',
    weights: ['250gm'],
  },
  {
    id: 'spicy-powders-premium',
    slug: 'spicy-powders-premium',
    name: 'Spicy Powders Premium',
    price: 'Rs.390.00',
    badge: null,
    image: SpicyPowders,
    category: 'Spicy Powders',
    available: true,
    shortDescription:
      'Premium blend with bolder aroma and flavour.',
    weights: ['250gm'],
  },
  {
    id: 'gift-hamper-sweets',
    slug: 'gift-hamper-sweets',
    name: 'Gift Hamper - Sweets',
    price: 'Rs.1490.00',
    badge: null,
    image: Baklava,
    category: 'Gift Hampers',
    available: true,
    shortDescription:
      'A sweets gift hamper curated for festivals and family celebrations.',
    weights: ['1 hamper'],
  },
  {
    id: 'gift-hamper-dry-fruit',
    slug: 'gift-hamper-dry-fruit',
    name: 'Gift Hamper - Dry Fruit',
    price: 'Rs.1690.00',
    badge: null,
    image: DryFruitSweets,
    category: 'Gift Hampers',
    available: true,
    shortDescription:
      'A premium hamper with dry fruit sweets—perfect for gifting.',
    weights: ['1 hamper'],
  },
  {
    id: 'crunchy-treats-mix',
    slug: 'crunchy-treats-mix',
    name: 'Crunchy Treats Mix',
    price: 'Rs.280.00',
    badge: null,
    image: KharaSnacks,
    category: 'Crunchy Treats',
    available: true,
    shortDescription:
      'Crunchy treats with a satisfying bite—great for evening cravings.',
    weights: ['250gm'],
  },
  {
    id: 'crunchy-treats-special',
    slug: 'crunchy-treats-special',
    name: 'Crunchy Treats Special',
    price: 'Rs.320.00',
    badge: null,
    image: KharaSnacks,
    category: 'Crunchy Treats',
    available: false,
    shortDescription:
      'Special crunchy mix—bold flavours and an extra crisp texture.',
    weights: ['250gm'],
  },
]

export const getProductBySlug = (slug) => PRODUCTS.find((p) => p.slug === slug)
