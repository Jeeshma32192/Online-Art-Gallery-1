import { createContext, useContext, useEffect, useState } from 'react';

const GalleryContext = createContext(null);
const starterArtworks = [
  { id: 1, title: 'Golden Horizon', artist: 'Aarav Mehta', category: 'Abstract', price: 12500, image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=900&q=85', description: 'A warm abstract composition inspired by the changing colours of sunset.', status: 'Available', stock: 5 },
  { id: 2, title: 'Quiet Blue', artist: 'Mira Kapoor', category: 'Modern', price: 9800, image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=900&q=85', description: 'A calm modern artwork with expressive blue tones.', status: 'Available', stock: 5 },
  { id: 3, title: 'The Old Street', artist: 'Dev Shah', category: 'Landscape', price: 15400, image: 'https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=900&q=85', description: 'A painterly view of a peaceful street and its architecture.', status: 'Available', stock: 5 },
  { id: 4, title: 'Wild Flowers', artist: 'Ananya Rao', category: 'Nature', price: 7600, image: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&w=900&q=85', description: 'Bright floral shapes celebrate the beauty of nature.', status: 'Available', stock: 5 },
  { id: 5, title: 'Modern Muse', artist: 'Mira Kapoor', category: 'Portrait', price: 18200, image: 'https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=900&q=85', description: 'A contemporary portrait study with bold colours.', status: 'Available', stock: 5 },
  { id: 6, title: 'Earth Forms', artist: 'Aarav Mehta', category: 'Abstract', price: 11200, image: 'https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=900&q=85', description: 'Layered shapes and natural colours create a balanced composition.', status: 'Available', stock: 5 },
  { id: 7, title: 'Crimson Garden', artist: 'Ananya Rao', category: 'Floral', price: 8900, image: 'https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=900&q=85', description: 'A lively floral composition with rich crimson and warm golden details.', status: 'Available', stock: 4 },
  { id: 8, title: 'After the Rain', artist: 'Dev Shah', category: 'Landscape', price: 14300, image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=900&q=85', description: 'A serene landscape inspired by the fresh colours of a rain-washed afternoon.', status: 'Available', stock: 3 },
  { id: 9, title: 'Sunset Geometry', artist: 'Aarav Mehta', category: 'Abstract', price: 13600, image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=900&q=85', description: 'Geometric forms and saturated colours meet in a bold sunset-inspired study.', status: 'Available', stock: 5 },
  { id: 10, title: 'Petal Study', artist: 'Mira Kapoor', category: 'Floral', price: 10200, image: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&w=900&q=85', description: 'Expressive painterly petals arranged in a bright, rhythmic composition.', status: 'Available', stock: 4 },
  { id: 11, title: 'Quiet Blue II', artist: 'Mira Kapoor', category: 'Modern', price: 11700, image: 'https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=900&q=85&sat=-25', description: 'A softer, contemplative modern piece built around blue and muted tones.', status: 'Available', stock: 2 },
  { id: 12, title: 'Golden Fields', artist: 'Dev Shah', category: 'Landscape', price: 15800, image: 'https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=900&q=85&sat=20', description: 'An imagined field in late sunlight, with layered forms and earthy colour.', status: 'Available', stock: 3 },
  { id: 13, title: 'Tidal Dream', artist: 'Aarav Mehta', category: 'Abstract', price: 14800, image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=900&q=85&sat=-15', description: 'A richly layered abstract study with expressive movement and luminous colour.', status: 'Available', stock: 4 },
  { id: 14, title: 'Blue Reverie', artist: 'Mira Kapoor', category: 'Modern', price: 12900, image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=900&q=85&sat=15', description: 'A thoughtful modern composition with calm blue tones and delicate details.', status: 'Available', stock: 4 },
  { id: 15, title: 'Path Through the Pines', artist: 'Dev Shah', category: 'Landscape', price: 16900, image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=85', description: 'A peaceful scenic view filled with depth, soft light and natural colour.', status: 'Available', stock: 3 },
  { id: 16, title: 'Wild Meadow', artist: 'Ananya Rao', category: 'Nature', price: 9400, image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=900&q=85', description: 'A fresh celebration of wild blooms and the beauty of the outdoors.', status: 'Available', stock: 5 },
  { id: 17, title: 'Quiet Gaze', artist: 'Mira Kapoor', category: 'Portrait', price: 19400, image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=85', description: 'A graceful portrait with a soft, contemporary editorial feel.', status: 'Available', stock: 2 },
  { id: 18, title: 'Rosewater', artist: 'Ananya Rao', category: 'Floral', price: 10800, image: 'https://images.unsplash.com/photo-1494972308805-463bc619d34e?auto=format&fit=crop&w=900&q=85', description: 'A romantic floral arrangement in delicate blush and warm green hues.', status: 'Available', stock: 4 },
  { id: 19, title: 'Colour in Bloom', artist: 'Aarav Mehta', category: 'Abstract', price: 15700, image: 'https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=900&q=85&sat=30', description: 'Energetic brushwork and vivid colour make this abstract piece feel alive.', status: 'Available', stock: 3 },
  { id: 20, title: 'Soft Shapes', artist: 'Mira Kapoor', category: 'Modern', price: 11900, image: 'https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=900&q=85', description: 'A balanced modern artwork with warm shapes and a serene palette.', status: 'Available', stock: 4 },
  { id: 21, title: 'Mountain Stillness', artist: 'Dev Shah', category: 'Landscape', price: 17600, image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=85', description: 'Majestic mountains and gentle light create a peaceful landscape.', status: 'Available', stock: 3 },
  { id: 22, title: 'Fern & Light', artist: 'Ananya Rao', category: 'Nature', price: 8200, image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=85', description: 'A lush woodland scene inspired by sunlight filtering through leaves.', status: 'Available', stock: 5 },
  { id: 23, title: 'Golden Hour Portrait', artist: 'Mira Kapoor', category: 'Portrait', price: 20500, image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=85', description: 'A warm portrait study with natural light and a confident, intimate mood.', status: 'Available', stock: 2 },
  { id: 24, title: 'Garden Sonata', artist: 'Ananya Rao', category: 'Floral', price: 11400, image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=900&q=85&sat=25', description: 'A colourful garden-inspired composition with a bright, joyful atmosphere.', status: 'Available', stock: 4 }
];
const read = (key, fallback) => { try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; } };
export function GalleryProvider({ children }) {
  const [artworks, setArtworks] = useState(() => { const saved = read('artworks', null); return saved ? [...saved, ...starterArtworks.filter(item => !saved.some(existing => existing.id === item.id))] : starterArtworks; });
  const [artists, setArtists] = useState(() => read('artists', [
    { id: 1, name: 'Aarav Mehta', specialty: 'Abstract & Contemporary', bio: 'Aarav explores colour, shape and movement through contemporary abstract art.' },
    { id: 2, name: 'Mira Kapoor', specialty: 'Modern Art & Portraits', bio: 'Mira creates expressive portraits and modern compositions.' },
    { id: 3, name: 'Dev Shah', specialty: 'Landscape Painting', bio: 'Dev captures familiar places with a thoughtful artistic eye.' }
  ]));
  const [auctions, setAuctions] = useState(() => read('auctions', [
    { id: 1, title: 'Blue in Motion', artist: 'Mira Kapoor', currentBid: 8500, ends: '2027-01-15', image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=700&q=80' },
    { id: 2, title: 'Autumn Fields', artist: 'Dev Shah', currentBid: 6200, ends: '2027-01-20', image: 'https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=700&q=80' }
  ]));
  const [exhibitions, setExhibitions] = useState(() => read('exhibitions', [{ id: 1, name: 'New Perspectives', date: '2027-02-10', venue: 'Artora Gallery Hall' }]));
  const [users, setUsers] = useState(() => read('users', []));
  const [cart, setCart] = useState(() => read('cart', []));
  const [favourites, setFavourites] = useState(() => read('favourites', []));
  const [reviews, setReviews] = useState(() => read('reviews', []));
  const [orders, setOrders] = useState(() => read('orders', []));
  const [supportTickets, setSupportTickets] = useState(() => read('supportTickets', []));
  const [viewingRequests, setViewingRequests] = useState(() => read('viewingRequests', []));
  useEffect(() => localStorage.setItem('artworks', JSON.stringify(artworks)), [artworks]);
  useEffect(() => localStorage.setItem('artists', JSON.stringify(artists)), [artists]);
  useEffect(() => localStorage.setItem('auctions', JSON.stringify(auctions)), [auctions]);
  useEffect(() => localStorage.setItem('exhibitions', JSON.stringify(exhibitions)), [exhibitions]);
  useEffect(() => localStorage.setItem('users', JSON.stringify(users)), [users]);
  useEffect(() => localStorage.setItem('cart', JSON.stringify(cart)), [cart]);
  useEffect(() => localStorage.setItem('favourites', JSON.stringify(favourites)), [favourites]);
  useEffect(() => localStorage.setItem('reviews', JSON.stringify(reviews)), [reviews]);
  useEffect(() => localStorage.setItem('orders', JSON.stringify(orders)), [orders]);
  useEffect(() => localStorage.setItem('supportTickets', JSON.stringify(supportTickets)), [supportTickets]);
  useEffect(() => localStorage.setItem('viewingRequests', JSON.stringify(viewingRequests)), [viewingRequests]);
  const addToCart = id => setCart(old => old.includes(id) ? old : [...old, id]);
  const toggleFavourite = id => setFavourites(old => old.includes(id) ? old.filter(x => x !== id) : [...old, id]);
  return <GalleryContext.Provider value={{ artworks, setArtworks, artists, setArtists, auctions, setAuctions, exhibitions, setExhibitions, users, setUsers, cart, setCart, favourites, setFavourites, reviews, setReviews, orders, setOrders, supportTickets, setSupportTickets, viewingRequests, setViewingRequests, addToCart, toggleFavourite }}>{children}</GalleryContext.Provider>;
}
export const useGallery = () => useContext(GalleryContext);
