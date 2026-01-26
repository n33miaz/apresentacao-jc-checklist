### 1. Descrição do Repositório (About)

Esta é a frase curta que fica no topo, ao lado do botão "Star".

**Opção A (Mais técnica):**
> Apresentação interativa desenvolvida em HTML/JS detalhando a refatoração completa do app JC Checklist (Legado p/ Clean Architecture, SOLID e Offline-first).

**Opção B (Mais executiva):**
> Relatório técnico e visual sobre a evolução, redesign e otimização de performance do aplicativo móvel JC Checklist.

**Tags (tópicos):** `html5` `presentation` `refactoring` `clean-architecture` `flutter` `showcase`

---

### 2. README.md

Crie um arquivo chamado `README.md` na raiz e cole o conteúdo abaixo. Lembre-se de substituir `SEU_USUARIO` pelo seu user do GitHub onde indicado.

# 📊 Evolução JC Checklist - Apresentação Técnica

[![GitHub Pages](https://img.shields.io/badge/Status-Online-success?style=for-the-badge&logo=github)](https://SEU_USUARIO.github.io/apresentacao-jc-checklist/)
[![Tech Stack](https://img.shields.io/badge/Stack-HTML%20%7C%20Tailwind%20%7C%20JS-blue?style=for-the-badge)](https://developer.mozilla.org/en-US/docs/Web/HTML)

> **[Clique aqui para visualizar a apresentação online](https://n33miaz.github.io/apresentacao-jc-checklist/)** 🚀

## 📖 Sobre o Projeto

Este repositório contém uma **apresentação interativa baseada em web (HTML5/CSS3)** criada para demonstrar o processo de reengenharia de software realizado no aplicativo móvel **JC Checklist**.

O objetivo desta apresentação é documentar visual e tecnicamente a migração de um sistema legado instável para uma arquitetura moderna, escalável e de alta performance.

## 📱 O Case: Refatoração do App Mobile

A apresentação detalha as mudanças profundas realizadas no código-fonte do aplicativo Flutter da empresa, comparando o cenário "Antes" e "Depois":

### 🛠 Principais Mudanças Técnicas Abordadas:
*   **Arquitetura:** Migração de código acoplado para **Clean Architecture** e princípios **SOLID**.
*   **Dados:** Implementação de persistência local robusta com **Floor (SQLite)** e estratégia **Offline-First**.
*   **Conectividade:** Adoção do **Repository Pattern** e sistema de upload de imagens em "Chunks" (fatiamento de dados) para redes instáveis.
*   **Segurança:** Implementação de **Authenticated Client** para gestão automática de tokens e tratamento centralizado de erros.
*   **UI/UX:** Redesign completo da interface com feedback visual imediato e validações robustas.

## 🖥️ Funcionalidades da Apresentação

Diferente de um PowerPoint estático, esta apresentação foi codificada para ser responsiva e interativa:

*   **Navegação por Teclado:** Use as setas `➡️` / `⬅️` ou `Espaço` para navegar.
*   **Auto-Scale:** O layout se adapta automaticamente a diferentes tamanhos de tela (Zoom inteligente).
*   **Comparação Visual:** Slides com mockups de celular para comparação direta de UI.
*   **Geração de PDF:** Inclui script Node.js (`puppeteer`) para exportação automática dos slides para PDF de alta qualidade.

## 🚀 Como Rodar Localmente

### Para gerar o PDF

Se desejar gerar uma versão impressa da apresentação:

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Execute o script de geração:
   ```bash
   node gerar_pdf.js
   ```

## 🛠 Tecnologias Utilizadas

*   **HTML5 & CSS3:** Estrutura e Estilização.
*   **Tailwind CSS:** Framework de utilitários para design rápido e consistente.
*   **JavaScript (Vanilla):** Lógica de navegação e redimensionamento.
*   **Puppeteer & PDF-lib:** Automação para geração de relatórios em PDF.
*   **FontAwesome:** Ícones vetoriais.