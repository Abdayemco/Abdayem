
import Link from 'next/link';
import Image from 'next/image';

const icons = [
  { name: 'Real Estate', link: '/real-estate', icon: '/icons/real-estate.png' },
  { name: 'Electric Cars & Bikes', link: '/electric-cars', icon: '/icons/electric.png' },
  { name: 'CNC & Edge', link: '/cnc-edge', icon: '/icons/cnc.png' },
  { name: 'Sanitary & Plumbing', link: '/sanitary', icon: '/icons/sanitary.png' },
  { name: 'Heating & Cooling', link: '/heating', icon: '/icons/heating.png' },
  { name: 'Solar System', link: '/solar', icon: '/icons/solar.png' },
  { name: 'Furniture', link: '/furniture', icon: '/icons/furniture.png' },
  { name: 'Interior & Exterior Design', link: '/design', icon: '/icons/design.png' },
  { name: 'Renovation', link: '/renovation', icon: '/icons/renovation.png' },
  { name: 'Construction', link: '/construction', icon: '/icons/construction.png' },
  { name: 'Family Tree', link: '/family-tree', icon: '/icons/family.png' },
  { name: 'Others', link: '/others', icon: '/icons/others.png' }
];

export default function HomePage() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', padding: '20px' }}>
      {icons.map((item) => (
        <Link key={item.name} href={item.link}>
          <div style={{ textAlign: 'center' }}>
            <Image src={item.icon} alt={item.name} width={80} height={80} />
            <p>{item.name}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
