import Image from "next/image"

export function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-white py-2 px-6 lg:pr-[480px] rounded-b-[40px] shadow-md">
      <div className="flex items-center gap-3 max-w-7xl">
        <Image src="/belavto-logo.png" alt="Белавто Центр" width={100} height={50} className="h-10 w-auto" />
        <span className="inline-block px-4 py-1.5 bg-white text-gray-900 border-2 border-gray-900 text-sm font-semibold rounded-full">Выкуп</span>
      </div>
    </header>
  )
}
