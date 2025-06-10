import React, { useState } from 'react';
import { Star, Heart, ShoppingCart, Eye, ArrowRight, Sparkles, Crown, Award } from 'lucide-react';
import Img1 from "../assets/furniture/pexels-joao-gustavo-rezende-15265-68389.jpg";
import Img2 from "../assets/furniture/pexels-beatriz-catroga-59599271-31561949.jpg";
import Img3 from "../assets/furniture/pexels-thatguycraig000-2306280.jpg";
import Img4 from "../assets/furniture/pexels-cottonbro-5483236.jpg";
import Img5 from "../assets/furniture/istockphoto-1453723844-612x612.jpg";
import Img6 from "../assets/furniture/pexels-mathilde-14792098.jpg";

const LuxuryFurniture = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [favorites, setFavorites] = useState(new Set());

  // بيانات المنتجات الفاخرة
  const categories = [
    { id: 'all', name: 'جميع المنتجات', icon: Crown },
    { id: 'living', name: 'غرف المعيشة', icon: Sparkles },
    { id: 'bedroom', name: 'غرف النوم', icon: Heart },
    { id: 'dining', name: 'غرف الطعام', icon: Award },
    { id: 'office', name: 'المكاتب', icon: Star },
  ];

  const products = [
    {
      id: 1,
      name: 'كنبة ملكية فاخرة',
      category: 'living',
      price: 15000,
      originalPrice: 18000,
      rating: 4.9,
      reviews: 127,
      image: Img1,
      badge: 'الأكثر مبيعاً',
      description: 'كنبة فاخرة مصنوعة من الجلد الطبيعي الإيطالي مع إطار خشبي من الماهوجني',
      features: ['جلد طبيعي إيطالي', 'إطار خشب ماهوجني', 'ضمان 5 سنوات'],
      isNew: false,
      isExclusive: true
    },
    {
      id: 2,
      name: 'سرير ملكي منحوت',
      category: 'bedroom',
      price: 22000,
      originalPrice: 25000,
      rating: 4.8,
      reviews: 89,
      image: Img2,
      badge: 'حصري',
      description: 'سرير فاخر منحوت يدوياً من خشب الورد مع تطعيمات ذهبية',
      features: ['منحوت يدوياً', 'خشب الورد الأصلي', 'تطعيمات ذهبية'],
      isNew: true,
      isExclusive: true
    },
    {
      id: 3,
      name: 'طاولة طعام كريستالية',
      category: 'dining',
      price: 12000,
      originalPrice: 14000,
      rating: 4.7,
      reviews: 156,
      image: Img3,
      badge: 'عرض خاص',
      description: 'طاولة طعام أنيقة بسطح كريستالي وقاعدة من الرخام الإيطالي',
      features: ['سطح كريستالي', 'قاعدة رخام إيطالي', 'تصميم عصري'],
      isNew: false,
      isExclusive: false
    },
    {
      id: 4,
      name: 'مكتب تنفيذي فاخر',
      category: 'office',
      price: 18000,
      originalPrice: 20000,
      rating: 4.9,
      reviews: 73,
      image: Img4,
      badge: 'تصميم حصري',
      description: 'مكتب تنفيذي فاخر من خشب الأبنوس مع تفاصيل جلدية',
      features: ['خشب الأبنوس الأصلي', 'تفاصيل جلدية', 'أدراج مخفية'],
      isNew: true,
      isExclusive: true
    },
    {
      id: 5,
      name: 'خزانة ملابس كلاسيكية',
      category: 'bedroom',
      price: 16000,
      originalPrice: 19000,
      rating: 4.6,
      reviews: 94,
      image: Img5,
      badge: 'قطعة فنية',
      description: 'خزانة ملابس كلاسيكية بتصميم فرنسي أنيق مع مرايا مطعمة',
      features: ['تصميم فرنسي', 'مرايا مطعمة', 'أرفف قابلة للتعديل'],
      isNew: false,
      isExclusive: false
    },
    {
      id: 6,
      name: 'كرسي استرخاء جلدي',
      category: 'living',
      price: 8500,
      originalPrice: 10000,
      rating: 4.8,
      reviews: 112,
      image: Img6,
      badge: 'راحة مطلقة',
      description: 'كرسي استرخاء فاخر بتقنية التدليك المدمجة وجلد طبيعي',
      features: ['تقنية التدليك', 'جلد طبيعي', 'تحكم كهربائي'],
      isNew: true,
      isExclusive: false
    }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  const toggleFavorite = (productId) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(productId)) {
      newFavorites.delete(productId);
    } else {
      newFavorites.add(productId);
    }
    setFavorites(newFavorites);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('ar-SA', {
      style: 'currency',
      currency: 'SAR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <section className="min-h-screen  py-20 px-6" dir="rtl">
      <div className="max-w-7xl mx-auto">
        
        {/* Hero Section */}
        <div className="text-center mb-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-100/20 via-orange-100/20 to-amber-100/20 rounded-3xl blur-3xl"></div>
          <div className="relative z-10">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold mb-6 shadow-lg">
              <Crown className="w-4 h-4" />
              <span>مجموعة جدة الفاخرة للأثاث</span>
              <Sparkles className="w-4 h-4" />
            </div>
            
            <h1 className="text-6xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 mb-6 leading-tight">
              أثاث فاخر
              <br />
              <span className="text-5xl md:text-3xl">يليق بذوقك الرفيع</span>
            </h1>
            
            <p className="text-xl  max-w-3xl mx-auto leading-relaxed mb-8">
              اكتشف مجموعتنا الحصرية من الأثاث الفاخر المصمم خصيصاً لتحويل مساحاتك إلى تحف فنية تعكس أناقتك وتميزك
            </p>
            

          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`group relative px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-500 transform hover:scale-110 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-2xl shadow-amber-500/30'
                    : 'bg-white/80 backdrop-blur-sm text-gray-700 border-2 border-gray-200 hover:border-amber-300 hover:shadow-xl'
                }`}
              >
                <span className="flex items-center gap-3 relative z-10">
                  <IconComponent className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                  {category.name}
                </span>
                
                {activeCategory === category.id && (
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-400 opacity-30 animate-pulse"></div>
                )}
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:scale-105 hover:-translate-y-2 overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Product Badges */}
              <div className="absolute top-4 right-4 z-20 flex flex-col gap-2">
                {product.isNew && (
                  <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    جديد
                  </span>
                )}
                {product.isExclusive && (
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    حصري
                  </span>
                )}
                <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                  {product.badge}
                </span>
              </div>

              {/* Favorite Button */}
              <button
                onClick={() => toggleFavorite(product.id)}
                className="absolute top-4 left-4 z-20 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group/fav"
              >
                <Heart 
                  className={`w-5 h-5 transition-all duration-300 group-hover/fav:scale-125 ${
                    favorites.has(product.id) 
                      ? 'text-red-500 fill-red-500' 
                      : 'text-gray-400 group-hover/fav:text-red-500'
                  }`} 
                />
              </button>

              {/* Product Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Quick Actions */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 translate-y-8 group-hover:translate-y-0 transition-transform duration-500 flex gap-2">
                 
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? 'text-amber-400 fill-amber-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">({product.reviews})</span>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-amber-600 transition-colors duration-300">
                  {product.name}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-2xl font-black text-amber-600">
                      {formatPrice(product.price)}
                    </span>
                    {product.originalPrice > product.price && (
                      <span className="text-sm text-gray-400 line-through">
                        {formatPrice(product.originalPrice)}
                      </span>
                    )}
                  </div>
                  
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-2 rounded-xl font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    التفاصيل
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl p-12 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <Crown className="w-16 h-16 mx-auto mb-6 animate-bounce" />
            <h2 className="text-4xl font-black mb-4">
              استمتع بتجربة تسوق فاخرة
            </h2>
            <p className="text-xl mb-8 opacity-90">
              احصل على استشارة مجانية من خبراء التصميم الداخلي لدينا
            </p>
            <button className="bg-white text-amber-600 px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              احجز استشارة مجانية
            </button>
          </div>
        </div>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-4xl max-h-[90vh] overflow-y-auto animate-scaleIn">
            <div className="relative">
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 left-4 z-10 w-12 h-12 bg-black text-white backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span className="text-4xl">×</span>
              </button>
              
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-64 md:h-80 object-cover"
              />
            </div>
            
            <div className="p-8">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(selectedProduct.rating)
                          ? 'text-amber-400 fill-amber-400'
                          : 'text-gray-600'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-600">({selectedProduct.reviews} تقييم)</span>
              </div>

              <h2 className="text-3xl font-black text-gray-800 mb-4">
                {selectedProduct.name}
              </h2>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {selectedProduct.description}
              </p>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">المميزات:</h3>
                <ul className="space-y-2">
                  {selectedProduct.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-600">
                      <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between border-t pt-6">
                <div className="flex flex-col">
                  <span className="text-3xl font-black text-amber-600">
                    {formatPrice(selectedProduct.price)}
                  </span>
                  {selectedProduct.originalPrice > selectedProduct.price && (
                    <span className="text-lg text-gray-400 line-through">
                      {formatPrice(selectedProduct.originalPrice)}
                    </span>
                  )}
                </div>
                
                {/*  */}
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes scaleIn {
          from { 
            opacity: 0;
            transform: scale(0.9);
          }
          to { 
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default LuxuryFurniture;