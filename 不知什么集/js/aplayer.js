const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    mini: false,
    autoplay: true,
    theme: '#FADFA3',
    loop: 'all',
    order: 'random',
    volume: 0.9,
    mutex: true,
    listFolded: false,
    listMaxHeight: 90,
    lrcType: 3,
    audio: [
        {
            name: '心做し',
            artist: 'majiko',
            url: 'music/心做し-majiko.mp3',
            cover: 'https://ooo.0x0.ooo/2024/09/10/O4aL0F.jpg',
        },
        {
            name: '指纹',
            artist: '杜宣达',
            url: 'music/指纹-杜宣达.mp3',
            cover: 'https://ooo.0x0.ooo/2024/09/10/O4aEw6.jpg',
        },
        {
            name: '童话镇',
            artist: '暗杠',
            url: 'music/童话镇-暗杠.mp3',
            cover: 'https://ooo.0x0.ooo/2024/08/04/Otqplx.jpg',
        },
        {
            name: '你的酒馆对我打了烊',
            artist: '陈雪凝',
            url: 'music/你的酒馆对我打了烊-陈雪凝.mp3',
            cover: 'https://ooo.0x0.ooo/2024/08/04/OtqtcU.jpg',
        },
        {
            name: '一个人的告白(Aback)',
            artist: '银河快递(Galaxy Express)',
            url: 'music/一个人的告白-银河快递(Galaxy Express).mp3',
            cover: 'https://ooo.0x0.ooo/2024/08/04/OtqRZp.jpg',
        },
        {
            name: '来吧，占领我的无私',
            artist: '银河快递(Galaxy Express)',
            url: 'music/来吧，占领我的无私-银河快递(Galaxy Express).mp3',
            cover: 'https://ooo.0x0.ooo/2024/08/04/OtqDMY.webp',
        },
    ]
});