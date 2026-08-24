export default function Home() {
  return (
    <main className="min-h-screen bg-[#eaf8ff] text-[#0d53d7]">
{/* TOP WINDOW BAR */}
<div className="aero-windowbar flex h-10 items-center justify-between px-3 text-white">
  <div className="flex items-center gap-2 text-sm font-bold">
    <span>🍃</span>
    <span>welcome to AeroPal ✧</span>
  </div>

  <div className="flex h-full items-center gap-1">
    <button className="vista-control">—</button>
    <button className="vista-control">□</button>
    <button className="vista-control vista-close">✕</button>
  </div>
      </div>

      {/* NAVIGATION */}
      <header className="aero-glass relative z-20 border-x-0 border-t-0">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">

          <nav className="flex gap-10 text-sm font-bold">
            <a href="#">HOME</a>
            <a href="#shop">SHOP</a>
            <a href="#">ABOUT</a>
            <a href="#">FAQ</a>
            <a href="#">SHIPPING</a>
            <a href="#">CONTACT</a>
          </nav>

          <div className="flex items-center gap-6 text-2xl">
            <span>⌕</span>
            <span>♡</span>
            <span>🛍</span>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section
        className="relative min-h-[760px] overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/aeropal-hero.png')",
        }}
      >
        <div className="absolute inset-0 bg-white/10" />

        <div className="relative z-10 mx-auto grid min-h-[760px] max-w-7xl grid-cols-1 gap-12 px-8 py-16 lg:grid-cols-[1.15fr_.85fr]">

          {/* LEFT SIDE */}
          <div className="flex flex-col justify-center">

            <p className="mb-5 text-xs font-bold tracking-[0.35em] text-blue-700">
              ✦ WELCOME TO OUR LITTLE INTERNET ✦
            </p>

            <h1 className="aero-title text-7xl md:text-8xl">
              AeroPal
            </h1>

            <p className="mt-6 text-lg font-bold tracking-wide">
              ✧ collect nostalgia. carry the aero. ✧
            </p>

            <a
              href="#shop"
              className="aero-button mt-8 w-fit rounded-2xl px-8 py-4 font-bold"
            >
              shop the collection › 🫧
            </a>

            <div className="aero-glass mt-10 max-w-md rounded-3xl p-7">
              <h2 className="text-lg font-bold">
                welcome to AeroPal ♡
              </h2>

              <p className="mt-4 text-sm leading-7">
                a little corner of the internet
                <br />
                where the past feels like tomorrow.
                <br />
                frutiger aero inspired treasures
                <br />
                for your everyday.
              </p>

              <p className="mt-5 text-sm font-bold">
                ✨ new drops every week!
              </p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center justify-center">

            <div className="aero-glass w-full max-w-md overflow-hidden rounded-2xl">

              <div className="flex items-center justify-between bg-gradient-to-r from-[#4aa3ef] to-[#8bd7ff] px-5 py-3 text-white">
                <span className="font-bold">♫ AeroPal Playlist</span>
                <span>— □ ✕</span>
              </div>

              <div className="p-5">

                <div className="rounded-xl bg-white/80 p-4">
                  <p className="text-xs">now playing</p>
                  <p className="mt-1 font-bold">aqua skies.mp3</p>
                </div>

                <div className="mt-5 space-y-2 text-sm">
                  <div className="rounded-lg bg-white/60 p-3">♫ aqua skies.mp3</div>
                  <div className="rounded-lg bg-white/40 p-3">♫ digital garden.mp3</div>
                  <div className="rounded-lg bg-white/40 p-3">♫ glass ocean.mp3</div>
                  <div className="rounded-lg bg-white/40 p-3">♫ dreaming wave.mp3</div>
                  <div className="rounded-lg bg-white/40 p-3">♫ internet memories.mp3</div>
                </div>

                <div className="mt-6 flex items-center justify-center gap-8 text-2xl">
                  <button>◀</button>
                  <button>▶</button>
                  <button>▶▶</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FEATURE STRIP */}
      <section className="-mt-10 relative z-20 mx-auto max-w-6xl px-8">
        <div className="aero-glass grid grid-cols-2 gap-6 rounded-3xl p-7 md:grid-cols-4">

          <div className="text-center">
            <div className="text-3xl">🌐</div>
            <p className="mt-2 font-bold">worldwide shipping</p>
          </div>

          <div className="text-center">
            <div className="text-3xl">🐬</div>
            <p className="mt-2 font-bold">curated with love</p>
          </div>

          <div className="text-center">
            <div className="text-3xl">🫧</div>
            <p className="mt-2 font-bold">nostalgic aero vibes</p>
          </div>

          <div className="text-center">
            <div className="text-3xl">🔒</div>
            <p className="mt-2 font-bold">safe & secure checkout</p>
          </div>

        </div>
      </section>

      {/* PRODUCT SECTION PLACEHOLDER */}
      <section id="shop" className="mx-auto max-w-7xl px-8 py-20">

        <div className="mb-10">
          <h2 className="aero-title text-4xl">✦ aero picks ✦</h2>
          <p className="mt-2 text-sm font-bold">
            tiny treasures from another internet
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          {["AeroPal Keyring", "Aqua Trinket Tray", "Aero Sticker Pack", "AeroPal Desktop Toy"].map((name) => (
            <div key={name} className="aero-glass rounded-3xl p-4">
              <div className="aspect-square rounded-2xl bg-white/60" />
              <h3 className="mt-4 font-bold">{name}</h3>
              <button className="aero-button mt-4 w-full rounded-xl py-2 font-bold">
                view
              </button>
            </div>
          ))}
        </div>

      </section>
    </main>
  );
}