import React from "react";
import { useState } from "react";
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, useDisclosure } from "@chakra-ui/react";
import { Code, Key, LinkSimple, Robot, TextAlignLeft, TextT, Translate, User, X } from "@phosphor-icons/react";
import { MetaTagPreview } from './preview';

export function Main() {
  const [pageUrl, setPageUrl] = useState("");
  const [pageTitle, setPageTitle] = useState("");
  const [pageDiscricao, setPageDiscricao] = useState("");
  const [pageAutor, setPageAutor] = useState("");
  const [pageKeywords, setPageKeywords] = useState("");
  const [pageIdioma, setPageIdioma] = useState("");
  const [pageRobots, setPageRobots] = useState<string[]>([]);
  const [userTwitter, setUserTwitter] = useState("");
  const [googleId, setGoogleId] = useState("");
  const [generatedCode, setGeneratedCode] = useState<string>("");

  const gerateCode = () => {
    const code = `
    <!-- Primary Meta Tags -->
    <meta name="language" content="${pageIdioma}">
    <title>${pageTitle}</title>
    <meta name="title" content="${pageTitle}" />
    <meta name="description" content="${pageDiscricao}" />
    <meta name="robots" content="${pageRobots}" />
    <meta name="author" content="${pageAutor}" />
    <meta name="keywords" content="${pageKeywords}" />
    
    <meta property="article:author" content="${pageAutor}" />
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${pageUrl}" />
    <meta property="og:title" content="${pageTitle}" />
    <meta property="og:description" content="${pageDiscricao}" />
    <meta property="og:image" content="${pageUrl}/config/assets/open-graph.png" />
    
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="${pageUrl}" />
    <meta name="twitter:site" content="${userTwitter}">
    <meta property="twitter:title" content="${pageTitle}" />
    <meta property="twitter:description" content="${pageDiscricao}" />
    <meta property="twitter:image" content="${pageUrl}/config/assets/open-graph.png" />
    
    <!-- Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=${googleId}"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${googleId}');
    </script>
    
    <!-- Gerado por MetaTags ToolKit by Cat's Flow - https://toolkit.catsflow.com/metatags/ -->`;

    setGeneratedCode(code);
  };

  const copyCode = () => {
    navigator.clipboard.writeText(generatedCode);
    console.log('Código copiado');

    onClose();
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [error, setError] = useState("");


  const validateFields = () => {
    if (!pageUrl || !pageTitle || !pageDiscricao || !pageAutor || !pageKeywords) {
      setError("Todos os campos obrigatórios devem ser preenchidos.");
      return false;
    }
    setError("");
    return true;
  };

  const handleOpenModal = () => {
    if (validateFields()) {
      gerateCode();
      onOpen();
    }
  };

  return (
    <main className="_main">
      <section className="_gerador">
        <form className="_data" onSubmit={(e) => { e.preventDefault(); gerateCode(); handleOpenModal(); }}>
          <h2>Informações da página</h2>
          <section>
            {/* Link da página */}
            <label htmlFor="link" className="camp">
              <LinkSimple />
              <input type="url" id="link" placeholder="Link da página" value={pageUrl} onChange={(e) => setPageUrl(e.target.value)} maxLength={64} size={64} required />
            </label>
            {/* Título da página */}
            <label htmlFor="title" className="camp">
              <TextT />
              <input type="text" id="title" placeholder="Título da página" value={pageTitle} onChange={(e) => setPageTitle(e.target.value)} maxLength={32} size={32} required />
            </label>
            {/* Discrição da página */}
            <label htmlFor="description" className="camp textarea">
              <TextAlignLeft />
              <textarea id="description" placeholder="Descrição da página" value={pageDiscricao} onChange={(e) => setPageDiscricao(e.target.value)} maxLength={300} required></textarea>
            </label>
            {/* Autor da página */}
            <label htmlFor="autor" className="camp">
              <User />
              <input type="text" id="autor" placeholder="Autor da página" value={pageAutor} onChange={(e) => setPageAutor(e.target.value)} maxLength={64} size={64} required />
            </label>
            {/* Palavras chaves da página */}
            <label htmlFor="keys" className="camp">
              <Key />
              <input type="text" id="keys" placeholder="Palavras chaves da página" value={pageKeywords} onChange={(e) => setPageKeywords(e.target.value)} maxLength={64} size={64} required />
            </label>
            {/* Idioma da página */}
            <label htmlFor="idioma" className="camp">
              <Translate />
              <Select className="select" id="idioma" placeholder="Idioma da página" value={pageIdioma} onChange={(e) => setPageIdioma(e.target.value)}>
                <option value="pt-BR">Português - Brasil</option>
                <option value="en">Inglês - Americano</option>
              </Select>
            </label>
            {/* Robos de navegação */}
            <label htmlFor="robts" className="camp">
              <Robot />
              <Select className="select" id="robts" placeholder="Robôs de navegação" onChange={(e) => setPageRobots(Array.from(e.target.selectedOptions, (option) => option.value))}>
                <option value="all">Seguir e fixar páginas</option>
                <option value="index">Fixar página</option>
                <option value="follow">Seguir páginas</option>
                <option value="none">Não seguir e fixar páginas</option>
                <option value="no-index">Não fixar páginas</option>
                <option value="no-follow">Não seguir páginas</option>
              </Select>
            </label>
          </section>
          <h2>Open Graph</h2>
          <section>
            {/* Úsuario do Twitter */}
            <label htmlFor="twitter" className="camp">
              <LinkSimple />
              <input type="text" id="twitter" placeholder="Usúario do Twitter" value={userTwitter} onChange={(e) => setUserTwitter(e.target.value)} maxLength={64} size={64} />
            </label>
          </section>
          <h2>Analíticos</h2>
          <section>
            {/* Úsuario do Twitter */}
            <label htmlFor="googleid" className="camp">
              <LinkSimple />
              <input type="text" id="googleid" placeholder="Google Analytics" value={googleId} onChange={(e) => setGoogleId(e.target.value)} maxLength={64} size={64} />
            </label>
          </section>
          <Button type="submit" className="_btn"><Code /> Gerar MetaTags</Button>
        </form>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent className="modal">
            <ModalHeader as="header">
              <h3>MetaTags geradas!</h3>
              <Button onClick={onClose}><X /></Button>
            </ModalHeader>
            <ModalBody>
              <textarea value={generatedCode} readOnly></textarea>
            </ModalBody>
            <ModalFooter>
              <button className="_btn" onClick={copyCode}>Copiar MetaTags</button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </section>
      <section className="_preview">
        <MetaTagPreview title={pageTitle} description={pageDiscricao} link={pageUrl} />
      </section>
    </main>
  );
}