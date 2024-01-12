import React from 'react';

interface PreviewTagsProps {
  title: string;
  description: string;
  link: string;
}

const PreviewTags: React.FC<PreviewTagsProps> = ({ title, description, link }) => {
  return (
    <section>
      <h2>Veja em ação</h2>
      <div>
        <img src="/config/assets/open-graph.png" alt="Banner da Cat's Flow" />
        <span>
          <h4>{title}</h4>
          <p className="_detail">{link}</p>
          <p>{description}</p>
        </span>
      </div>
    </section>
  );
};

export default PreviewTags;
