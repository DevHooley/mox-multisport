import db from '@/db/bikes.json';

export default function BikePage({ params }: any) {
  const { brand, id } = params;
  const bikes = (db as any)[brand];
  const bike = bikes.find((b: any) => b.id == id);

  if (!bike) return <div>Not found</div>;

  return (
    <div>
      <h1>Brand: {brand}</h1>
      <pre>{id}</pre>
      <pre>{JSON.stringify(bike, null, 2)}</pre>
    </div>
  );
}
