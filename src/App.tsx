import { useState } from 'react'
import './App.css'
import { articleCopy, orderConfig, product } from './config/product'

function App() {
  const [isFaqOpen, setIsFaqOpen] = useState<number | null>(0)

  const scrollToSection = (id: string) => {
    const target = document.getElementById(id)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="page-shell" dir="rtl">
      <header className="topbar">
        <div className="container topbar-inner">
          <div className="brand-block" aria-label="Relaxia logo">
            <img src={product.logo} alt={product.logoAlt} className="brand-logo" />
          </div>
          <span className="sponsored-badge">{articleCopy.sponsoredLabel}</span>
        </div>
      </header>

      <main className="article-page">
        <section className="hero-section">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">{articleCopy.heroEyebrow}</div>
              <h1>موش كل وجيعة في الظهر لازمك تتعايش معاها!</h1>
              <p className="hero-subtitle">
                القعدة الطويلة، الخدمة، والتنقّل ينجموا يخلّيو الراحة أصعب. اكتشف معلومات تنجّم تعاونك تفهم وجيعة ظهرك وتختار روتين عناية يناسبك.
              </p>
              <div className="hero-meta">
                <span>{articleCopy.readTime}</span>
                <span className="dot" aria-hidden="true" />
                <span>5 دقائق قراءة</span>
              </div>
              <button className="primary-cta" type="button" onClick={() => scrollToSection('product-section')}>
                اكتشف أكثر
              </button>
            </div>
            <div className="hero-visual">
              <img src={product.heroImage} alt="رجل تونسي يجلس ويضع يده على الظهر" className="hero-image" />
            </div>
          </div>
        </section>

        <div className="content-wrap container">
          <article className="story-card">
            <section className="article-block">
              <span className="section-number">01</span>
              <h2>كي تولّي حتى القعدة والراحة موش كيف قبل</h2>
              <p>
                كل يوم، من الصباح إلى الليل، كثر من الناس ينقضّو في نفس الروتين: قعدة في المكتب، كثر التّلفون، خدمة، ثم العودة للمنزل واسترسال في نفس الوضعية. ونتيجة لهذا الروتين، يبدّل الجسم يبان عليه في الظهر، وخاصة في المنطقة السفلى. حتى تخلّص من الهدوء والراحة، ما عادش ممكن تندّم على كل حركة قليلة.
              </p>
              <p>
                كاين من الناس يضطرّ ينهض ببطء، ويقلي: «موش عادي هكا». يلاحظوا أن الاستلقاء، الجلوس، أو الوقوف من غير حركة وقت طويل يخلّي الوخز يخرج من جديد. في بعض الأحيان، الوجع ما يتوقفش عند الظهر، بل يبان حتى في الساق، ويدخل في الروتين اليومي بطريقة مستفزة.
              </p>
              <p>
                هذا النوع من الوضعيات شائع، وموش لازم نعتبره عادي أو نستهين به. المهم هو التّفهم: إذا الراحة ما رجعتش، فالأمر يستحقّ وقفة، ولو بسيطة، لتقييم الروتين والبحث عن حلول مناسبة.
              </p>
            </section>

            <section className="article-block article-block--split">
              <div>
                <span className="section-number">02</span>
                <h2>علاش وجيعة الظهر تنجّم تمتدّ للساق؟</h2>
              </div>
              <div className="explain-panel">
                <p>
                  وجيعة الظهر ماشي دايم نفس الشيء. عند بعض الناس، الإحساس بالانزعاج يبان مباشرة في الظهر، وعند آخرين يمكن أن يمتدّ نحو الساق. في بعض الحالات، هذا مرتبط باحتمال تحسّس أو تهيّج nerves أو ما يُعرف بـ«عرق النسا» أو irritation of the sciatic nerve في بعض الفهم العام.
                </p>
                <p>
                  لكن لازم نذكر: الأعراض وحدها ما تسمحش بتأكيد التشخيص. وقد تكون الأسباب مختلفة بين الوضعية، التوتر، النشاط البدني، أو غيرها. إذا الوخز مستمرّ، يزداد، أو يصاحبه علامات مثل ضعف في القدم، حرارة، أو صعوبة في الحركة، من الأحسن مراجعة مختصّ صحي لتقييم مناسب.
                </p>
              </div>
              <img src={product.nerveIllustration} alt="توضيح مبسط لمسار العصب" className="nerve-illustration" />
            </section>

            <section className="article-block">
              <span className="section-number">03</span>
              <h2>كيفاش تختار روتين عناية يناسبك؟</h2>
              <div className="care-grid">
                <div className="care-card">
                  <h3>1. استراحة قصيرة</h3>
                  <p>فواصل قصيرة من القعدة الطويلة قد تعطي الظهر فرصة للراحة وتخفف من التوتر.</p>
                </div>
                <div className="care-card">
                  <h3>2. ضبط الوضعية</h3>
                  <p>الوضعية المناسبة والاتزان في الجلوس أو الوقوف يقدّم دعمًا أفضل للجسم.</p>
                </div>
                <div className="care-card">
                  <h3>3. حركة لطيفة</h3>
                  <p>حركات خفيفة ومقبولة قد تساعد على الحفاظ على المرونة عند الضرورة.</p>
                </div>
              </div>
              <p>
                أي روتين عناية ينجّم يتعدّى عن طريق القعدة والراحة؛ وقد يضمّ استشارة قابلة للتطبيق مع مختصّ أو نصائح مناسبة حسب الحالة. بعض الناس يختارون منتجات موضعية في إطار روتين شخصي لتخفيف الإحساس المحلي في المنطقة المعنية، مع مراعاة التعليمات والقواعد العامة للمنتج.
              </p>
            </section>
          </article>

          <section id="product-section" className="product-reveal">
            <div className="section-header">
              <span className="section-number">04</span>
              <h2>تعرّف على Relaxia NervoGel</h2>
            </div>
            <div className="product-layout">
              <div className="product-image-panel">
                <img src={product.productImage} alt="عبوة Relaxia NervoGel" className="product-image" />
              </div>
              <div className="product-copy">
                <div className="pill">Relaxia NervoGel</div>
                <h3>{product.name}</h3>
                <p>{product.shortDescription}</p>
                <ul className="benefit-list">
                  {product.benefits.map((benefit) => (
                    <li key={benefit}>{benefit}</li>
                  ))}
                </ul>
                <div className="usage-box">
                  <strong>الاستخدام المقصود:</strong>
                  <p>{product.intendedUse}</p>
                </div>
                <div className="product-actions">
                  <button className="primary-cta" type="button" onClick={() => scrollToSection('offer-section')}>
                    اطلب المنتج
                  </button>
                  <button className="secondary-cta" type="button" onClick={() => scrollToSection('product-section')}>
                    اكتشف أكثر
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section className="how-to-use">
            <div className="section-header">
              <span className="section-number">05</span>
              <h2>طريقة الاستعمال</h2>
            </div>
            <div className="step-grid">
              <div className="step-card">
                <div className="step-icon">01</div>
                <h3>نظّف المنطقة</h3>
                <p>تأكد من أن منطقة التطبيق جافة ونظيفة قبل استعمال المنتج.</p>
              </div>
              <div className="step-card">
                <div className="step-icon">02</div>
                <h3>طبّق بمقدار مناسب</h3>
                <p>استخدم الكمية المناسبة وفق التعليمات الموجودة على العبوة أو بطاقة المنتج.</p>
              </div>
              <div className="step-card">
                <div className="step-icon">03</div>
                <h3>وضع مناسب</h3>
                <p>اتباع التعليمات الرسمية من المنتج مهم لضمان الاستخدام السليم والآمن.</p>
              </div>
            </div>
            <p className="warning-note">
              ملاحظة: المعلومات أعلاه موجهة لتوضيح الاستخدام العام فقط. إذا كانت التعليمات الرسمية للمنتج مختلفة، فيجب اعتمادها، ولا تُعتبر هذه الصفحة مصدرًا طبيًا موثّقًا.
            </p>
          </section>

          <section className="faq-block">
            <div className="section-header">
              <span className="section-number">06</span>
              <h2>قبل ما تطلب، هاذم أهم التفاصيل</h2>
            </div>
            <div className="faq-list">
              {product.faq.map((item, index) => {
                const isOpen = isFaqOpen === index
                return (
                  <div key={item.question} className={`faq-item ${isOpen ? 'open' : ''}`}>
                    <button
                      type="button"
                      className="faq-question"
                      onClick={() => setIsFaqOpen(isOpen ? null : index)}
                      aria-expanded={isOpen}
                    >
                      <span>{item.question}</span>
                      <span className="faq-icon">{isOpen ? '−' : '+'}</span>
                    </button>
                    <div className="faq-answer">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </section>

          <section id="offer-section" className="offer-section">
            <div className="offer-card">
              <div className="offer-visual">
                <img src={product.productImage} alt="عرض Relaxia NervoGel" className="offer-image" />
              </div>
              <div className="offer-copy">
                <div className="pill">{orderConfig.offerLabel}</div>
                <h2>{product.name}</h2>
                <div className="offer-price-row">
                  <span className="price">{orderConfig.unitPrice} TND</span>
                  <span className="delivery-badge">{orderConfig.deliveryLabel}</span>
                </div>
                <div className="meta-row">
                  <span>التوصيل: {orderConfig.deliveryFee} TND</span>
                  <span>{orderConfig.cashOnDelivery}</span>
                </div>
                <button className="primary-cta large" type="button" onClick={() => scrollToSection('product-section')}>
                  اطلب توا
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default App
