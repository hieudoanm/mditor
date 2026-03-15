import {
  LandingContent,
  LandingTemplate,
} from '@keep/templates/LandingTemplate';
import { NextPage } from 'next';

const content: LandingContent = {
  navbar: {
    title: 'MD Browser',
    buttonText: 'Open Editor',
    buttonHref: '/app',
  },
  hero: {
    title: 'Write, Preview, and Edit Markdown Instantly',
    tagline:
      'A fast, privacy-first Markdown editor and viewer that works entirely in your browser.',
    buttonText: 'Open MD Editor',
    buttonHref: '/app',
  },
  features: {
    title: 'Features',
    items: [
      {
        id: 'instant-preview',
        emoji: '👀',
        title: 'Instant Preview',
        description: 'See your Markdown rendered in real-time as you type.',
      },
      {
        id: 'syntax-highlighting',
        emoji: '💡',
        title: 'Syntax Highlighting',
        description:
          'Write clean Markdown with helpful syntax highlighting for headings, code, lists, and more.',
      },
      {
        id: 'drag-drop-images',
        emoji: '🖼️',
        title: 'Drag & Drop Images',
        description:
          'Easily add images and media to your documents with drag-and-drop support.',
      },
      {
        id: 'privacy-first',
        emoji: '🔒',
        title: 'Privacy First',
        description:
          'All your documents stay in your browser. Nothing is uploaded or stored remotely.',
      },
      {
        id: 'export-options',
        emoji: '💾',
        title: 'Export Options',
        description:
          'Export your Markdown as HTML, PDF, or raw `.md` files instantly.',
      },
      {
        id: 'large-documents',
        emoji: '⚡',
        title: 'Handles Large Documents',
        description:
          'Edit long notes and technical docs without slowing down your browser.',
      },
    ],
  },
  cta: {
    title: 'Start Writing Markdown Today',
    description:
      'Your privacy-first Markdown editor, optimized for speed and simplicity. No signup required.',
    buttonText: 'Open MD Editor',
    buttonHref: '/app',
  },
  footer: {
    name: 'MD Browser',
  },
};

const HomePage: NextPage = () => {
  return <LandingTemplate content={content} />;
};

export default HomePage;
