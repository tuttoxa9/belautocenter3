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
              <strong>Адрес офиса:</strong>
              <br />
              г. Минск, ул. Рыбалко, 13А
            </p>
            <p className="text-white/70 mb-2">
              <strong>Телефон:</strong>
              <br />
              <a href="tel:+375445419419" className="hover:text-primary transition-colors">
                +375 (44) 5-419-419
              </a>
            </p>
            <p className="text-white/70">
              <strong>Режим работы:</strong>
              <br />
              Ежедневно с 09:00 до 20:00
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Реквизиты компании</h4>
            <p className="text-white/70 text-sm leading-relaxed">
              <strong>Полное наименование:</strong>
              <br />
              ООО "УЦ ГАРД"
              <br />
              <strong>УНП:</strong> 693288947
              <br />
              <strong>Юридический адрес:</strong>
              <br />
              222823, д. Красная Нива, 7
              <br />
              <strong>Дата регистрации:</strong> 25.07.2025
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Банковские реквизиты</h4>
            <p className="text-white/70 text-sm leading-relaxed">
              <strong>Расчетный счет:</strong>
              <br />
              BY67 ALFA 3012 2H31 8000 1027 0000
              <br />
              <strong>Банк:</strong> ЗАО "Альфа-Банк"
              <br />
              <strong>БИК:</strong> ALFABY2X
              <br />
              <strong>Адрес банка:</strong>
              <br />
              г. Минск, ул. Сурганова, 43-47, 220013
            </p>
          </div>


        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/60 text-sm">
          <p>© {currentYear} Срочный выкуп авто. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}
