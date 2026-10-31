import type { Metadata } from "next";
import ConsentReset from "@/components/ConsentReset";
import { profile } from "@/data/profile";
import { RETENTION_DAYS } from "@/lib/visitors";

export const metadata: Metadata = {
  title: `Gizlilik ve KVKK — ${profile.name}`,
  description: "Bu sitede hangi verilerin neden toplandığı ve nasıl saklandığı.",
};

const sections = [
  {
    title: "Veri sorumlusu",
    body: `${profile.name}. İletişim: ${profile.email}`,
  },
  {
    title: "Hangi veriler toplanıyor?",
    body: "IP adresi, IP'den tahmin edilen yaklaşık konum (ülke, il, şehir), cihaz türü, işletim sistemi, tarayıcı, ziyaret edilen sayfalar, ziyaret zamanları, sayfada kalma süresi ve siteye gelinen kaynak (örneğin Google, LinkedIn). Tarayıcında rastgele bir ziyaretçi kimliği saklanır. Ad, soyad, telefon ya da adres gibi bilgiler toplanmaz.",
  },
  {
    title: "Neden toplanıyor?",
    body: "Sitenin nasıl kullanıldığını anlamak, içeriği geliştirmek ve kötüye kullanımı tespit etmek için. Veriler satılmaz, reklam için kullanılmaz.",
  },
  {
    title: "Nerede ve ne kadar saklanıyor?",
    body: `Ziyaret kayıtları Vercel ve Upstash (Redis) altyapısında tutulur ve son ziyaretten ${RETENTION_DAYS} gün sonra otomatik olarak silinir. Çerezleri kabul edersen Google Analytics ve Microsoft Clarity de çalışır; bu hizmetler veriyi kendi gizlilik politikalarına göre yurt dışında işler.`,
  },
  {
    title: "Tercihin",
    body: "Çerez bildiriminde \"Reddet\"i seçersen hiçbir ziyaret kaydı tutulmaz; Google Analytics ve Clarity yalnızca \"Kabul et\" ile çalışır. Tercihini aşağıdaki düğmeyle istediğin zaman değiştirebilirsin.",
  },
  {
    title: "Hakların (KVKK md. 11)",
    body: `Verilerinin işlenip işlenmediğini öğrenme, düzeltilmesini ya da silinmesini isteme ve itiraz etme hakkın var. Talebini ${profile.email} adresine yazabilirsin.`,
  },
];

export default function PrivacyPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 pb-10 pt-20 md:pt-28">
      <div className="eyebrow mb-5">Gizlilik</div>
      <h1 className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-neutral-900 md:text-5xl">
        Gizlilik ve KVKK aydınlatma metni
      </h1>

      <div className="mt-10 space-y-8">
        {sections.map((s) => (
          <div key={s.title}>
            <h2 className="font-display text-xl font-semibold text-neutral-900">
              {s.title}
            </h2>
            <p className="mt-2 leading-relaxed text-neutral-600">{s.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <ConsentReset />
      </div>
    </section>
  );
}
