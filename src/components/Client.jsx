export const Client = () => {
  const clientImages = [
    "https://softivuspro.com/mosto/money-transfer/assets/images/client/five.png",
    "https://softivuspro.com/mosto/money-transfer/assets/images/client/four.png",
    "https://softivuspro.com/mosto/money-transfer/assets/images/client/one.png",
    "https://softivuspro.com/mosto/money-transfer/assets/images/client/three.png",
  ];

  return (
  	<div className="px-5" >
    <div className="rounded-2xl bg-white relative lg:-top-16 mt-16 lg:mt-0 z-30 p-5 shadow-everySide w-fit max-w-6xl mx-auto overflow-x-auto">
   <div className="flex gap-2 items-center justify-center" >
      {clientImages.concat(clientImages).map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Client ${index + 1}`}
          className="inline-block mx-2 h-12 lg:h-auto"
        />
      ))}
    </div>
    </div>
    </div>
  );
};