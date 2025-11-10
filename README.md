# Manual Apega Desapega Brechó

Manual completo de treinamento para funcionárias do Apega Desapega Brechó - versão web mobile navegável.

## 📱 Características

- **Design Responsivo**: Otimizado para dispositivos móveis
- **Navegação Intuitiva**: Menu hambúrguer e navegação por seções
- **Visual Limpo**: Baseado no Manual de Identidade Visual (MIV) da marca
- **Offline Ready**: Pode ser instalado como PWA (Progressive Web App)
- **Fácil Navegação**: Botões anterior/próximo entre seções
- **Busca por Hash**: URLs com #secao-id para compartilhar seções específicas

## 🎨 Identidade Visual

- **Cor Principal**: Verde #6B9080
- **Fonte Primária**: Libre Baskerville (títulos)
- **Fonte Secundária**: System fonts (conteúdo)
- **Logo**: Circular com texto "APEGA DESAPEGA BRECHÓ"

## 📂 Estrutura de Arquivos

```
apega-desapega-manual/
├── index.html       # Estrutura HTML principal
├── styles.css       # Estilos e tema visual
├── content.js       # Conteúdo das seções do manual
├── app.js           # Lógica de navegação e interatividade
└── README.md        # Este arquivo
```

## 🚀 Como Usar

### Opção 1: Abrir Localmente

1. Abra o arquivo `index.html` em qualquer navegador moderno
2. Navegue usando o menu ou as setas do teclado

### Opção 2: Hospedar Online

1. Faça upload dos arquivos para um servidor web ou GitHub Pages
2. Acesse via URL
3. Pode ser instalado como app no celular

### Opção 3: Servidor Local (Desenvolvimento)

```bash
# Usando Python 3
python -m http.server 8000

# Usando Node.js
npx http-server

# Acesse http://localhost:8000
```

## 📱 Instalação como App (PWA)

1. Abra o manual no navegador do celular
2. No Chrome: Menu → "Adicionar à tela inicial"
3. No Safari: Compartilhar → "Adicionar à Tela de Início"

## ⌨️ Atalhos de Teclado

- **Seta Direita**: Próxima seção
- **Seta Esquerda**: Seção anterior
- **Ctrl/Cmd + P**: Imprimir seção atual

## 📋 Seções do Manual

1. 💚 Boas-Vindas
2. 📍 Informações Essenciais
3. 👥 Sua Equipe
4. 🌅 Abertura da Loja
5. 📦 Como Listar Peças
6. 💰 Como Vender
7. 💳 Máquina de Cartão
8. 📐 Organização da Loja
9. 🌙 Fechamento da Loja
10. 🔄 Política de Trocas
11. 🚨 Segurança e Emergências
12. 📱 Comunicação e Redes Sociais
13. ⭐ Dicas de Ouro
14. 📚 Glossário
15. ✅ Checklist Primeiro Dia
16. 💚 Mensagem Final

## 🔧 Personalização

### Alterar Cores

Edite as variáveis CSS em `styles.css`:

```css
:root {
    --color-primary: #6B9080;
    --color-primary-dark: #4A6B5C;
    /* ... */
}
```

### Adicionar Seções

Edite o array `manualContent.sections` em `content.js`:

```javascript
{
    id: 'nova-secao',
    title: '🆕 Nova Seção',
    content: `
        <h2 class="section-title">Título</h2>
        <p>Conteúdo...</p>
    `
}
```

### Alterar Informações de Contato

Edite as informações no footer em `index.html` e nas seções relevantes em `content.js`.

## 📞 Contato

**Apega Desapega Brechó**
- 📍 Av. Brasil Leste, 185 - Passo Fundo/RS
- 📱 (54) 9.9609-6202
- 📸 @apegadesapegars

## 📄 Licença

Este manual foi criado especificamente para o Apega Desapega Brechó.

---

**Versão:** 1.0
**Data:** Novembro 2025
**Moda sustentável é nosso modo de mudar o mundo** 💚
