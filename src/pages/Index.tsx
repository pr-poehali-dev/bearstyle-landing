import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

const heroSlides = [
  {
    image: 'https://source.unsplash.com/1920x1080/?barbershop,man,hairstyle',
    title: 'Стиль для настоящих мужчин',
    subtitle: 'Профессиональная косметика для барберов'
  },
  {
    image: 'https://source.unsplash.com/1920x1080/?hair,styling,man',
    title: 'Безупречная укладка',
    subtitle: 'Премиальные средства для идеального образа'
  },
  {
    image: 'https://source.unsplash.com/1920x1080/?cosmetic,product,luxury',
    title: 'Качество проверенное временем',
    subtitle: 'Оптовые поставки по всей России'
  }
];

const products = [
  {
    category: 'Помада для волос',
    name: 'Медвежья хватка',
    description: 'Сильная фиксация с естественным блеском на весь день',
    image: 'https://source.unsplash.com/400x400/?cosmetic,jar',
    volume: '100 мл'
  },
  {
    category: 'Помада для волос',
    name: 'Дикая природа',
    description: 'Матовый финиш и гибкая фиксация для свободного стиля',
    image: 'https://source.unsplash.com/400x400/?cosmetic,container',
    volume: '100 мл'
  },
  {
    category: 'Помада для волос',
    name: 'Северный ветер',
    description: 'Легкая текстура для естественных укладок',
    image: 'https://source.unsplash.com/400x400/?cosmetic,bottle',
    volume: '80 мл'
  },
  {
    category: 'Паста для волос',
    name: 'Таежная сила',
    description: 'Максимальная фиксация с матовым эффектом',
    image: 'https://source.unsplash.com/400x400/?cosmetic,tin',
    volume: '100 мл'
  },
  {
    category: 'Паста для волос',
    name: 'Гранитная основа',
    description: 'Долговременная укладка с текстурирующим эффектом',
    image: 'https://source.unsplash.com/400x400/?product,jar',
    volume: '100 мл'
  },
  {
    category: 'Паста для волос',
    name: 'Стальная воля',
    description: 'Профессиональная укладка для сложных причесок',
    image: 'https://source.unsplash.com/400x400/?cosmetic,package',
    volume: '80 мл'
  },
  {
    category: 'Воск для волос',
    name: 'Гранитная фиксация',
    description: 'Экстремальная фиксация для креативных укладок',
    image: 'https://source.unsplash.com/400x400/?cosmetic,wax',
    volume: '75 мл'
  },
  {
    category: 'Воск для волос',
    name: 'Дубовая прочность',
    description: 'Натуральный состав, сильная и надежная фиксация',
    image: 'https://source.unsplash.com/400x400/?organic,cosmetic',
    volume: '75 мл'
  },
  {
    category: 'Воск для волос',
    name: 'Железная хватка',
    description: 'Премиальная фиксация с естественным блеском',
    image: 'https://source.unsplash.com/400x400/?luxury,cosmetic',
    volume: '75 мл'
  }
];

const advantages = [
  {
    icon: 'Award',
    title: 'Сертификаты качества',
    description: 'Вся продукция соответствует международным стандартам и имеет необходимые сертификаты'
  },
  {
    icon: 'Users',
    title: 'Более 500 барбершопов',
    description: 'Профессиональные мастера по всей России доверяют нашему бренду'
  },
  {
    icon: 'Flask',
    title: 'Профессиональные формулы',
    description: 'Разработано совместно с ведущими барберами и технологами индустрии'
  },
  {
    icon: 'Truck',
    title: 'Быстрая доставка',
    description: 'Отгрузка оптовых партий по всей России в течение 24 часов'
  }
];

export default function Index() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const [isPriceModalOpen, setIsPriceModalOpen] = useState(false);
  const { toast } = useToast();

  const [priceFormData, setPriceFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
    terms: false
  });

  const [contactFormData, setContactFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
    terms: false
  });

  const handlePriceSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!priceFormData.terms) {
      toast({
        title: 'Ошибка',
        description: 'Необходимо согласие на обработку персональных данных',
        variant: 'destructive'
      });
      return;
    }
    toast({
      title: 'Запрос отправлен!',
      description: 'Мы свяжемся с вами в ближайшее время для обсуждения условий сотрудничества'
    });
    setPriceFormData({ name: '', company: '', email: '', phone: '', message: '', terms: false });
    setIsPriceModalOpen(false);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactFormData.terms) {
      toast({
        title: 'Ошибка',
        description: 'Необходимо согласие на обработку персональных данных',
        variant: 'destructive'
      });
      return;
    }
    toast({
      title: 'Сообщение отправлено!',
      description: 'Спасибо за ваш запрос. Наш менеджер свяжется с вами в ближайшее время'
    });
    setContactFormData({ name: '', company: '', email: '', phone: '', message: '', terms: false });
  };

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
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isHeaderFixed ? 'bg-background/95 backdrop-blur-md shadow-2xl' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-5 flex items-center justify-between">
          <div className="text-3xl font-heading font-bold text-primary cursor-pointer tracking-tight" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            🐻 BEARSTYLE
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-sm font-medium hover:text-primary transition-colors cursor-pointer">Главная</a>
            <a onClick={() => scrollToSection('advantages')} className="text-sm font-medium hover:text-primary transition-colors cursor-pointer">Преимущества</a>
            <a onClick={() => scrollToSection('products')} className="text-sm font-medium hover:text-primary transition-colors cursor-pointer">Продукция</a>
            <a onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-primary transition-colors cursor-pointer">О бренде</a>
            <a onClick={() => scrollToSection('contacts')} className="text-sm font-medium hover:text-primary transition-colors cursor-pointer">Контакты</a>
          </nav>

          <Dialog open={isPriceModalOpen} onOpenChange={setIsPriceModalOpen}>
            <DialogTrigger asChild>
              <Button className="bg-primary hover:bg-primary/90 text-white font-semibold shadow-lg">
                Запрос прайса
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px] bg-card border-border">
              <DialogHeader>
                <DialogTitle className="text-2xl font-heading font-bold">Запрос оптового прайс-листа</DialogTitle>
                <DialogDescription className="text-muted-foreground">
                  Заполните форму, и мы отправим вам актуальный прайс-лист и условия сотрудничества
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handlePriceSubmit} className="space-y-4 mt-4">
                <div>
                  <Input 
                    placeholder="Ваше имя" 
                    value={priceFormData.name}
                    onChange={(e) => setPriceFormData({...priceFormData, name: e.target.value})}
                    className="bg-background border-border h-11" 
                    required
                  />
                </div>
                <div>
                  <Input 
                    placeholder="Название компании" 
                    value={priceFormData.company}
                    onChange={(e) => setPriceFormData({...priceFormData, company: e.target.value})}
                    className="bg-background border-border h-11" 
                    required
                  />
                </div>
                <div>
                  <Input 
                    placeholder="Email" 
                    type="email"
                    value={priceFormData.email}
                    onChange={(e) => setPriceFormData({...priceFormData, email: e.target.value})}
                    className="bg-background border-border h-11" 
                    required
                  />
                </div>
                <div>
                  <Input 
                    placeholder="Телефон" 
                    type="tel"
                    value={priceFormData.phone}
                    onChange={(e) => setPriceFormData({...priceFormData, phone: e.target.value})}
                    className="bg-background border-border h-11" 
                    required
                  />
                </div>
                <div>
                  <Textarea 
                    placeholder="Дополнительная информация (опционально)" 
                    value={priceFormData.message}
                    onChange={(e) => setPriceFormData({...priceFormData, message: e.target.value})}
                    rows={3} 
                    className="bg-background border-border resize-none" 
                  />
                </div>
                <div className="flex items-start gap-3">
                  <Checkbox 
                    id="price-terms" 
                    checked={priceFormData.terms}
                    onCheckedChange={(checked) => setPriceFormData({...priceFormData, terms: checked as boolean})}
                  />
                  <label htmlFor="price-terms" className="text-sm text-muted-foreground cursor-pointer leading-relaxed">
                    Согласен с обработкой персональных данных
                  </label>
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-semibold h-11">
                  Отправить запрос
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </header>

      <section className="relative h-screen w-full overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 z-10" />
            <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 z-20 flex items-center justify-center">
              <div className="text-center max-w-5xl px-6">
                <h1 className="text-6xl md:text-8xl font-heading font-bold text-white mb-6 tracking-tight leading-tight animate-fade-in">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-3xl text-gray-300 mb-10 font-light animate-fade-in">
                  {slide.subtitle}
                </p>
                <div className="flex flex-col md:flex-row gap-4 justify-center animate-scale-in">
                  <Button size="lg" onClick={() => setIsPriceModalOpen(true)} className="bg-primary hover:bg-primary/90 text-white font-semibold px-10 py-6 text-lg shadow-2xl">
                    Скачать каталог
                  </Button>
                  <Button size="lg" onClick={() => scrollToSection('contacts')} variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-background font-semibold px-10 py-6 text-lg">
                    Стать партнером
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex gap-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-primary w-12' : 'bg-white/50 w-8'}`}
            />
          ))}
        </div>

        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
          className="absolute left-8 top-1/2 transform -translate-y-1/2 z-30 bg-white/10 hover:bg-primary/90 text-white p-4 rounded-full transition-all backdrop-blur-sm"
        >
          <Icon name="ChevronLeft" size={28} />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
          className="absolute right-8 top-1/2 transform -translate-y-1/2 z-30 bg-white/10 hover:bg-primary/90 text-white p-4 rounded-full transition-all backdrop-blur-sm"
        >
          <Icon name="ChevronRight" size={28} />
        </button>
      </section>

      <section id="advantages" className="py-32 bg-card relative">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url(https://source.unsplash.com/1920x1080/?texture,dark)', backgroundSize: 'cover' }} />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              Почему выбирают BearStyle?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Мы предлагаем не просто косметику — это инструменты для создания безупречного стиля
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <Card key={index} className="bg-background border-border p-8 text-center hover:border-primary transition-all duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="w-20 h-20 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name={advantage.icon as any} size={40} className="text-primary" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-3">{advantage.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{advantage.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="py-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              Наша продукция
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Три линейки профессиональных средств для любых задач стайлинга
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="bg-card border-border overflow-hidden hover:shadow-2xl hover:border-primary transition-all duration-300 group">
                <div className="aspect-square overflow-hidden bg-muted">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-primary uppercase tracking-widest font-semibold">{product.category}</span>
                    <span className="text-xs text-muted-foreground">{product.volume}</span>
                  </div>
                  <h3 className="text-2xl font-heading font-bold mb-3">{product.name}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{product.description}</p>
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                    Подробнее
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-32 bg-card relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <span className="text-primary text-sm uppercase tracking-widest font-semibold mb-4 block">О бренде</span>
              <h2 className="text-5xl md:text-6xl font-heading font-bold mb-8 leading-tight">
                BearStyle — это философия стиля
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Мы создаем профессиональные средства для стайлинга, которые помогают барберам воплощать самые смелые идеи. Каждый продукт разработан совместно с ведущими мастерами индустрии и протестирован в реальных условиях барбершопов.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                За 5 лет работы мы стали надежным партнером для более чем 500 салонов по всей России. Наша миссия — обеспечить профессионалов инструментами, которые делают их работу проще, а результат — впечатляющим.
              </p>
              <div className="grid grid-cols-3 gap-8 mt-10">
                <div>
                  <div className="text-4xl font-heading font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Барбершопов</div>
                </div>
                <div>
                  <div className="text-4xl font-heading font-bold text-primary mb-2">5 лет</div>
                  <div className="text-sm text-muted-foreground">На рынке</div>
                </div>
                <div>
                  <div className="text-4xl font-heading font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Качество</div>
                </div>
              </div>
            </div>
            <div className="relative h-[600px] order-1 md:order-2">
              <img 
                src="https://source.unsplash.com/800x1000/?barber,work,man" 
                alt="BearStyle профессиональная косметика" 
                className="w-full h-full object-cover rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url(https://source.unsplash.com/1920x1080/?dark,pattern)', backgroundSize: 'cover' }} />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              Станьте партнером
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Заполните форму, и мы свяжемся с вами для обсуждения условий сотрудничества
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <div>
              <h3 className="text-3xl font-heading font-bold mb-8">Контактная информация</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Телефон</p>
                    <p className="text-muted-foreground text-lg">+7 (495) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <p className="text-muted-foreground text-lg">info@bearstyle.ru</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Адрес</p>
                    <p className="text-muted-foreground text-lg">г. Москва, ул. Барберская, д. 15, офис 301</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Режим работы</p>
                    <p className="text-muted-foreground text-lg">Пн-Пт: 9:00 - 18:00<br />Сб-Вс: выходной</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-card border-border p-8">
              <h3 className="text-3xl font-heading font-bold mb-8">Форма обратной связи</h3>
              <form onSubmit={handleContactSubmit} className="space-y-5">
                <div>
                  <Input 
                    placeholder="Ваше имя" 
                    value={contactFormData.name}
                    onChange={(e) => setContactFormData({...contactFormData, name: e.target.value})}
                    className="bg-background border-border h-12" 
                    required
                  />
                </div>
                <div>
                  <Input 
                    placeholder="Название компании" 
                    value={contactFormData.company}
                    onChange={(e) => setContactFormData({...contactFormData, company: e.target.value})}
                    className="bg-background border-border h-12" 
                    required
                  />
                </div>
                <div>
                  <Input 
                    placeholder="Email" 
                    type="email"
                    value={contactFormData.email}
                    onChange={(e) => setContactFormData({...contactFormData, email: e.target.value})}
                    className="bg-background border-border h-12" 
                    required
                  />
                </div>
                <div>
                  <Input 
                    placeholder="Телефон" 
                    type="tel"
                    value={contactFormData.phone}
                    onChange={(e) => setContactFormData({...contactFormData, phone: e.target.value})}
                    className="bg-background border-border h-12" 
                    required
                  />
                </div>
                <div>
                  <Textarea 
                    placeholder="Ваше сообщение" 
                    value={contactFormData.message}
                    onChange={(e) => setContactFormData({...contactFormData, message: e.target.value})}
                    rows={5} 
                    className="bg-background border-border resize-none" 
                    required
                  />
                </div>
                <div className="flex items-start gap-3">
                  <Checkbox 
                    id="contact-terms" 
                    checked={contactFormData.terms}
                    onCheckedChange={(checked) => setContactFormData({...contactFormData, terms: checked as boolean})}
                  />
                  <label htmlFor="contact-terms" className="text-sm text-muted-foreground cursor-pointer leading-relaxed">
                    Согласен с обработкой персональных данных и условиями политики конфиденциальности
                  </label>
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-semibold h-12 text-base shadow-lg">
                  Отправить запрос
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-background py-16 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="text-3xl font-heading font-bold text-primary mb-4">🐻 BEARSTYLE</div>
              <p className="text-muted-foreground leading-relaxed">
                Профессиональная косметика для барберов и салонов красоты
              </p>
            </div>
            <div>
              <h4 className="font-heading font-bold mb-4 text-lg">Навигация</h4>
              <nav className="flex flex-col gap-3">
                <a className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">Главная</a>
                <a className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">Преимущества</a>
                <a className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">Продукция</a>
                <a className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">О бренде</a>
              </nav>
            </div>
            <div>
              <h4 className="font-heading font-bold mb-4 text-lg">Контакты</h4>
              <div className="flex flex-col gap-3 text-muted-foreground">
                <p>+7 (495) 123-45-67</p>
                <p>info@bearstyle.ru</p>
                <p>г. Москва, ул. Барберская, 15</p>
              </div>
            </div>
            <div>
              <h4 className="font-heading font-bold mb-4 text-lg">Социальные сети</h4>
              <div className="flex gap-4">
                <a className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary transition-all cursor-pointer group">
                  <Icon name="Instagram" size={22} className="text-primary group-hover:text-white transition-colors" />
                </a>
                <a className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary transition-all cursor-pointer group">
                  <Icon name="Facebook" size={22} className="text-primary group-hover:text-white transition-colors" />
                </a>
                <a className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary transition-all cursor-pointer group">
                  <Icon name="Send" size={22} className="text-primary group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">© 2024 BearStyle. Все права защищены.</p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a className="hover:text-primary transition-colors cursor-pointer">Политика конфиденциальности</a>
              <a className="hover:text-primary transition-colors cursor-pointer">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}