"use client";
import Image from "next/image";

export default function AboutLuckycoinPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white text-gray-800 px-6 py-12">
      {/* LOGO + TITLE */}
      <section className="text-center mb-12">
        <Image
          src="/favicon/Luckycoin.png"
          alt="Luckycoin Logo"
          width={100}
          height={100}
          className="mx-auto rounded-full shadow-lg"
        />
        <h1 className="text-4xl sm:text-5xl font-bold mt-4 text-green-700">
          About <span className="text-green-600">Luckycoin</span>
        </h1>
        <p className="text-lg text-gray-600 mt-3 max-w-2xl mx-auto">
          🍀 <strong>Luckycoin (LUC)</strong> – The digital coin of luck, connecting rewards and happiness.
        </p>
      </section>

      {/* DESCRIPTION */}
      <section className="max-w-3xl mx-auto text-center mb-16 leading-relaxed text-lg">
        <p>
          <strong>Luckycoin</strong> is a digital reward point designed to bring more joy and value
          to everyday shopping. Customers can earn LUC when purchasing, then use it
          to redeem gifts, claim discounts, or exchange for products and services
          at participating stores.
        </p>
        <p className="mt-6">
          Each Luckycoin represents a token of good fortune — making every
          purchase not just a transaction, but a chance to feel rewarded and lucky.
        </p>
      </section>

      {/* MISSION & VISION */}
      <section className="max-w-5xl mx-auto mb-20">
        <h2 className="text-3xl font-semibold text-green-700 mb-8 text-center">
          🌍 Mission & Vision
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all">
            <h3 className="font-bold text-lg mb-2 text-green-600">Our Mission</h3>
            <p>
              To create a universal, simple reward system that brings luck and value
              to every customer while helping stores build loyal communities.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all">
            <h3 className="font-bold text-lg mb-2 text-green-600">Our Vision</h3>
            <p>
              A future where every business — from small shops to large retailers —
              can reward customers instantly through a shared token of luck: Luckycoin.
            </p>
          </div>
        </div>
      </section>

      {/* TOKEN UTILITY */}
      <section className="max-w-5xl mx-auto mb-20">
        <h2 className="text-3xl font-semibold text-green-700 mb-6 text-center">
          💎 Luckycoin Utility (LUC)
        </h2>
        <ul className="list-disc list-inside text-gray-700 text-lg space-y-3 max-w-3xl mx-auto">
          <li>Earn LUC as loyalty points when making purchases.</li>
          <li>Use LUC to redeem gifts, vouchers, or get instant discounts.</li>
          <li>Exchange LUC between stores or businesses within the Luckycoin network.</li>
          <li>Encourage repeat customers and build stronger brand loyalty.</li>
          <li>Future: Cross-business rewards and promotions powered by blockchain.</li>
        </ul>
      </section>

      {/* BENEFITS */}
      <section className="max-w-5xl mx-auto mb-20 text-center">
        <h2 className="text-3xl font-semibold text-green-700 mb-8">
          ✨ Why Choose Luckycoin?
        </h2>
        <div className="grid md:grid-cols-3 gap-6 text-gray-700">
          <div className="p-6 bg-white rounded-2xl shadow-md">
            <h3 className="font-bold text-lg mb-2 text-green-600">🎁 Reward Flexibility</h3>
            <p>Customers can use LUC for discounts, gifts, or promotions anytime.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-md">
            <h3 className="font-bold text-lg mb-2 text-green-600">🍀 Lucky Experience</h3>
            <p>Each purchase gives customers a feeling of luck and appreciation.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-md">
            <h3 className="font-bold text-lg mb-2 text-green-600">💼 Easy for Businesses</h3>
            <p>Shops can integrate Luckycoin quickly without needing technical skills.</p>
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <section className="max-w-5xl mx-auto mb-20 text-center">
        <h2 className="text-3xl font-semibold text-green-700 mb-6">
          🗓 Roadmap
        </h2>
        <div className="bg-white p-6 rounded-2xl shadow inline-block text-left max-w-md mx-auto">
          <ul className="list-disc list-inside text-gray-700 space-y-3">
            <li><strong>Q4 2025:</strong> Official launch of Luckycoin (LUC).</li>
            <li><strong>Q1 2026:</strong> Integrate LUC reward app for stores.</li>
            <li><strong>Q2 2026:</strong> Expand network to multi-store loyalty programs.</li>
            <li><strong>Q3 2026:</strong> Launch Luckycoin Pay & gift exchange features.</li>
          </ul>
        </div>
      </section>

      {/* TEAM */}
      <section className="max-w-5xl mx-auto mb-10 text-center">
        <h2 className="text-3xl font-semibold text-green-700 mb-6">
          🧑‍💻 Team & Community
        </h2>
        <div className="grid sm:grid-cols-2 gap-6 justify-center text-gray-700">
          <div className="p-6 bg-white rounded-2xl shadow-md">
            <p className="font-bold text-lg text-green-600">🐡 Cá Nóc Mít</p>
            <p>Blockchain Dev & Vision Designer</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-md">
            <p className="font-bold text-lg text-green-600">🐱 Mèo Mập</p>
            <p>Founder & Strategic Advisor</p>
          </div>
        </div>

        <div className="mt-8 text-lg">
          <p className="text-gray-600">Join our community:</p>
          <div className="flex justify-center gap-4 mt-3">
            <a
              href=""
              target="_blank"
              className="text-green-600 hover:underline"
            >
              Telegram
            </a>
            <span>|</span>
            <a
              href=""
              target="_blank"
              className="text-green-600 hover:underline"
            >
              Twitter
            </a>
            <span>|</span>
            <a
              href=""
              target="_blank"
              className="text-green-600 hover:underline"
            >
              Discord
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-gray-500 py-6 border-t">
        © {new Date().getFullYear()} Luckycoin – Bring Luck to Every Purchase 🍀
      </footer>
    </main>
  );
}

