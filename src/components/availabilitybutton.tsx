import Link from "next/link";

export default function AvailabilityButton() {
  return (
    <Link
      className="bg-sky-500 text-white py-2 px-4 rounded inline-block text-center text-sm font-semibold hover:bg-sky-600 active:bg-sky-400 transition duration-300"
      href="/order"
    >
      Click For Availability
    </Link>
  );
}
