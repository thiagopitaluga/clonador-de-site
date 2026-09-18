"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const asset = "/sites/favre-adv-br/root";

const sections = [
  { id: "escritorio", title: "O Escritório", text: "Com uma tradição de mais de 50 anos, a Favre Sociedade de Advogados é referência em advocacia em Jundiaí e região. Nossa história é fundamentada no compromisso com a excelência, ética e inovação.", image: `${asset}/escritorio.webp`, href: "#sobre-nos" },
  { id: "equipe", title: "A Equipe", text: "Nosso escritório tem o orgulho de contar com uma equipe de profissionais altamente qualificados, especialistas em suas áreas de atuação, que trabalham de forma integrada para oferecer soluções jurídicas personalizadas e eficazes.", image: `${asset}/equipe.webp`, href: "#equipe" },
  { id: "areas", title: "Áreas de Atuação", text: "Atuamos com excelência em Direito Civil, Trabalhista, Saúde e Patrimonial. Oferecemos soluções jurídicas estratégicas, proteção de bens, defesa de direitos e assessoria completa para pessoas físicas e empresas. Tradição, inovação e confiança a serviço do seu futuro.", image: `${asset}/tributario.jpg`, href: "#areas-de-atuacao" },
];

const menuItems = [["Início", "#inicio"], ["Sobre Nós", "#sobre-nos"], ["Equipe", "#equipe"], ["Áreas de Atuação", "#areas-de-atuacao"], ["Conteúdos", "#conteudos"], ["Contato", "#contato"]];

function SocialLinks() {
  return <div className="social-links" aria-label="Redes sociais">
    <a href="https://www.facebook.com/favreadvogados/" target="_blank" rel="noreferrer" aria-label="Facebook">f</a>
    <a href="https://www.linkedin.com/company/favre---sociedade-de-advogados/?originalSubdomain=br" target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>
    <a href="https://www.instagram.com/favreadvogados/" target="_blank" rel="noreferrer" aria-label="Instagram">◎</a>
  </div>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return <main className="favre-page">
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="Favre Advogados"><img src={`${asset}/logo.png`} alt="Favre Advogados" /></a>
      <button className="menu-toggle" type="button" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}>{menuOpen ? <X size={31} /> : <Menu size={31} />}</button>
    </header>
    {menuOpen && <nav className="menu-panel" aria-label="Menu principal">{menuItems.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}</nav>}
    <SocialLinks />
    <section id="inicio" className="hero section-panel"><div className="hero-copy content-column">
      <p className="eyebrow">TRADIÇÃO E EXCELÊNCIA</p>
      <h1>Bem-vindo à Favre Sociedade de Advogados</h1>
      <p>Combinamos mais de 50 anos de tradição com um planejamento jurídico estratégico para solucionar conflitos com eficiência e excelência. Nosso compromisso é ser um pilar de confiança e justiça, assegurando direitos e contribuindo para a harmonia social. Aqui, experiência e inovação caminham lado a lado.</p>
      <a className="gold-button" href="#contato">Entre em contato</a>
    </div></section>
    {sections.map((section) => <section key={section.id} id={section.id === "areas" ? "areas-de-atuacao" : section.id} className="image-section section-panel" style={{ backgroundImage: `linear-gradient(90deg, rgba(20, 20, 20, .72), rgba(20, 20, 20, .25)), url(${section.image})` }}><div className="content-column light-copy">
      <p className="eyebrow">FAVRE ADVOGADOS</p><h2>{section.title}</h2><p>{section.text}</p><a className="gold-button" href={section.href}>Saiba mais</a>
    </div></section>)}
    <section id="conteudos" className="content-section section-panel"><div className="content-column"><p className="eyebrow">INFORMAÇÃO ESTRATÉGICA</p><h2>Conteúdos</h2><p>Confira as últimas publicações feitas pela Favre Advogados.</p><a className="gold-button" href="https://favre.adv.br/conteudos/">Leia agora</a></div></section>
    <section id="contato" className="contact-section section-panel"><div className="content-column"><p className="eyebrow">FALE CONOSCO</p><h2>Conte com a nossa experiência</h2><p>Estamos prontos para entender sua necessidade e oferecer uma orientação jurídica personalizada.</p><a className="gold-button" href="https://favre.adv.br/contato/">Entre em contato</a></div></section>
    <a className="whatsapp" href="https://api.whatsapp.com/send?phone=551145219924" target="_blank" rel="noreferrer" aria-label="Falar pelo WhatsApp">◔</a>
  </main>;
}
