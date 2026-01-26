const puppeteer = require("puppeteer");
const { PDFDocument } = require("pdf-lib");
const fs = require("fs");
const path = require("path");

(async () => {
  try {
    console.log("Iniciando o processo de geração do PDF...");

    const files = fs
      .readdirSync(__dirname)
      .filter((file) => file.endsWith(".html"))
      .sort((a, b) => {
        return parseInt(a) - parseInt(b);
      });

    if (files.length === 0) {
      console.error("Nenhum arquivo .html encontrado na pasta.");
      return;
    }

    console.log(`📄 Arquivos encontrados: ${files.join(", ")}`);

    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();

    const mergedPdf = await PDFDocument.create();

    for (const file of files) {
      const filePath = path.join(__dirname, file);
      const fileUrl = `file://${filePath}`;

      console.log(`Renderizando: ${file}...`);

      await page.goto(fileUrl, { waitUntil: "networkidle0" });

      await page.setViewport({ width: 1280, height: 720 });

      const pdfBuffer = await page.pdf({
        printBackground: true,
        width: "1280px",
        height: "720px",
        pageRanges: "1",
        margin: { top: 0, right: 0, bottom: 0, left: 0 }, 
      });

      const slidePdf = await PDFDocument.load(pdfBuffer);
      const copiedPages = await mergedPdf.copyPages(
        slidePdf,
        slidePdf.getPageIndices(),
      );

      copiedPages.forEach((page) => mergedPdf.addPage(page));
    }

    const pdfBytes = await mergedPdf.save();
    fs.writeFileSync("Apresentacao_JC_Checklist.pdf", pdfBytes);

    await browser.close();

    console.log(
      'Sucesso! Arquivo "Apresentacao_JC_Checklist.pdf" criado na pasta.',
    );
  } catch (error) {
    console.error("Ocorreu um erro:", error);
  }
})();

// node gerar_pdf.js