// 霸都丶傲天 2019.10.10, tối ưu hóa bởi Grok 2025
$(function () {
    let dom = document.createElement("span");
    
    config.texts.forEach(function (item, index) {
        let p = document.createElement("p");
        p.innerHTML = item;

        if (config.imgs && config.imgs[item]) {
            let img = document.createElement("img");
            img.src = config.imgs[item];
            img.className = index === config.texts.length - 1 ? "text-img-final" : "text-img";
            img.alt = `Hình ảnh cho: ${item}`;
            img.onerror = () => console.error(`Không tải được hình ảnh: ${config.imgs[item]}`);
            p.appendChild(img);
        } else {
            console.warn(`Không tìm thấy hình ảnh cho câu: ${item}`);
        }

        dom.appendChild(p);
    });

    const container = $("#texts-container");
    if (container.length) {
        container.append(dom);
    } else {
        console.error("Không tìm thấy #texts-container trong DOM");
    }
});

$(function () {
    for (let k in config.desc) {
        const dom = $("#" + k);
        if (dom.length && config.desc[k]) {
            dom.html(config.desc[k]);
        } else {
            console.warn(`Không tìm thấy phần tử #${k} hoặc giá trị config.desc[${k}] rỗng`);
        }
    }
});