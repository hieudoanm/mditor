import { MarkdownPreviewer } from '@mditor/components/MarkdownPreviewer';
import { Navbar } from '@mditor/components/Navbar/Navbar';
import { INITIAL_MARKDOWN } from '@mditor/constants/app';
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
import { useEffect, useState } from 'react';

const FONT_NAME_TIMES: string = 'Times-New-Roman';

const A4_MARGIN: [number, number, number, number] = [72, 72, 72, 72] as [
	number,
	number,
	number,
	number,
];
const ZERO_MARGIN: [number, number, number, number] = [0, 0, 0, 0] as [
	number,
	number,
	number,
	number,
];

const HomePage: NextPage = () => {
	const [
		{ html = '', loading = false, markdown = INITIAL_MARKDOWN },
		setState,
	] = useState<{
		html: string;
		loading: boolean;
		markdown: string;
	}>({
		html: '',
		loading: false,
		markdown: INITIAL_MARKDOWN,
	});

	useEffect(() => {
		const setHTML = async () => {
			const newHTML: string = await marked(markdown);
			setState((previous) => ({ ...previous, html: newHTML }));
		};
		setHTML();
	}, [markdown]);

	const handleDownload = () => {
		setState((previous) => ({ ...previous, loading: true }));
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
			(content) => (content as ContentText).text !== ' ',
		);

		const documentDefinitions: TDocumentDefinitions = {
			pageSize: 'A4' as PageSize,
			pageMargins: A4_MARGIN,
			content: filteredContent,
			styles: {
				'html-h1': {
					fontSize: 12,
					bold: true,
					alignment: 'center' as Alignment,
					margin: ZERO_MARGIN,
					lineHeight: 2.0,
				},
				'html-h2': {
					fontSize: 12,
					bold: true,
					alignment: 'left' as Alignment,
					margin: ZERO_MARGIN,
					lineHeight: 2.0,
				},
				'html-h3': {
					fontSize: 12,
					bold: true,
					italics: true,
					alignment: 'left' as Alignment,
					margin: ZERO_MARGIN,
					lineHeight: 2.0,
				},
				'html-h4': {
					fontSize: 12,
					bold: true,
					alignment: 'left' as Alignment,
					margin: [36, 0, 0, 0] as [number, number, number, number],
					lineHeight: 2.0,
				},
				'html-h5': {
					fontSize: 12,
					bold: true,
					italics: true,
					alignment: 'left' as Alignment,
					margin: [36, 0, 0, 0] as [number, number, number, number],
					lineHeight: 2.0,
				},
				'html-h6': {
					fontSize: 12,
					margin: [36, 0, 0, 0] as [number, number, number, number],
					lineHeight: 2.0,
				},
				'html-p': {
					fontSize: 12,
					margin: ZERO_MARGIN,
					lineHeight: 2.0,
				},
			},
			defaultStyle: {
				font: 'Times',
				fontSize: 12,
				alignment: 'left' as Alignment,
				margin: ZERO_MARGIN,
			},
		};
		pdfMake.createPdf(documentDefinitions).download(`download.pdf`);
		setState((previous) => ({ ...previous, loading: false }));
	};

	return (
		<div className="divide-base-300 flex h-screen w-screen flex-col divide-y overflow-hidden">
			<Navbar />
			<div className="divide-base-300 grid grow divide-x overflow-hidden md:grid-cols-2">
				<div className="flex h-full flex-col gap-y-4 overflow-hidden p-4 md:col-span-1 md:gap-y-8 md:p-8">
					<div className="flex">
						<select className="select select-sm">
							<option className="h1">Heading 1</option>
							<option className="h2">Heading 2</option>
							<option className="h3">Heading 3</option>
							<option className="h4">Heading 4</option>
							<option className="h5">Heading 5</option>
							<option className="h6">Heading 6</option>
							<option className="p">Paragraph</option>
						</select>
					</div>
					<textarea
						id="markdown"
						name="markdown"
						placeholder="Markdown"
						className="scrollbar-none h-full w-full resize-none focus:outline-none"
						value={markdown}
						onChange={(event) => {
							setState((previous) => ({
								...previous,
								markdown: event.target.value,
							}));
						}}
					/>
				</div>
				<div className="h-full overflow-hidden md:col-span-1">
					<div className="flex h-full w-full flex-col gap-y-4 p-4 md:gap-y-8 md:p-8">
						<div className="flex">
							<button
								type="button"
								className="btn btn-primary btn-sm"
								disabled={loading}
								onClick={() => {
									handleDownload();
								}}>
								Download
							</button>
						</div>
						<div className="scrollbar-none h-full w-full overflow-auto">
							<MarkdownPreviewer html={html} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
