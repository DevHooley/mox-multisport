export default function ContactComponent() {
  const handleDialClick = () => {
    window.location.href = 'tel:+13124669111';
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:moxmultisport@gmail.com';
  };

  return (
    <div className="">
      <h2 className="text-gray-700 cursor-pointer leading-relaxed pt-4">
        <a onClick={handleEmailClick}>
          Email: Troy Crady - moxmultisport@gmail.com
        </a>
      </h2>
      <h2 className="mt-4">
        <a
          onClick={handleDialClick}
          className="text-gray-600 cursor-pointer leading-relaxed pt-4"
        >
          Phone number - (312) 466-9111
        </a>
      </h2>
    </div>
  );
}
