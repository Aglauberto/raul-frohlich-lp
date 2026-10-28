# Página de Confirmação de Presença | Raul Fröhlich

Página de alta conversão para confirmação de presença na **Sessão Estratégica de Gestão**, projetada estritamente segundo as diretrizes de copy, design de luxo sóbrio e funcionalidade do briefing.

---

## 📁 Estrutura de Arquivos

```
lp-confirmacao/
├── index.html          # Estrutura semântica, metadados e acessibilidade
├── style.css           # Paleta oficial, tipografia e responsividade (mobile-first)
├── script.js           # Integração com WhatsApp (+55 51 9739-2166) e rastreamento de clique
├── raul-frohlich.jpg   # Fotografia original fornecida
└── README.md           # Instruções de publicação e validação
```

---

## 🎯 Fluxo do Funil de Conversão

```
[Anúncio / Criativo de Vídeo]
       │
       ▼
[Formulário Instantâneo Meta]
       │
       ▼
[Agendamento no Calendly]
       │
       ▼
[Esta Página: /confirmar-presenca]
       │
       ▼ (Clique no CTA)
[WhatsApp Oficial do Raul: +55 51 9739-2166]
```

---

## ⚙️ Configuração Técnica e WhatsApp

- **Número ativo:** `+55 51 9739-2166` (`555197392166`)
- **Mensagem predefinida:**
  > *Olá, Raul! Agendei minha Sessão Estratégica de Gestão e confirmo minha presença no horário escolhido.*
- **Link gerado:**  
  `https://wa.me/555197392166?text=Ol%C3%A1%2C%20Raul!%20Agendei%20minha%20Sess%C3%A3o%20Estrat%C3%A9gica%20de%20Gest%C3%A3o%20e%20confirmo%20minha%20presen%C3%A7a%20no%20hor%C3%A1rio%20escolhido.`
- **Navegação:** `target="_self"` (mantém a navegação fluida dentro do navegador do Instagram/Facebook e navegadores móveis).

---

## 📊 Medição e Analytics

O script dispara nativamente o evento **`whatsapp_confirmation_click`** ao tocar no botão:
- **Google Analytics 4 / gtag:** dispara `event: 'whatsapp_confirmation_click'`.
- **Meta Pixel / fbq:** dispara `trackCustom: 'whatsapp_confirmation_click'`.
- **Google Tag Manager:** envia ao `dataLayer`.

> *Nota de conformidade:* O clique mede o engajamento do lead e intenção de presença, não garantindo que o WhatsApp foi enviado. O lead já foi gerado na etapa do formulário/Calendly.

---

## 🔗 Próximo Passo: Configurar Redirecionamento no Calendly

1. No painel do **Calendly**, edite o tipo de evento da *Sessão Estratégica de Gestão*.
2. Acesse a seção **Página de confirmação** (*Confirmation Page*).
3. Selecione a opção **Redirecionar para um site externo** (*Redirect to an external site*).
4. Insira a URL final desta página (ex: `https://raulfrohlich.com.br/confirmar-presenca`).
