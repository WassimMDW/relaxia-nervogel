import { useEffect, useState } from 'react'
import './App.css'
import { articleCopy, orderConfig, product } from './config/product'
import { initMetaPixel, trackMetaEvent } from './lib/metaPixel'

function App() {
  const [isFaqOpen, setIsFaqOpen] = useState<number | null>(0)

  useEffect(() => {
    initMetaPixel()

    const productSection = document.getElementById('product-section')
    if (!productSection) return

    let viewTracked = false
    const observer = new IntersectionObserver((entries) => {
      if (!viewTracked && entries[0]?.isIntersecting) {
        viewTracked = true
        trackMetaEvent('ViewContent', {
          content_name: product.name,
          content_type: 'product',
          value: orderConfig.unitPrice,
          currency: 'TND',
        })
      }
    }, { threshold: 0.35 })

    observer.observe(productSection)
    return () => observer.disconnect()
  }, [])

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
          <div className="brand-block" aria-label="شعار Relaxia">
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
              <h1>ليس من الضروري أن تستمر معاناة آلام الظهر!</h1>
              <p className="hero-subtitle">
                قد تجعل الجلسة الطويلة والعمل والتنقل الراحة أكثر صعوبة. تعرّف على معلومات تساعدك على فهم آلام ظهرك واختيار روتين عناية يناسب احتياجاتك.
              </p>
              <div className="hero-meta">
                <span>{articleCopy.readTime}</span>
                <span className="dot" aria-hidden="true" />
                <span>5 دقائق قراءة</span>
              </div>
            </div>
            <div className="hero-visual">
              <img src={product.heroImage} alt="رسم توضيحي لألم الظهر والعمود الفقري" className="hero-image" />
            </div>
          </div>
        </section>

        <div className="content-wrap container">
          <article className="story-card">
            <section className="article-block">
              <span className="section-number">01</span>
              <h2>عندما تصبح الجلسة والراحة أكثر صعوبة مما اعتدت عليه</h2>
              <p>
                يتبع كثير من الأشخاص طوال يومهم روتيناً متقارباً: الجلوس في المكتب، استخدام الهاتف لفترات طويلة، العمل، ثم العودة إلى المنزل والاحتفاظ بالجلوس أو الوضعية نفسها. وقد تؤثر هذه العادات المتكررة على الظهر، وخاصة الجزء السفلي منه، حتى أثناء الراحة والحركة.
              </p>
              <p>
                وقد يجد بعض الأشخاص صعوبة في النهوض بسرعة أو الشعور بالراحة الكافية. وقد يلاحظون أن الاستلقاء أو الجلوس أو الوقوف لفترات طويلة يعيد الإحساس بالوخز أو الانزعاج. وفي بعض الحالات، يمتد الإحساس من الظهر إلى الساق ويؤثر على الأنشطة اليومية.
              </p>
              <p>
                هذه الأعراض شائعة، ولا ينبغي تجاهلها أو اعتبارها أمراً عادياً دائماً. ومن المهم فهم الوضع والوصول إلى تقييم مناسب لروتينك اليومي والحلول الملائمة لحالتك.
              </p>
            </section>

            <section className="article-block article-block--split">
              <div>
                <span className="section-number">02</span>
                <h2>لماذا قد تمتد آلام الظهر إلى الساق؟</h2>
              </div>
              <div className="explain-panel">
                <p>
                  لا تتشابه آلام الظهر لدى جميع الأشخاص. فقد يظهر الانزعاج مباشرة في الظهر لدى بعض الأشخاص، وقد يمتد إلى الساق لدى آخرين. وفي بعض الحالات، يرتبط ذلك بتهيج العصب الوركي أو ما يُعرف شعبياً بعرق النسا.
                </p>
                <p>
                  يجب التنبيه إلى أن الأعراض وحدها لا تسمح بتأكيد التشخيص. وقد تختلف الأسباب تبعاً للوضعية أو التوتر أو النشاط البدني وغير ذلك. إذا استمر الوخز أو ازداد، أو صاحبه ضعف في القدم أو حرقان أو فقدان حسّ أو صعوبة في الحركة، فمن الأفضل مراجعة مختصّ صحي لتقييم الحالة.
                </p>
              </div>
              <img src={product.nerveIllustration} alt="توضيح مبسط لمسار العصب" className="nerve-illustration" />
            </section>

            <section className="article-block">
              <span className="section-number">03</span>
              <h2>كيف تختار روتين عناية يناسبك؟</h2>
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
                قد يشمل روتين العناية فترات راحة قصيرة وتغيير الوضعية والحركة اللطيفة، وقد يستفيد الفرد أيضاً من النصائح المناسبة لحالته أو استشارة مختصّ. ويختار بعض الأشخاص منتجات موضعية ضمن روتينهم الشخصي لتخفيف الإحساس المحلي في المنطقة المعنية، مع مراعاة تعليمات المنتج والضوابط العامة للاستخدام.
              </p>
            </section>
          </article>

          <section id="product-section" className="product-reveal">
            <div className="section-header">
              <span className="section-number">04</span>
              <h2>تعرف على Relaxia NervoGel</h2>
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
              <h2>أهم التفاصيل قبل الطلب</h2>
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
                      aria-controls={`faq-answer-${index}`}
                    >
                      <span>{item.question}</span>
                      <span className="faq-icon">{isOpen ? '−' : '+'}</span>
                    </button>
                    <div
                      className="faq-answer"
                      id={`faq-answer-${index}`}
                      role="region"
                      aria-label={item.question}
                      aria-hidden={!isOpen}
                    >
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
                <a
                  className="primary-cta large"
                  href={product.checkoutUrl}
                  onClick={(event) => {
                    event.preventDefault()
                    trackMetaEvent('InitiateCheckout', {
                      content_name: product.name,
                      value: orderConfig.unitPrice,
                      currency: 'TND',
                    })
                    window.location.assign(product.checkoutUrl)
                  }}
                >
                  اطلب الآن
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default App
