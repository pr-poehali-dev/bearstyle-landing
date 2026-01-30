import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Icon from '@/components/ui/icon';

const heroSlides = [
  {
    image: 'https://cdn.poehali.dev/projects/b977ae30-8b22-4b8d-8ef6-be415aeffd5d/files/8aefe726-f9e5-4074-8b8d-eb9667fb6792.jpg',
    title: 'Мощный стайлинг для сильного образа',
    subtitle: 'Профессиональные средства для создания безупречных укладок'
  },
  {
    image: 'https://cdn.poehali.dev/projects/b977ae30-8b22-4b8d-8ef6-be415aeffd5d/files/a1170e69-01e4-4d23-bc60-37f8bca11524.jpg',
    title: 'Профессиональные средства для барберов',
    subtitle: 'Премиальная косметика, проверенная тысячами мастеров'
  },
  {
    image: 'https://cdn.poehali.dev/projects/b977ae30-8b22-4b8d-8ef6-be415aeffd5d/files/a9e7c183-3f61-49b6-919e-545a77974d17.jpg',
    title: 'Надежный партнер для вашего бизнеса',
    subtitle: 'Оптовые поставки с гарантией качества'
  }
];

const products = [
  {
    category: 'Помада для волос',
    name: 'Помада "Медвежья хватка"',
    description: 'Сильная фиксация с естественным блеском',
    image: 'https://cdn.poehali.dev/projects/b977ae30-8b22-4b8d-8ef6-be415aeffd5d/files/a1170e69-01e4-4d23-bc60-37f8bca11524.jpg'
  },
  {
    category: 'Помада для волос',
    name: 'Помада "Дикая природа"',
    description: 'Матовый финиш, гибкая фиксация',
    image: 'https://cdn.poehali.dev/projects/b977ae30-8b22-4b8d-8ef6-be415aeffd5d/files/a1170e69-01e4-4d23-bc60-37f8bca11524.jpg'
  },
  {
    category: 'Помада для волос',
    name: 'Помада "Северный ветер"',
    description: 'Легкая текстура для естественных укладок',
    image: 'https://cdn.poehali.dev/projects/b977ae30-8b22-4b8d-8ef6-be415aeffd5d/files/a1170e69-01e4-4d23-bc60-37f8bca11524.jpg'
  },
  {
    category: 'Паста для волос',
    name: 'Паста "Таежная сила"',
    description: 'Максимальная фиксация, матовый эффект',
    image: 'https://cdn.poehali.dev/projects/b977ae30-8b22-4b8d-8ef6-be415aeffd5d/files/a1170e69-01e4-4d23-bc60-37f8bca11524.jpg'
  },
  {
    category: 'Паста для волос',
    name: 'Паста "Гранитная основа"',
    description: 'Долговременная укладка с текстурой',
    image: 'https://cdn.poehali.dev/projects/b977ae30-8b22-4b8d-8ef6-be415aeffd5d/files/a1170e69-01e4-4d23-bc60-37f8bca11524.jpg'
  },
  {
    category: 'Паста для волос',
    name: 'Паста "Стальная воля"',
    description: 'Профессиональная укладка на весь день',
    image: 'https://cdn.poehali.dev/projects/b977ae30-8b22-4b8d-8ef6-be415aeffd5d/files/a1170e69-01e4-4d23-bc60-37f8bca11524.jpg'
  },
  {
    category: 'Воск для волос',
    name: 'Воск "Гранитная фиксация"',
    description: 'Экстремальная фиксация для сложных укладок',
    image: 'https://cdn.poehali.dev/projects/b977ae30-8b22-4b8d-8ef6-be415aeffd5d/files/a1170e69-01e4-4d23-bc60-37f8bca11524.jpg'
  },
  {
    category: 'Воск для волос',
    name: 'Воск "Дубовая прочность"',
    description: 'Натуральный состав, сильная фиксация',
    image: 'https://cdn.poehali.dev/projects/b977ae30-8b22-4b8d-8ef6-be415aeffd5d/files/a1170e69-01e4-4d23-bc60-37f8bca11524.jpg'
  },
  {
    category: 'Воск для волос',
    name: 'Воск "Железная хватка"',
    description: 'Премиальная фиксация с блеском',
    image: 'https://cdn.poehali.dev/projects/b977ae30-8b22-4b8d-8ef6-be415aeffd5d/files/a1170e69-01e4-4d23-bc60-37f8bca11524.jpg'
  }
];

const advantages = [
  {
    icon: 'Award',
    title: 'Сертификаты качества',
    description: 'Соответствие международным стандартам'
  },
  {
    icon: 'Users',
    title: 'Работа с салонами',
    description: 'Более 500 барбершопов по всей России'
  },
  {
    icon: 'Flask',
    title: 'Профессиональные формулы',
    description: 'Разработано с ведущими барберами'
  },
  {
    icon: 'Truck',
    title: 'Быстрая доставка',
    description: 'Отгрузка оптовых партий за 24 часа'
  }
];

export default function Index() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderFixed(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isHeaderFixed ? 'bg-background/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-3xl font-heading font-bold text-primary cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            BearStyle
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-sm font-medium hover:text-primary transition-colors cursor-pointer">Главная</a>
            <a onClick={() => scrollToSection('advantages')} className="text-sm font-medium hover:text-primary transition-colors cursor-pointer">Преимущества</a>
            <a onClick={() => scrollToSection('products')} className="text-sm font-medium hover:text-primary transition-colors cursor-pointer">Продукция</a>
            <a onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-primary transition-colors cursor-pointer">О нас</a>
            <a onClick={() => scrollToSection('contacts')} className="text-sm font-medium hover:text-primary transition-colors cursor-pointer">Контакты</a>
          </nav>

          <Button className="bg-primary hover:bg-primary/90 text-white font-medium">
            Оптовый запрос
          </Button>
        </div>
      </header>

      <section className="relative h-screen w-full overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <div className="absolute inset-0 bg-black/60 z-10" />
            <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 z-20 flex items-center justify-center">
              <div className="text-center max-w-4xl px-6 animate-fade-in">
                <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 mb-8">
                  {slide.subtitle}
                </p>
                <div className="flex gap-4 justify-center">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-medium px-8">
                    Скачать каталог
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-background font-medium px-8">
                    Узнать условия
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-primary w-8' : 'bg-white/50'}`}
            />
          ))}
        </div>

        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all"
        >
          <Icon name="ChevronLeft" size={24} />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all"
        >
          <Icon name="ChevronRight" size={24} />
        </button>
      </section>

      <section id="advantages" className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-16">
            Почему BearStyle выбирают профессионалы?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
                  <Icon name={advantage.icon as any} size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2">{advantage.title}</h3>
                <p className="text-muted-foreground">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-16">
            Наша продукция
          </h2>
          <Carousel className="w-full max-w-6xl mx-auto">
            <CarouselContent>
              {products.map((product, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="bg-card border-border overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className="aspect-square overflow-hidden">
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                    </div>
                    <div className="p-6">
                      <p className="text-xs text-primary uppercase tracking-wide mb-2">{product.category}</p>
                      <h3 className="text-xl font-heading font-semibold mb-2">{product.name}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
                      <Button variant="outline" className="w-full">
                        Подробнее
                      </Button>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>
      </section>

      <section id="about" className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                BearStyle — это не просто косметика
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                Мы создаем профессиональные средства для стайлинга, которые помогают барберам реализовывать самые смелые идеи. Наша продукция разработана совместно с ведущими мастерами индустрии и протестирована в реальных условиях барбершопов.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                За 5 лет работы мы стали надежным партнером для более чем 500 салонов по всей России. Наша миссия — обеспечить профессионалов инструментами, которые делают их работу проще, а результат — впечатляющим.
              </p>
              <p className="text-lg text-muted-foreground">
                Все продукты BearStyle имеют необходимые сертификаты качества и соответствуют международным стандартам безопасности.
              </p>
            </div>
            <div className="relative h-96 md:h-full">
              <img 
                src="https://cdn.poehali.dev/projects/b977ae30-8b22-4b8d-8ef6-be415aeffd5d/files/a9e7c183-3f61-49b6-919e-545a77974d17.jpg" 
                alt="О бренде BearStyle" 
                className="w-full h-full object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-16">
            Готовы к сотрудничеству?
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-heading font-semibold mb-6">Контактная информация</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="Phone" size={24} className="text-primary mt-1" />
                  <div>
                    <p className="font-medium">Телефон</p>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Mail" size={24} className="text-primary mt-1" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">info@bearstyle.ru</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" size={24} className="text-primary mt-1" />
                  <div>
                    <p className="font-medium">Адрес</p>
                    <p className="text-muted-foreground">г. Москва, ул. Барберская, д. 15</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Clock" size={24} className="text-primary mt-1" />
                  <div>
                    <p className="font-medium">Режим работы</p>
                    <p className="text-muted-foreground">Пн-Пт: 9:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-heading font-semibold mb-6">Форма обратной связи</h3>
              <form className="space-y-4">
                <Input placeholder="Имя" className="bg-card" />
                <Input placeholder="Компания" className="bg-card" />
                <Input placeholder="Email" type="email" className="bg-card" />
                <Input placeholder="Телефон" type="tel" className="bg-card" />
                <Textarea placeholder="Сообщение" rows={4} className="bg-card" />
                <div className="flex items-center gap-2">
                  <Checkbox id="terms" />
                  <label htmlFor="terms" className="text-sm text-muted-foreground cursor-pointer">
                    Согласен с обработкой персональных данных
                  </label>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white font-medium">
                  Отправить запрос
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-card py-12 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-3xl font-heading font-bold text-primary mb-4">BearStyle</div>
              <p className="text-muted-foreground text-sm">
                Профессиональная косметика для барберов и салонов
              </p>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Навигация</h4>
              <nav className="flex flex-col gap-2">
                <a className="text-muted-foreground hover:text-primary transition-colors cursor-pointer text-sm">Главная</a>
                <a className="text-muted-foreground hover:text-primary transition-colors cursor-pointer text-sm">Преимущества</a>
                <a className="text-muted-foreground hover:text-primary transition-colors cursor-pointer text-sm">Продукция</a>
                <a className="text-muted-foreground hover:text-primary transition-colors cursor-pointer text-sm">О нас</a>
              </nav>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Контакты</h4>
              <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                <p>+7 (495) 123-45-67</p>
                <p>info@bearstyle.ru</p>
                <p>г. Москва</p>
              </div>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Социальные сети</h4>
              <div className="flex gap-4">
                <a className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors cursor-pointer">
                  <Icon name="Instagram" size={20} className="text-primary" />
                </a>
                <a className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors cursor-pointer">
                  <Icon name="Facebook" size={20} className="text-primary" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            © 2024 BearStyle. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}
