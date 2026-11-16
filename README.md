# VerdePasso 🌿

Site institucional fictício de uma clínica de podologia, desenvolvido como projeto de portfólio para praticar fundamentos de desenvolvimento front-end.

![Imagem ilustrativa de cuidado com os pés](assets/hero-foot-care.jpg)

## Sobre o projeto

O VerdePasso apresenta uma experiência digital editorial e responsiva para uma clínica fictícia. A interface utiliza tons de verde-oliva, bege e branco quente, com fotografias ilustrativas e conteúdo organizado em seções.

**Objetivo:** aplicar HTML, CSS e JavaScript na construção de uma página institucional, praticando estrutura semântica, apresentação visual responsiva e interações no navegador.

## Tecnologias

- **HTML5** — estrutura e conteúdo semântico da página.
- **CSS3** — identidade visual, layouts, adaptação a telas e animações.
- **JavaScript** — menu móvel, mensagens interativas, validação local do formulário e animações de entrada.

## Funcionalidades

- Navegação por seções e menu recolhível em telas menores.
- Apresentação da clínica fictícia e de três áreas de cuidado: podologia preventiva, unhas e calosidades, e bem-estar dos pés.
- Botão **“Conheça nossa clínica”**, que exibe uma mensagem de boas-vindas, e controle **“Mostrar mais”** para revelar um texto complementar.
- Perguntas frequentes expansíveis usando os elementos nativos `<details>` e `<summary>`.
- Botão de agendamento demonstrativo com destino preparado para WhatsApp.
- Formulário com validação no navegador: nome com pelo menos 3 caracteres, formato básico de e-mail e mensagem com pelo menos 10 caracteres. Erros são apresentados junto aos campos.
- Animações de entrada com `IntersectionObserver`, respeitando a preferência do dispositivo por movimento reduzido.
- Ano do rodapé atualizado automaticamente.

## Responsividade

O layout adapta navegação, imagens, serviços e formulário para desktop, tablet e celular, com ajustes de CSS para diferentes larguras de tela.

## Estrutura do projeto

```text
VerdePasso/
├── index.html
├── style.css
├── script.js
└── assets/
    ├── IMAGE_CREDITS.md
    ├── clinic-interior.jpg
    ├── hero-foot-care.jpg
    ├── service-nail-care.jpg
    ├── service-preventive.jpg
    └── service-wellbeing.jpg
```

## Como visualizar

Abra `index.html` em um navegador. O projeto não precisa de instalação de pacotes ou de um servidor próprio para a demonstração local.

As fontes Cormorant Garamond e DM Sans são carregadas pelo Google Fonts; se não estiverem disponíveis, o CSS usa fontes alternativas do sistema.

## Aprendizados praticados

- Organização de uma página com HTML semântico e navegação por âncoras.
- Criação de layouts responsivos com CSS Grid, Flexbox e media queries.
- Seleção de elementos e tratamento de eventos com JavaScript.
- Validação de campos, expressões regulares simples e mensagens acessíveis.
- Uso de atributos ARIA, componentes nativos de FAQ e preferência por movimento reduzido.
- Organização de recursos locais e registro das fontes das imagens.

## Aviso sobre a demonstração

> O VerdePasso é um projeto fictício de portfólio. Não representa uma clínica real e não possui sistema de agendamento nem envio de formulários para servidor. O formulário apenas demonstra validação local.

O botão do WhatsApp contém o marcador fictício `NUMERO_FICTICIO_DE_DEMONSTRACAO`; portanto, não direciona a um número real. Para uso comercial, o destino precisa ser substituído por um número autorizado.

As fotografias são ilustrativas. Consulte [assets/IMAGE_CREDITS.md](assets/IMAGE_CREDITS.md) para ver as fontes e informações de licença.

## Repositório

[VerdePasso no GitHub](https://github.com/heloisavianna86-lang/verdepasso)
