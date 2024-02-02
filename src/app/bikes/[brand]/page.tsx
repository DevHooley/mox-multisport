import db from '@/db/bikes.json';
import Link from 'next/link';

export default function BikeIndex({ params }: any) {
  const { brand } = params;
  const bikes = (db as any)[brand];

  if (!bikes) return <div>Not found</div>;

  return (
    <div>
      <h1>Brand: {brand}</h1>
      {bikes.map((bike: any) => {
        return (
          <div key={bike.id}>
            <Link href={`/bikes/${brand}/${bike.id}`}>{bike.name}</Link>
          </div>
        );
      })}
    </div>
  );
}
