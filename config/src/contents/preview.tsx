import React from 'react';

interface MetaTagPreviewProps {
  title: string;
  description: string;
  link: string;
}

export function MetaTagPreview({ title, description, link }: MetaTagPreviewProps) {
  return (
    <>
      <h2>Veja em ação</h2>
      <div className="_cnt">
        <img src="./config/assets/open-graph.png" alt="Banner da Cat's Flow" />
        <span className="_text">
          <p className="_href">{link || "https://toolkit.catsflow.com/metatags/"}</p>
          <h4>{title || "Cat's Flow - Seu gerador de Meta Tags"}</h4>
          <p className="_dt">{description || "Otimize seu site para o sucesso online com nosso inovador Gerador de Meta Tags! Aumente a visibilidade, relevância e classificação nos motores de busca com facilidade. Crie meta tags personalizadas, títulos envolventes e descrições impactantes para atrair mais tráfego orgânico."}</p>
        </span>
      </div>
    </>
  );
}
