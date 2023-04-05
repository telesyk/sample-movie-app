'use client';

import React from 'react';
import { Props2, productProp } from './testTypes';

function TestComponent({ product }: productProp) {
  const { title, description, price, category, thumbnail }: Props2 = product;

  return (
    <div className="max-w-xs rounded-lg overflow-hidden transition-shadow hover:shadow-lg">
      <div className="w-full">
        <img
          src={thumbnail}
          alt="product image"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="p-4 flex gap-4 flex-col bg-custom-blue-600/20">
        <div className="flex-1">
          <div className="text-2xl">{title}</div>
        </div>
        <div className="flex-1">
          <button
            type="button"
            className="p-4 w-full rounded transition-colors text-center bg-custom-blue-400 font-semibold hover:bg-custom-blue-400/90"
          >
            Buy ${price}
          </button>
        </div>
        <div className="flex-1">{description}</div>
        <div className="pt-4 flex-1 border-t border-custom-light/50">
          <span className="py-1 px-2 text-xs rounded bg-custom-blue-400/25">
            {category}
          </span>
        </div>
      </div>
    </div>
  );
}

export default TestComponent;
