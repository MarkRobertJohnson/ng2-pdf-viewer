/// <reference types="pdfjs-dist" />
import { ElementRef, EventEmitter, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { PDFJSStatic, PDFDocumentProxy, PDFSource, PDFProgressData } from 'pdfjs-dist';
declare global  {
    const PDFJS: PDFJSStatic;
}
export declare class PdfViewerComponent implements OnChanges, OnInit {
    private element;
    static CSS_UNITS: number;
    private _renderText;
    private _stickToPage;
    private _originalSize;
    private _pdf;
    private _page;
    private _zoom;
    private _rotation;
    private _showAll;
    private _canAutoResize;
    private _fitToPage;
    private _externalLinkTarget;
    private _pdfViewer;
    private _pdfLinkService;
    private lastLoaded;
    private resizeTimeout;
    afterLoadComplete: EventEmitter<PDFDocumentProxy>;
    onError: EventEmitter<any>;
    onProgress: EventEmitter<PDFProgressData>;
    constructor(element: ElementRef);
    ngOnInit(): void;
    onPageResize(): void;
    ngOnChanges(changes: SimpleChanges): void;
    src: string | Uint8Array | PDFSource;
    page: any;
    pageChange: EventEmitter<number>;
    renderText: boolean;
    originalSize: boolean;
    showAll: boolean;
    stickToPage: boolean;
    zoom: number;
    rotation: number;
    externalLinkTarget: string;
    autoresize: boolean;
    fitToPage: boolean;
    setupViewer(): void;
    updateSize(): void;
    private isValidPageNumber(page);
    static setExternalLinkTarget(type: string): void;
    private loadPDF();
    private update();
    private render();
    private renderMultiplePages();
    private renderPage(pageNumber);
    static removeAllChildNodes(element: HTMLElement): void;
    private getScale(viewportWidth);
}
