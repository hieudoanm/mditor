import { markdown as markdownLang } from '@codemirror/lang-markdown';
import { Compartment, EditorState } from '@codemirror/state';
import { oneDark } from '@codemirror/theme-one-dark';
import { EditorView } from '@codemirror/view';
import { MarkdownPreviewer } from '@keep/components/MarkdownPreviewer';
import { Navbar } from '@keep/components/Navbar/Navbar';
import { INITIAL_MARKDOWN } from '@keep/constants/app';
import { tryCatch } from '@keep/utils/try-catch';
import 'github-markdown-css/github-markdown.css';
import htmlToPdfmake from 'html-to-pdfmake';
import { marked } from 'marked';
import { NextPage } from 'next';
import pdfMake from 'pdfmake/build/pdfmake';
import {
  Alignment,
  Content,
  ContentText,
  PageSize,
  TDocumentDefinitions,
} from 'pdfmake/interfaces';
import { useEffect, useRef, useState } from 'react';
import Tesseract from 'tesseract.js';

/* =========================
   Constants
========================= */
const FONT_NAME_TIMES = 'Times-New-Roman';

const A4_MARGIN: [number, number, number, number] = [72, 72, 72, 72];
const ZERO_MARGIN: [number, number, number, number] = [0, 0, 0, 0];

/* =========================
   Page
========================= */
const AppPage: NextPage = () => {
  const [
    {
      html = '',
      loading = false,
      markdown = INITIAL_MARKDOWN,
      ocrLoading = false,
    },
    setState,
  ] = useState<{
    html: string;
    loading: boolean;
    markdown: string;
    ocrLoading: boolean;
  }>({
    html: '',
    loading: false,
    markdown: INITIAL_MARKDOWN,
    ocrLoading: false,
  });

  /* =========================
     CodeMirror
  ========================= */
  const editorRef = useRef<HTMLDivElement | null>(null);
  const viewRef = useRef<EditorView | null>(null);

  // ✅ Compartment for dynamic editable toggle
  const editableCompartment = useRef(new Compartment()).current;

  useEffect(() => {
    if (!editorRef.current) return;

    const state = EditorState.create({
      doc: markdown,
      extensions: [
        oneDark,
        markdownLang(),
        EditorView.lineWrapping,

        // ✅ Use compartment
        editableCompartment.of(EditorView.editable.of(!ocrLoading)),

        EditorView.updateListener.of((update) => {
          if (update.docChanged) {
            const value = update.state.doc.toString();
            setState((prev) => ({ ...prev, markdown: value }));
          }
        }),
      ],
    });

    viewRef.current = new EditorView({
      state,
      parent: editorRef.current,
    });

    return () => viewRef.current?.destroy();
  }, []);

  // ✅ Proper dynamic toggle
  useEffect(() => {
    const view = viewRef.current;
    if (!view) return;

    view.dispatch({
      effects: editableCompartment.reconfigure(
        EditorView.editable.of(!ocrLoading)
      ),
    });
  }, [ocrLoading]);

  useEffect(() => {
    const view = viewRef.current;
    if (!view) return;

    const current = view.state.doc.toString();
    if (current !== markdown) {
      view.dispatch({
        changes: { from: 0, to: current.length, insert: markdown },
      });
    }
  }, [markdown]);

  /* =========================
     Markdown → HTML
  ========================= */
  useEffect(() => {
    const setHTML = async () => {
      const newHTML = await marked(markdown);
      setState((prev) => ({ ...prev, html: newHTML }));
    };
    setHTML();
  }, [markdown]);

  /* =========================
     OCR
  ========================= */
  const handleOCRFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setState((prev) => ({ ...prev, ocrLoading: true }));

    const file = e.target.files?.item(0);
    if (!file) {
      setState((prev) => ({ ...prev, ocrLoading: false }));
      return;
    }

    const { data = { data: { text: '' } }, error } = await tryCatch(
      Tesseract.recognize(file, 'eng', {
        logger: (m) => console.log(m),
      })
    );

    if (error) {
      setState((prev) => ({ ...prev, ocrLoading: false }));
      return;
    }

    const text = data?.data?.text?.trim();

    if (!text) {
      setState((prev) => ({ ...prev, ocrLoading: false }));
      return;
    }

    // ✅ Replace entire content
    setState((prev) => ({
      ...prev,
      markdown: text,
      ocrLoading: false,
    }));
  };

  /* =========================
     PDF Export
  ========================= */
  const handleDownload = () => {
    setState((prev) => ({ ...prev, loading: true }));

    const origin = window.location.origin;

    pdfMake.fonts = {
      Times: {
        normal: `${origin}/fonts/${FONT_NAME_TIMES}/${FONT_NAME_TIMES}-Regular.ttf`,
        bold: `${origin}/fonts/${FONT_NAME_TIMES}/${FONT_NAME_TIMES}-Bold.ttf`,
        italics: `${origin}/fonts/${FONT_NAME_TIMES}/${FONT_NAME_TIMES}-Italic.ttf`,
        bolditalics: `${origin}/fonts/${FONT_NAME_TIMES}/${FONT_NAME_TIMES}-Bold-Italic.ttf`,
      },
    };

    const converted: Content[] = htmlToPdfmake(html) as Content[];

    const filteredContent = converted.filter(
      (content) => (content as ContentText).text !== ' '
    );

    const documentDefinitions: TDocumentDefinitions = {
      pageSize: 'A4' as PageSize,
      pageMargins: A4_MARGIN,
      content: filteredContent,
      styles: {
        'html-h1': {
          fontSize: 12,
          bold: true,
          alignment: 'center',
          margin: ZERO_MARGIN,
          lineHeight: 2,
        },
        'html-h2': {
          fontSize: 12,
          bold: true,
          alignment: 'left',
          margin: ZERO_MARGIN,
          lineHeight: 2,
        },
        'html-h3': {
          fontSize: 12,
          bold: true,
          italics: true,
          alignment: 'left',
          margin: ZERO_MARGIN,
          lineHeight: 2,
        },
        'html-h4': {
          fontSize: 12,
          bold: true,
          alignment: 'left',
          margin: [36, 0, 0, 0],
          lineHeight: 2,
        },
        'html-h5': {
          fontSize: 12,
          bold: true,
          italics: true,
          alignment: 'left',
          margin: [36, 0, 0, 0],
          lineHeight: 2,
        },
        'html-h6': { fontSize: 12, margin: [36, 0, 0, 0], lineHeight: 2 },
        'html-p': { fontSize: 12, margin: ZERO_MARGIN, lineHeight: 2 },
      },
      defaultStyle: {
        font: 'Times',
        fontSize: 12,
        alignment: 'left',
        margin: ZERO_MARGIN,
      },
    };

    pdfMake.createPdf(documentDefinitions).download('download.pdf');

    setState((prev) => ({ ...prev, loading: false }));
  };

  /* =========================
     UI
  ========================= */
  return (
    <div className="divide-base-300 flex h-screen w-screen flex-col divide-y overflow-hidden">
      <Navbar />

      <div className="divide-base-300 grid grow divide-x overflow-hidden md:grid-cols-2">
        {/* LEFT: Editor */}
        <div className="flex h-full flex-col overflow-hidden">
          <div className="border-base-300 flex gap-2 border-b p-4">
            <label
              className={`btn btn-secondary btn-sm cursor-pointer ${
                ocrLoading ? 'btn-disabled' : ''
              }`}>
              <span>{ocrLoading ? 'Processing OCR...' : 'Upload Image'}</span>
              <input
                type="file"
                accept="image/*"
                onChange={handleOCRFile}
                className="hidden"
                disabled={ocrLoading}
              />
            </label>
          </div>

          <div
            ref={editorRef}
            className={`h-full w-full overflow-auto text-sm ${
              ocrLoading ? 'pointer-events-none opacity-50' : ''
            }`}
          />
        </div>

        {/* RIGHT: Preview */}
        <div className="flex h-full flex-col overflow-hidden">
          <div className="border-base-300 border-b p-4">
            <button
              type="button"
              className="btn btn-primary btn-sm"
              disabled={loading || ocrLoading}
              onClick={handleDownload}>
              Download
            </button>
          </div>

          <div className="h-full w-full overflow-auto p-4">
            <MarkdownPreviewer html={html} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppPage;
