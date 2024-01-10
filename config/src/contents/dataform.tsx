// MetaTagGenerator.tsx

import React, { useState } from 'react';

interface MetaTagGeneratorProps {
  onClose: () => void;
}

const MetaTagGenerator: React.FC<MetaTagGeneratorProps> = ({ onClose }) => {
  const [pageLink, setPageLink] = useState("");
  const [pageTitle, setPageTitle] = useState("");
  // Outros campos aqui...
  const [pageLanguage, setPageLanguage] = useState("pt");
  const [robots, setRobots] = useState<string[]>([]);
  const [generatedCode, setGeneratedCode] = useState<string>("");

  const generateCode = () => {
    // Lógica para gerar o código aqui
    const code = `<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${pageTitle}</title>
<!-- Outras meta tags geradas aqui... -->`;

    // Atualiza o estado com o código gerado
    setGeneratedCode(code);
  };

  // const copyCode = () => {
  //   // Lógica para copiar o código para a área de transferência
  //   navigator.clipboard.writeText(generatedCode);
  // };

  return (
    <form onSubmit={(e) => { e.preventDefault(); generateCode(); }}>
      {/* Campos de entrada */}
      <label>Link da Página: <input type="text" value={pageLink} onChange={(e) => setPageLink(e.target.value)} /></label>
      {/* Outros campos de entrada aqui... */}
      {/* Idioma da página */}
      <label htmlFor="idioma">
        <select id="idioma" aria-placeholder="Idioma da página" value={pageLanguage} onChange={(e) => setPageLanguage(e.target.value)}>
          <option value="pt">Português</option>
          <option value="en">Inglês</option>
          {/* Outras opções de idioma aqui... */}
        </select>
      </label>
      {/* Robos de navegação */}
      <label htmlFor="robts">
        <select id="robts" aria-placeholder="Robôs de navegação" onChange={(e) => setRobots(Array.from(e.target.selectedOptions, (option) => option.value))} multiple>
          <option value="all">Seguir e fixar páginas</option>
          <option value="index">Fixar página</option>
          <option value="follow">Seguir páginas</option>
          <option value="none">Não seguir e fixar páginas</option>
          <option value="no-index">Não fixar páginas</option>
          <option value="no-follow">Não seguir páginas</option>
        </select>
      </label>

      {/* Botão para gerar código */}
      <button type="submit">Gerar Código</button>

      {/* Modal para exibir o código gerado */}
      {/* <ChakraModal isOpen={generatedCode !== ""} onClose={onClose}>
        <ChakraModalOverlay />
        <ChakraModalContent>
          <ChakraModalHeader>
            <ChakraModalTitle>Código Gerado</ChakraModalTitle>
          </ChakraModalHeader>
          <ChakraModalBody>
            <textarea value={generatedCode} readOnly></textarea>
          </ChakraModalBody>
          <ChakraModalFooter>
            <button onClick={copyCode}>Copiar Código</button>
            <button onClick={onClose}>Fechar</button>
          </ChakraModalFooter>
        </ChakraModalContent>
      </ChakraModal> */}
    </form>
  );
};

export default MetaTagGenerator;
