export const PromoSection = () => {
  return (
    <section className="py-16 px-6 md:px-12 bg-gradient-to-r from-[#9e4ee9] via-[#a66dff] to-[#9e4ee9] text-white text-center rounded-xl shadow-lg my-10 mx-4 md:mx-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">🎁 Special Offer Just for You!</h2>
      <p className="text-lg mb-6 max-w-2xl mx-auto">
        Subscribe now and get <span className="font-bold text-yellow-300">25% OFF</span> your next roommate listing. Use promo code below!
      </p>

      <div className="inline-block bg-white text-[#9e4ee9] font-semibold px-6 py-3 rounded-full text-lg tracking-wider shadow-md">
        🎉 Use Code: <span className="font-bold">ROOM25</span>
      </div>

      <p className="mt-6 text-sm opacity-90">Offer valid for a limited time only!</p>
    </section>
  );
};
