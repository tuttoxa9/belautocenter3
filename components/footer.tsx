export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-white py-12 lg:pr-[480px]">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Срочный выкуп авто</h3>
            <p className="text-white/70 leading-relaxed">Быстрый и честный выкуп автомобилей по всей Беларуси</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <p className="text-white/70 mb-2">
              <a href="tel:+375445419419" className="hover:text-primary transition-colors">
                +375 (44) 5-419-419
              </a>
            </p>
            <p className="text-white/70">Работаем ежедневно с 8:00 до 22:00</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Реквизиты</h4>
            <p className="text-white/70 text-sm leading-relaxed">
              ООО "Срочный выкуп авто"
              <br />
              УНП: 123456789
              <br />
              г. Минск, ул. Примерная, 1
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Документы</h4>
            <a href="#" className="text-white/70 hover:text-primary transition-colors block mb-2">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-white/70 hover:text-primary transition-colors block">
              Договор оферты
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/60 text-sm">
          <p>© {currentYear} Срочный выкуп авто. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}
