/**
 * Configuração e Ação de Confirmação | Raul Fröhlich
 */

// Configuração centralizada
const WHATSAPP_NUMBER = '555197392166';
const WHATSAPP_MESSAGE = 'Olá, Raul! Agendei minha Sessão Estratégica de Gestão e confirmo minha presença no horário escolhido.\nVou me organizar para participar e conversar sobre os desafios da minha empresa.';

document.addEventListener('DOMContentLoaded', () => {
  const ctaButton = document.getElementById('cta-whatsapp');

  if (!ctaButton) return;

  if (WHATSAPP_NUMBER) {
    // Monta a URL oficial do WhatsApp com a mensagem codificada
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
    ctaButton.href = whatsappUrl;

    // Rastreamento de métricas no clique (sem travar navegação)
    ctaButton.addEventListener('click', () => {
      // Google Analytics 4 (gtag)
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'whatsapp_confirmation_click', {
          event_category: 'engagement',
          event_label: 'Confirmar Presença WhatsApp'
        });
      }

      // Meta Pixel (fbq)
      if (typeof window.fbq === 'function') {
        window.fbq('trackCustom', 'whatsapp_confirmation_click');
      }

      // Google Tag Manager dataLayer
      if (window.dataLayer && Array.isArray(window.dataLayer)) {
        window.dataLayer.push({
          event: 'whatsapp_confirmation_click'
        });
      }
    });
  } else {
    // Fallback preventivo caso o número não estivesse configurado
    console.warn('[Configuração Pendente] O número do WhatsApp não foi configurado.');
    ctaButton.addEventListener('click', (e) => {
      e.preventDefault();
      alert('Configuração do WhatsApp pendente de ativação.');
    });
  }
});
