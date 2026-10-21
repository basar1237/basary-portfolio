import { Calendar, MapPin, Mail, Phone, GraduationCap, Briefcase, Coffee, Heart, Bot, Sparkles, Workflow } from "lucide-react";
import Section from "@/components/Section";
import { profile } from "@/data/profile";
import { skills } from "@/data/skills";
import AboutSkillsGrid from "@/components/AboutSkillsGrid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Hakkımda — ${profile.name}`,
  description: `${profile.name} hakkında — ${profile.company} bünyesinde ${profile.role}.`,
};

export default function AboutPage() {
  const yearsAtLidya = new Date().getFullYear() - profile.startedAt;

  return (
    <>
      <section className="relative">
        <div className="relative mx-auto max-w-6xl px-5 pb-10 pt-20 md:pt-28">
          <div className="eyebrow mb-5">Hakkımda</div>
          <h1 className="max-w-3xl font-display text-4xl font-semibold leading-[1.08] tracking-tight text-neutral-900 md:text-6xl">
            <span className="text-gradient">Kim olduğum</span> ve geliştirmeyi
            sevdiğim şeyler üzerine kısa bir hikâye.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-neutral-500 md:text-lg">
            {profile.bio}
          </p>
        </div>
      </section>

      <Section
        eyebrow="Kişisel bilgiler"
        title={
          <>
            Temel bilgiler <span className="text-gradient">bir bakışta</span>
          </>
        }
      >
        <div className="grid gap-px overflow-hidden rounded-xl border border-neutral-200 bg-neutral-200 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Calendar, label: "Doğum yılı", value: `${profile.birthYear}` },
            { icon: MapPin, label: "Doğum yeri", value: profile.birthplace },
            { icon: Phone, label: "Telefon", value: profile.phone },
            { icon: Mail, label: "E-posta", value: profile.email },
          ].map((item) => (
            <div key={item.label} className="bg-white p-6">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-200 text-neutral-700">
                <item.icon className="h-5 w-5" />
              </div>
              <div className="mt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-neutral-400">
                {item.label}
              </div>
              <div className="mt-1 break-words text-sm text-neutral-800">
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Bugüne kadar"
        title={
          <>
            Osmaniye&apos;den{" "}
            <span className="text-gradient">canlı seyahat arayüzlerine</span>
          </>
        }
      >
        <div className="grid gap-5 lg:grid-cols-2">
          <article className="card p-6">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-200 text-neutral-700">
              <GraduationCap className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-display text-xl font-medium text-neutral-900">
              Yazılım Mühendisliği — Beykent Üniversitesi
            </h3>
            <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-neutral-400">
              İstanbul · 2020 – 2024
            </p>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600">
              Bilgisayar bilimi, yazılım mühendisliği, veri yapıları,
              algoritmalar ve web teknolojileri üzerine dört yıl. Proje odaklı
              sağlam bir temel ve web platformuna gerçek bir tutkuyla mezun
              oldum.
            </p>
          </article>

          <article className="card p-6">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-200 text-neutral-700">
              <Briefcase className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-display text-xl font-medium text-neutral-900">
              Frontend & AI Mühendisi — Lidya Teknoloji
            </h3>
            <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-neutral-400">
              İstanbul · {profile.startedAt} – Günümüz · {yearsAtLidya}+ yıl
            </p>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600">
              Lidya&apos;da şirketin seyahat ve rezervasyon markalarının
              tamamında çalışıyorum — .NET MVC + jQuery şablon sitelerinden
              modern Next.js + Payload CMS multi-tenant platformuna kadar. Her
              gün gerçek yolcuların kullandığı uçak, otel, otobüs, transfer ve
              tur ürünlerinin arayüzlerini geliştiriyorum.
            </p>
          </article>
        </div>
      </Section>

      <Section
        eyebrow="Yapay Zeka Mühendisliği"
        title={
          <>
            <span className="text-gradient">Yapay zekâ ile ve yapay zekâ için</span> geliştirmek
          </>
        }
        description="Yapay zekâ benim için bir yan ilgi değil — hem çalışma biçimim hem de geliştirdiğim şey. Claude Code geliştirme sürecimin merkezinde yer alıyor ve LLM tabanlı ürünler, yayına aldığım işlerin giderek büyüyen bir parçası."
      >
        <div className="grid gap-5 lg:grid-cols-3">
          <article className="card p-6">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-200 text-neutral-700">
              <Workflow className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-display text-xl font-medium text-neutral-900">
              Claude Code ile agentic geliştirme
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600">
              Günlük iş akışım Claude Code üzerinde ilerliyor: mimari
              planlama, paralel agent&apos;larla özellik geliştirme, otomatik
              kod incelemesi ve test döngüleri. Bunu MCP sunucuları, özel
              subagent&apos;lar ve hook&apos;larla genişletiyorum — tek kişilik
              bir ekip olarak fikirleri hızla canlıdaki full-stack ürünlere
              dönüştürüyorum.
            </p>
          </article>

          <article className="card p-6">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-200 text-neutral-700">
              <Bot className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-display text-xl font-medium text-neutral-900">
              LLM tabanlı ürünler
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600">
              Gerçek zamanlı bir telefon sesli asistanı (takvim &amp; e-posta
              entegrasyonlu Vapi + Claude), Borsa İstanbul için yapay zekâ
              destekli bir hisse analiz web uygulaması (Next.js + FastAPI + LLM)
              ve bir hal (toptan satış) ERP&apos;si içinde yapay zekâ destekli
              modüller geliştirdim — hepsini uçtan uca tasarlayıp, geliştirip
              yayına aldım.
            </p>
          </article>

          <article className="card p-6">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-200 text-neutral-700">
              <Sparkles className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-display text-xl font-medium text-neutral-900">
              Nasıl yapıyorum
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600">
              Prompt mühendisliği ve agent tasarımı, tool use (function
              calling), yapılandırılmış çıktılar, RAG pipeline&apos;ları ve
              streaming deneyimi. Prompt&apos;ları ve agent yapılandırmalarını
              kod gibi ele alıyorum — versiyonlanmış, test edilmiş ve
              iyileştirilmiş — böylece yapay zekâ özellikleri canlıda
              öngörülebilir şekilde çalışıyor.
            </p>
          </article>
        </div>
      </Section>

      <Section
        eyebrow="Yetenekler"
        title={
          <>
            İşlerin arkasındaki{" "}
            <span className="text-gradient">tüm araç seti</span>
          </>
        }
        description="Günümü yeni ürün geliştirme için React/Next.js, içerik modelleme için Payload CMS ve hâlâ orijinal Lidya altyapısında çalışan markalar için azımsanmayacak miktarda legacy ASP.NET MVC + jQuery arasında bölüyorum."
      >
        <AboutSkillsGrid skills={skills} />
      </Section>

      <Section
        eyebrow="IDE dışında"
        title={
          <>
            <span className="text-gradient">Kod yazmadığım zamanlarda</span>{" "}
            neler yaparım
          </>
        }
      >
        <div className="grid gap-5 md:grid-cols-2">
          <div className="card p-6">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-200 text-neutral-700">
              <Coffee className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-display text-xl font-medium text-neutral-900">
              Sürekli öğrenmek
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600">
              React ekosistemini takip ediyor, Next.js / Payload sürümlerini
              yakından izliyorum; boş vakit bulduğumda Python ve R ile veri
              bilimi yan projelerini keşfetmeyi seviyorum.
            </p>
          </div>
          <div className="card p-6">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-200 text-neutral-700">
              <Heart className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-display text-xl font-medium text-neutral-900">
              Zanaat &amp; detaylar
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600">
              Küçük şeyleri çok önemsiyorum — bir ürünü sessizce doğru
              hissettiren mikro etkileşimler, tipografi, renk ve hareket. Ancak
              eksik olduğunda fark ettiğin türden bir cila.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
