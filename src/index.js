import { useElement, useLayout } from '@nebula.js/stardust';
import properties from './object-properties';
import ext from './ext'
import data from './data';
import { render } from './root';

export default function supernova() {
  return {
    qae: {
      properties,
      data,
    },
    ext: ext,
    component() {
      const el = useElement();
      const layout = useLayout();
      render(el, { layout });
    },
  };
}