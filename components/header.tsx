import Image from "next/image"

export function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-white py-2 px-6 lg:pr-[480px] rounded-b-[40px] shadow-md">
      <div className="flex items-center gap-3 max-w-7xl">
        <Image src="/belavto-logo.svg" alt="Белавто Центр" width={100} height={50} className="h-10 w-auto" />
        <span className="text-xl font-bold text-gray-900">Белавто Центр</span>
      </div>
    </header>
  )
}
