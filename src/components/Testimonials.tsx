"use client";
import React from "react";
import { motion } from "motion/react";

const testimonials = [
  {
    text: "Bu ERP sistemimizi tamamen dönüştürdü, finans ve envanter yönetimini kolaylaştırdı. Bulut tabanlı platform sayesinde uzaktan bile verimli çalışabiliyoruz.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Ayşe Yılmaz",
    role: "Operasyon Müdürü",
  },
  {
    text: "ERP sisteminin implementasyonu çok kolay ve hızlıydı. Özelleştirilebilir ve kullanıcı dostu arayüz sayesinde ekip eğitimi zahmetsizdi.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Mehmet Kaya",
    role: "IT Müdürü",
  },
  {
    text: "Destek ekibi olağanüstü, kurulum sürecinde bize rehberlik ettiler ve sürekli yardım sağlayarak memnuniyetimizi garanti ettiler.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Zeynep Özkan",
    role: "Müşteri Destek Lideri",
  },
  {
    text: "Bu ERP'nin sorunsuz entegrasyonu iş operasyonlarımızı ve verimliliğimizi artırdı. Sezgisel arayüzü için kesinlikle tavsiye ediyorum.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Ali Demir",
    role: "CEO",
  },
  {
    text: "Güçlü özellikleri ve hızlı desteği iş akışımızı dönüştürdü, bizi önemli ölçüde daha verimli hale getirdi.",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Fatma Şahin",
    role: "Proje Müdürü",
  },
  {
    text: "Sorunsuz implementasyon beklentileri aştı. Süreçleri kolaylaştırarak genel iş performansını iyileştirdi.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Elif Çelik",
    role: "İş Analisti",
  },
  {
    text: "İş fonksiyonlarımız kullanıcı dostu tasarım ve olumlu müşteri geri bildirimlerle gelişti.",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "Burak Arslan",
    role: "Pazarlama Müdürü",
  },
  {
    text: "İhtiyaçlarımızı anlayarak operasyonlarımızı geliştiren, beklentileri aşan bir çözüm sundular.",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Selin Koç",
    role: "Satış Müdürü",
  },
  {
    text: "Bu ERP'yi kullanarak online varlığımız ve dönüşümlerimiz önemli ölçüde iyileşti, iş performansını artırdı.",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Emre Yıldız",
    role: "E-ticaret Müdürü",
  },
];

const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-background"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div className="p-6 rounded-xl border bg-card shadow-sm hover:shadow-md transition-shadow max-w-xs w-full" key={i}>
                  <div className="text-sm text-muted-foreground mb-4">{text}</div>
                  <div className="flex items-center gap-3">
                    <img
                      width={40}
                      height={40}
                      src={image}
                      alt={name}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <div className="flex flex-col">
                      <div className="font-medium text-sm leading-tight">{name}</div>
                      <div className="text-xs text-muted-foreground leading-tight">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export const Testimonials = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-3xl mx-auto text-center mb-16"
        >
          <div className="inline-flex items-center rounded-lg border px-3 py-1 text-xs font-medium mb-6">
            Müşteri Yorumları
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-4">
            Müşterilerimiz Ne Diyor?
          </h2>
          <p className="text-lg text-muted-foreground">
            Platformumuzu kullanan müşterilerimizin deneyimlerini öğrenin.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[600px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};