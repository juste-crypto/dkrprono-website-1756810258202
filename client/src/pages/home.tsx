import bannerGif from '@assets/20250902_101648_The_PSG_Show_970x250_en_1756809610720.gif';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header with Animated Logo */}
      <header className="py-6 px-4">
        <div className="container mx-auto text-center">
          <h1 
            className="text-responsive-4xl md:text-responsive-5xl font-bold logo-animation animate-gradient"
            data-testid="text-logo"
          >
            DKRPRONO
          </h1>
          <p className="text-gray-300 mt-2 text-responsive-xl animate-slide-in-up" data-testid="text-subtitle">
            Pronostics Sportifs 1xBet - Coupons Gratuits & Abonnements VIP
          </p>
        </div>
      </header>

      {/* Banner GIF */}
      <div className="container mx-auto px-4 mb-8">
        <div className="flex justify-center animate-float">
          <img 
            src={bannerGif} 
            alt="1xBet PSG Banner" 
            className="w-full max-w-4xl rounded-lg shadow-2xl animate-glow"
            data-testid="img-banner"
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-responsive-3xl md:text-responsive-4xl font-bold mb-responsive text-white animate-slide-in-up" data-testid="text-hero-title">
          🏆 Pronostics Gagnants Garantis
        </h2>
        <p className="text-responsive-xl md:text-responsive-2xl text-gray-300 mb-responsive leading-relaxed animate-slide-in-up" data-testid="text-hero-description">
          Rejoignez notre communauté de parieurs gagnants !<br />
          Nous vous offrons des coupons gratuits et des abonnements VIP<br />
          pour maximiser vos gains avec des scores exacts et paris combinés.
        </p>
        
        <div className="bg-gradient-to-r from-green-500 to-blue-600 p-1 rounded-xl inline-block">
          <div className="bg-gray-800 px-8 py-4 rounded-lg">
            <p className="text-2xl font-bold text-green-400" data-testid="text-guarantee">
              ✅ Fiable à 100% - Résultats Garantis
            </p>
          </div>
        </div>
      </section>

      {/* VIP Pricing Section */}
      <section className="container mx-auto px-4 py-responsive">
        <h3 className="text-responsive-3xl font-bold text-center mb-responsive text-white animate-slide-in-up" data-testid="text-pricing-title">
          💎 Nos Abonnements VIP
        </h3>
        
        <div className="grid md:grid-cols-3 gap-responsive max-w-6xl mx-auto">
          {/* VIP 1 */}
          <div className="bg-gray-800 vip-card-gradient rounded-xl p-responsive border-2 border-blue-500 hover:border-blue-400 transition-all duration-300 transform hover:scale-105 shadow-xl animate-slide-in-up">
            <div className="text-center">
              <h4 className="text-responsive-2xl font-bold text-blue-400 mb-responsive" data-testid="text-vip1-title">VIP 1</h4>
              <div className="text-responsive-4xl font-bold text-white mb-responsive" data-testid="text-vip1-price">25$</div>
              <p className="text-gray-300 mb-responsive" data-testid="text-vip1-period">par mois</p>
              <div className="bg-blue-500 text-white py-3 px-6 rounded-lg mb-6">
                <p className="text-xl font-semibold" data-testid="text-vip1-offer">1 Coupon par jour</p>
              </div>
              <ul className="text-gray-300 space-y-3 text-left">
                <li>• Scores exacts</li>
                <li>• Paris simples</li>
                <li>• Support WhatsApp</li>
                <li>• Envoi automatique</li>
              </ul>
            </div>
          </div>

          {/* VIP 2 - Most Popular */}
          <div className="bg-gray-800 vip-card-gradient rounded-xl p-responsive border-2 border-purple-500 hover:border-purple-400 transition-all duration-300 transform hover:scale-105 shadow-xl relative animate-slide-in-up animate-scale-up">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse">POPULAIRE</span>
            </div>
            <div className="text-center">
              <h4 className="text-responsive-2xl font-bold text-purple-400 mb-responsive" data-testid="text-vip2-title">VIP 2</h4>
              <div className="text-responsive-4xl font-bold text-white mb-responsive" data-testid="text-vip2-price">35$</div>
              <p className="text-gray-300 mb-responsive" data-testid="text-vip2-period">par mois</p>
              <div className="bg-purple-500 text-white py-3 px-6 rounded-lg mb-6">
                <p className="text-xl font-semibold" data-testid="text-vip2-offer">2 Coupons par jour</p>
              </div>
              <ul className="text-gray-300 space-y-3 text-left">
                <li>• Scores exacts</li>
                <li>• Paris combinés</li>
                <li>• Support prioritaire</li>
                <li>• Envoi automatique</li>
              </ul>
            </div>
          </div>

          {/* VIP 3 */}
          <div className="bg-gray-800 vip-card-gradient rounded-xl p-responsive border-2 border-yellow-500 hover:border-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-xl animate-slide-in-up">
            <div className="text-center">
              <h4 className="text-responsive-2xl font-bold text-yellow-400 mb-responsive" data-testid="text-vip3-title">VIP 3</h4>
              <div className="text-responsive-4xl font-bold text-white mb-responsive" data-testid="text-vip3-price">49$</div>
              <p className="text-gray-300 mb-responsive" data-testid="text-vip3-period">par mois</p>
              <div className="bg-yellow-500 text-black py-3 px-6 rounded-lg mb-6">
                <p className="text-xl font-semibold" data-testid="text-vip3-offer">4 Coupons par jour</p>
              </div>
              <ul className="text-gray-300 space-y-3 text-left">
                <li>• Scores exacts premium</li>
                <li>• Paris combinés multiples</li>
                <li>• Support VIP 24/7</li>
                <li>• Envoi automatique prioritaire</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-12 text-white" data-testid="text-features-title">
            🎯 Pourquoi Choisir DKRPRONO ?
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-6xl mb-4">📱</div>
              <h4 className="text-xl font-bold text-white mb-4">WhatsApp Automatique</h4>
              <p className="text-gray-300">Recevez vos coupons directement sur WhatsApp, automatiquement chaque jour</p>
            </div>
            
            <div className="text-center">
              <div className="text-6xl mb-4">💯</div>
              <h4 className="text-xl font-bold text-white mb-4">Fiabilité 100%</h4>
              <p className="text-gray-300">Nos pronostics sont analysés par des experts pour maximiser vos chances</p>
            </div>
            
            <div className="text-center">
              <div className="text-6xl mb-4">🆓</div>
              <h4 className="text-xl font-bold text-white mb-4">Coupons Gratuits</h4>
              <p className="text-gray-300">Essayez nos services avec des coupons gratuits avant de vous abonner</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h3 className="text-4xl font-bold mb-8 text-white" data-testid="text-cta-title">
          🚀 Prêt à Commencer à Gagner ?
        </h3>
        <p className="text-xl text-gray-300 mb-8">
          Contactez-nous maintenant pour recevoir vos premiers coupons gratuits<br />
          et choisir votre abonnement VIP !
        </p>
        
        <div className="bg-gradient-to-r from-green-500 to-blue-600 p-1 rounded-xl inline-block">
          <a 
            href="https://wa.me/639072986322" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gray-900 hover:bg-gray-800 px-8 py-4 rounded-lg text-white font-bold text-xl transition-colors duration-300 block"
            data-testid="button-whatsapp-main"
          >
            📱 Contactez-nous sur WhatsApp
          </a>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/639072986322" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 z-50 whatsapp-pulse"
        data-testid="button-whatsapp-floating"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
        </svg>
      </a>

      {/* Footer */}
      <footer className="bg-gray-800 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400 mb-4" data-testid="text-footer">
            © 2024 DKRPRONO - Pronostics Sportifs 1xBet
          </p>
          <p className="text-gray-500 text-sm">
            Les paris comportent des risques. Jouez de manière responsable.
          </p>
        </div>
      </footer>
    </div>
  );
}
