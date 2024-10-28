import React from 'react';

export const Logo = ({ src, loading = 'lazy', title, alt, href = '#' }) => {
  return src ? (
    <div className="logo">
      <a href={href} title={title}>
        <span>
          <img src={src} alt={alt || title} title={title} loading={loading} />
        </span>
        <span className="logo title">
          无间传媒素材中心
        </span>
      </a>
    </div>
  ) : null;
};
