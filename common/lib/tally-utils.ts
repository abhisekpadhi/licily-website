type PopupOptions = {
    layout?: 'default' | 'modal';
    width?: number;
    alignLeft?: boolean;
    hideTitle?: boolean;
    overlay?: boolean;
    emoji?: {
        text: string;
        animation: 'none' | 'wave' | 'tada' | 'heart-beat' | 'spin' | 'flash' | 'bounce' | 'rubber-band' | 'head-shake';
    };
    autoClose?: number;
    customFormUrl?: string;
    hiddenFields?: {
        [key: string]: any,
    };
    onOpen?: () => void;
    onClose?: () => void;
    onPageView?: (page: number) => void;
    onSubmit?: (payload: any) => void;
};

const opts: PopupOptions = {
    hideTitle: true,
    layout: 'modal',
    width: 480,
    alignLeft: true,
    overlay: true,
    emoji: {
        text: '💬',
        animation: 'tada',
    },
    autoClose: 10,
    onSubmit: () => {
        alert('Thank you for submitting your application.');
    }
}

export function openTallyForm(formId: string) {
    (window as any).Tally.openPopup(formId, opts)
}
